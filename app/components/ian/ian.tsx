/*
 * Ian
 * Created by Tzingtao Chow
 * ---
 *
 * Iana (Ian 的复数形式) 是用于填充空 List 的提示性组件。
 * 如主页的「你还没有借阅书籍」，Schedule Screen 的「今天无课」等。
 * 样式上，它表现为淡灰色的圆角矩形。
 *
 */

import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { color, layoutParam } from "../../theme"

export interface IanProps {
  tx?: string
  text?: string
  style?: ViewStyle
  palette?
}

export function Ian(props: IanProps) {
  const { tx, text, style, palette } = props
  let colors = palette || [color.washed, color.lightGrey]

  const ianView: ViewStyle = {
    backgroundColor: colors[0],
    borderRadius: layoutParam.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  }

  const ianText: TextStyle = {
    color: colors[1],
    fontWeight: "bold",
    textTransform: "uppercase",
  }

  return (
    <View style={[ianView, style]}>
      <Text tx={tx} text={text} style={ianText} />
    </View>
  )
}
