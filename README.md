## Zemoga Mobile Tech - React native

### Architecture

I'm use flux architecture because help the app to be predictable, debuggable and well organized.

This Architecture consists basically in three parts actions, reducers, store.

- **Actions: events that dispatch new state.

- **Reducers: pure functions that help to handle state a return a new one.

- **Store: is where the state is.

- **Components: handle the UI, the connected with redux are container and the others are presentational or dumb.


### third party

- async-storage: it use under the hood sqlite, is fast and intuitive of use , use something like Real would be over killer, because the size of project.

- redux: it's the best and most standardized implementation of flux, any new person to the react ecosystem

- redux thunk

- react-navigation: It help to navigate between screens, well documented, easy to implement and reason about.

- react-native-vector-icons: the only lib that give us a lot of icons to work.

## Installation

Clone project
```
 git clone https://github.com/alesanabria/rnPosts
```

open folder
```
  cd rnPosts
```

Install React Native cli
```
npm install -g react-native-cli
```

run on IOS or Android
for android you need to open first the emulator from android studio or connect an Android device
```
  react-native run-ios
  react-native run-android
```