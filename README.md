## React Hybrid App

A React/React Native app that runs everywhere, web, iOS and Android, using
[React Native Web](https://github.com/necolas/react-native-web) for web and
[Expo](https://docs.expo.io/) for mobile.

This project was bootstrapped with Expo's [tabs template](https://docs.expo.io/versions/latest/guides/up-and-running.html) and expanded to run on web.

### Running the app
Script | Action
-------|-------
`yarn start` | Starts Expo CLI's dev server and allows you to open the app on both iOS and Android via Expo's app. Can be run concurrently with `start-web`
`yarn start-web` | Starts webpack and allows you to access the app at [http://localhost:8080]. Can be run concurrently with `start`
The full list can be found in `package.json`.

### Gify goodness
[<img src='https://raw.githubusercontent.com/charlottetan/react-hybrid-app/master/_screenshots/ios.gif' width='30%'>](https://raw.githubusercontent.com/charlottetan/react-hybrid-app/master/_screenshots/ios.gif) [<img src='https://raw.githubusercontent.com/charlottetan/react-hybrid-app/master/_screenshots/web.gif' width='90%'>](https://raw.githubusercontent.com/charlottetan/react-hybrid-app/master/_screenshots/web.gif)

### Further reading
I stood on the shoulders of these giants:
* Jonny Kalambay's [Your First Hybrid App in Minutes — React Native on the Web](https://medium.com/@jonnykalambay/your-first-hybrid-app-in-15-minutes-react-native-on-the-web-2cc2646051e) and corresponding github repo, [hybrid-app-pokedex](https://github.com/jonnyk20/hybrid-app-pokedex)
* Ron Arts's [Web support for create-react-native-app](https://medium.com/@ron.arts/web-support-for-create-react-native-app-80b16f930326) and corresponding github repo, [expo-web](https://github.com/raarts/expo-web)
* Nicolas Gallagher's [React Native Web](https://github.com/necolas/react-native-web)
* Yannick Spark's [Write once, run anywhere with Create React (Native) App and react-native-web](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0)
