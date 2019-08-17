let json = {
  common: {
    ok: "OK",
    confirm: "Confirm",
    cancel: "Cancel",
    back: "Back",
    close: "Close",
    gotIt: "Got it!",
    time: {
      remaining: "",
      daysLeft: " Days Left",
    },
    unknown: "Unknown",
    lipsum: {
      a:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus metus ac pellentesque pellentesque. Donec quis egestas purus. Donec ut ligula sit amet urna posuere vehicula ut laoreet dui. Fusce molestie, libero ut maximus euismod, ante dolor suscipit erat, a mattis nibh mauris quis ipsum. Mauris et bibendum sem, id scelerisque urna. Proin libero mi, sodales ac velit eu, elementum volutpat odio. Donec pharetra tempor vehicula.",
      b:
        "Maecenas efficitur consequat mi. In sit amet ornare est, nec sagittis magna. Donec quis sem ultrices, faucibus augue eget, fringilla sem. ",
      c:
        "Nam consectetur imperdiet urna, at convallis elit consequat id. Donec mi massa, elementum et sem sit amet, ornare lacinia tortor. Duis vitae velit sapien. Nulla vitae risus gravida, malesuada magna in, ultrices diam. Duis venenatis leo eget enim euismod euismod. Nulla facilisi. Mauris maximus diam dolor, eu aliquet nulla lobortis a. Aenean mattis sodales viverra.",
      d:
        "Aenean vitae justo massa. Aliquam sed lorem aliquet metus placerat pellentesque sed ac lacus. Mauris vehicula, sapien et aliquam finibus, tortor ipsum porta lacus, a interdum quam sem id arcu. Nulla eget aliquam quam. Praesent sapien mauris, pretium eget tortor nec, condimentum mollis quam. Proin eget enim vulputate, feugiat augue sit amet, ullamcorper quam. Duis a nibh ut arcu malesuada euismod ut et leo. Curabitur magna augue, suscipit ac fermentum non, auctor quis tellus.",
    },
    prepareToLeave: "Be prepared to leave WePeiyang...",
    providedInWebHint: "We provide this service in our web platform. Open Link in Browser?",
  },
  data: {
    noAvailableData: "No available data",
    prepareDataSuccess: "Successfully loaded newest data",
    prepareDataFailed: "Failed to refresh data due to some errors in the network fetching process.",
  },
  auth: {
    checkingAuthStatus: "Checking Auth Status...",
    login: "Log In",
    logout: "Sign Me Out",
    loginSuccess: "Login Success",
    loginFailure: "Login Failed...",
    logoutSuccess: "Logout Success",
    tokenStoreFailure:
      "Failed to store token locally. Additional manual login may be need during the next start.",
    tokenDeleteFailure:
      "Failed to delete local token. If the problem persists, we recommend you to clear App storage in system settings to ensure account safety.",
  },
  loginScreen: {
    greetings: "It's always nice to have you back.",
    username: "TWT Account Username",
    password: "Password",
  },
  homeScreen: {
    greetings: "Hello",
  },
  ecard: {
    noCardsBound: "No cards bound",
    card: "Card",
    holder: "Holder",
    expiresBy: "Expires by",
    dailyExpense: "Today",
    monthlyExpense: "This Month",
    billingDetails: "Billing Details",
    noTransaction: {
      pre: "No transaction record found in the last ",
      post: " days",
    },
    loadMore: "Load one more week",
    rangeHint: "The data shown here ranges to the day of your most recent bill.",
  },
  newsScreen: {
    header: "News",
  },
  tjuScreen: {
    header: "TJU Network",
  },
  settings: {
    settings: "Settings",
    sections: {
      general: "General",
      elsewhere: "Elsewhere",
    },
    hideGpa: "Hide GPA On Homepage",
    daysEachWeek: {
      title: "Displayed Days Each Week",
      intro: "Choose your preferred weekdays interval.",
      options: "Display %{count} days each week",
    },
    wpyGithub: {
      title: "WePeiyang on Github",
      sub:
        "WePeiyang is an open-sourced project. Help make it better by contributing to our community.",
    },
    timGroup: "天外天用户社区 QQ/TIM Group",
    helpNSupport: {
      title: "Help & Support",
      sub: "Need help? Encountered a problem? Welcome to our support forum.",
    },
    language: "Language",
    languageSetting: "Language Settings",
    languageWarning:
      "Please note that only the texts within WePeiyang App level would be changed. Text that rely on external resources like course names and book names will not be translated.",
  },
  accountBinding: {
    greetings: {
      ecard: "Connect your accounts. Discover more possibilities.",
      tju: "Connect your accounts. Discover more possibilities.",
      lib: "Connect your accounts. Discover more possibilities.",
    },
    unbound: "Unbound",
    bound: "Bound",
    bind: "Bind",
    unbind: "Unbind",
    libraryAccount: "Library account",
    ecardAccount: "E-card account",
    portalAccount: "Portal account",
    yourStudentId: "Your Student ID",
    ecardPassword: "E-card password (Used on POS machines)",
    etjuPassword: "Your e.tju.edu.cn Password",
    libPassword: "Your library password",
    libPasswordHint:
      "Your library password is the password used on lib.tju.edu.cn. If you didn't know what it is, please try initial password 666666, or the 12th-17th digits of your National ID card. Please consult the information desk in Tianjin University Library for password reset of any further information.",
    bindSuccess: "Successfully bound. Additional re-login may be needed.",
    unbindSuccess: "Successfully unbound. Additional re-login may be needed.",
    unbindModal: {
      heading: "This account is currently connected to WePeiyang.",
      content:
        "You can unbind this account anytime. After disconnecting, you wouldn't be able to use services relating to this account.",
    },
    unbindEcardHint:
      "To unbind your e-card, you just need to log out. Your e-card account would be unconnected when you log in again.",
    libLatencyHint:
      "Please note that your account binding status would be updated after the next login.",
    tjuLatencyHint:
      "Please note that your account binding status would be updated after the next login.",
  },
  tab: {
    wpy: "WPY",
    news: "News",
    tju: "TJU",
  },
  modules: {
    bike: "Bike",
    contact: "Contact",
    learning: "Learning",
    library: "Library",
    ecard: "E-card",
    gpa: "GPA",
    gpaCurve: "GPA Curve",
    classroom: "Classroom",
    schedule: "Schedule",
    news: "News",
    mall: "Mall",
    party: "Party",
  },
  gpa: {
    totalWeighted: "Total Weighted",
    totalGpa: "Total GPA",
    creditsEarned: "Credits Earned",
    semestralWeighted: "Weighted",
    semestralGpa: "GPA",
    semestralCredits: "Credits",
    credits: "Credits",
    order: {
      orderedBy: "Ordered by",
      credits: "Credits",
      name: "Name",
      score: "Score",
    },
    info: {
      title: "About GPA",
      content:
        "The indicators, charts and scores calculated by WePeiyang are for reference only. Please consult the Tianjin University Academic Affairs Department for official algorithms, policies and grading results.",
    },
  },
  schedule: {
    noCourseToday: "No course today",
    id: "ID",
    logicNo: "Logic No.",
    campus: "Campus",
    location: "Location",
    weeks: "Weeks",
    time: "Time",
    WEEK: {
      pre: "WEEK ",
      post: "",
    },
  },
  library: {
    noBooks: "You didn't borrow any books",
    notBound: "Library account not bound",
    callNo: "Call No.",
    type: "Type",
    location: "Location",
    borrowedTime: "Borrowed",
    returnBy: "Return By",
    renew: "Renew",
    renewCaveat:
      "A single book can be renewed for only three times. We recommend that you renew your books when the due date is approaching. Proceed?",
  },
  contact: {
    searchBar: "Search keywords...",
    department: "Department",
    noUnit: "No unit found in this department",
    infoSource: "Info Source",
  },
}

let arr = []

const iterate = obj => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "string") {
      arr.push(obj[key])
    }
    if (typeof obj[key] === "object") {
      iterate(obj[key])
    }
  })
}

iterate(json)

let str = ""
arr.forEach(i => {
  str += `
`
  str += i
})

console.log(str)

// =======