import * as React from "react"
import { connect } from "react-redux"
import {
  ActivityIndicator,
  Animated,
  DeviceEventEmitter,
  FlatList,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from "react-native"
import Color from "color"
import { Screen } from "../../components/screen"
import { color, ssGlobal } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { connectedEcardBlock as EcardBlock } from "../../components/ecard-block"
import { TopBar } from "./top-bar"
import { Text } from "../../components/text"

import {
  fetchEcardLineChart,
  fetchEcardProfile,
  fetchEcardTotal,
  fetchEcardTurnover,
} from "../../actions/data-actions"
import { EcardSnack } from "./ecard-snack"
import { EcardBar } from "./ecard-bar"
import { Button } from "../../components/button"

import ss from "./ecard-screen-style"
import { Toasti } from "../../components/toasti"

export interface EcardScreenProps extends NavigationScreenProps<{}> {
  ecard?
  fetchEcardProfile?
  fetchEcardTurnover?
  fetchEcardTotal?
  fetchEcardLineChart?
}

export class EcardScreen extends React.Component<EcardScreenProps, {}> {
  state = {
    refreshing: false,
    loadingMore: false,
    daysToLoad: 2,
    renderChart: false, // Defer chart render for better entry performance
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    this._onRefresh()
    setTimeout(() => {
      this.setState({ renderChart: true })
      Animated.timing(this.state.fadeAnim, {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      }).start()
    }, 1)
  }

  prepareData = async () => {
    await Promise.all([
      this.props.fetchEcardProfile(this.props.ecard.auth.cardId, this.props.ecard.auth.password),
      this.props.fetchEcardTurnover(
        this.props.ecard.auth.cardId,
        this.props.ecard.auth.password,
        this.state.daysToLoad,
      ),
      this.props.fetchEcardLineChart(this.props.ecard.auth.cardId, this.props.ecard.auth.password),
      this.props.fetchEcardTotal(this.props.ecard.auth.cardId, this.props.ecard.auth.password),
    ])
      .then(() => {
        DeviceEventEmitter.emit("showToast", <Toasti tx="data.prepareDataSuccess" preset="ecard" />)
      })
      .catch(err => {
        console.log(err)
        DeviceEventEmitter.emit("showToast", <Toasti tx="data.prepareDataFailed" preset="error" />)
      })
  }

  _onRefresh = () => {
    this.setState({ refreshing: true })
    this.prepareData().then(() => {
      this.setState({ refreshing: false })
    })
  }

  _keyExtractor = (item, index) => String(index)

  _loadMore = async () => {
    this.setState({ daysToLoad: this.state.daysToLoad + 1, loadingMore: true }, async () => {
      await Promise.all([
        this.props.fetchEcardTurnover(
          this.props.ecard.auth.cardId,
          this.props.ecard.auth.password,
          this.state.daysToLoad,
        ),
      ])
        .then(() => {
          this.setState({ loadingMore: false })
        })
        .catch(() => {
          this.setState({ loadingMore: false })
          DeviceEventEmitter.emit(
            "showToast",
            <Toasti tx="data.prepareDataFailed" preset="error" />,
          )
        })
    })
  }

  render() {
    const { ecard } = this.props

    return (
      <Screen style={ss.screen}>
        <StatusBar translucent backgroundColor={"transparent"} barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              tintColor={color.module.ecard[1]}
              colors={[color.module.ecard[0]]}
            />
          }
        >
          <TopBar actions={[() => this.props.navigation.goBack(), () => {}, this._onRefresh]} />

          <View style={ss.container}>
            <EcardBlock
              palette={[
                Color(color.module.ecard[0]).mix(Color("white"), 0.02),
                color.module.ecard[1],
                color.module.ecard[1],
              ]}
            />

            <Animated.View style={{ ...ss.ecardBar, opacity: this.state.fadeAnim }}>
              {ecard.lineChart && this.state.renderChart && <EcardBar data={ecard.lineChart} />}
            </Animated.View>

            {ecard.total && (
              <View style={ss.stat}>
                <View style={ss.statPair}>
                  <Text text="Daily Expense" style={ss.statKey} />
                  <Text style={ss.statVal} preset="h3">
                    <Text text="¥" style={ss.yen} />
                    <Text text={Number(ecard.total.total_day).toFixed(2)} />
                  </Text>
                </View>
                <View style={ss.statPair}>
                  <Text text="Monthly Expense" style={ss.statKey} />
                  <Text style={ss.statVal} preset="h3">
                    <Text text="¥" style={ss.yen} />
                    <Text text={Number(ecard.total.total_30_days).toFixed(2)} />
                  </Text>
                </View>
              </View>
            )}

            <Text style={ss.caption}>
              <Text text="▼ billing details" preset="lausanne" />
            </Text>

            <FlatList
              style={ss.list}
              contentContainerStyle={ss.listContainer}
              data={ecard.turnover}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (
                <EcardSnack
                  style={ss.snackStyle}
                  location={item.location}
                  amount={item.amount}
                  date={item.date}
                  time={item.time}
                  type={item.type}
                  subType={item.sub_type}
                />
              )}
            />

            <Button style={ss.loadMoreTouchable} onPress={this._loadMore}>
              <ActivityIndicator
                style={[
                  ssGlobal.buttonLoadingIndicator,
                  { opacity: this.state.loadingMore ? 1 : 0 },
                ]}
                color={color.module.ecard[0]}
                size={ssGlobal.loadingSize}
              />
              <Text text="Load One More Day" style={ss.loadMoreText} />
            </Button>
          </View>
        </ScrollView>
      </Screen>
    )
  }
}

const mapStateToProps = state => {
  return {
    ecard: state.dataReducer.ecard,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEcardProfile: async (cardId, password) => {
      await dispatch(fetchEcardProfile(cardId, password))
    },
    fetchEcardTurnover: async (cardId, password, days) => {
      await dispatch(fetchEcardTurnover(cardId, password, days))
    },
    fetchEcardTotal: async (cardId, password) => {
      await dispatch(fetchEcardTotal(cardId, password))
    },
    fetchEcardLineChart: async (cardId, password) => {
      await dispatch(fetchEcardLineChart(cardId, password))
    },
  }
}

export const connectedEcardScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EcardScreen)
