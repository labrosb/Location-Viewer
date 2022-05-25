# Location-Viewer

Location Viewer is a mobile app displaying a different locations on a map and on a list. It also includes a location details view and save to favorites functionality

## Instructions

You can run the app both on iOS and Android on a physical device or simulator

### Install
- Clone the repo to your device
- * Create a Google API key https://developers.google.com/maps/documentation/javascript/get-api-key
  - For Android: include your API key in `AndroidManifest.xml` (line 27) in `android/app/src`
  - For iOS: include your API key in `AppDelegate.mm` (line 34) in `ios/LocationViewer`
- Open a terminal, navigate to the root of the project and execute yarn install, to install the project's dependencies
- iOS only: navigate to ios folder and execute `pod install`

### Run
After executing the installation steps, from the terminal execute:
 - For android: yarn android
 - For iOS: yarn iOS

**In development mode the app might work without this step*
