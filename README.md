# the-space

## Getting Started

Prerequisites:

1. Install Node
2. Install Expo CLI `npm install -g expo-cli`
3. Register for an expo account https://expo.dev/
4. Login to expo `expo login`

Run the project:

1. `npm install`
2. Run app
   * `npm run android`
   * `npm run ios`
   * `npm run web`

Note: 
* Add a new NPM packages
  * `expo install <insert name of package>`

## Publishing Application

1. Publish `expo publish`

## Viewing Application
2. Download the `expo go` app on your phone
3. Go to this link and scan the QR code on your phone to view the app https://expo.dev/@jess243/the-space?serviceType=classic&distribution=expo-go

## Tutorial

1. Create an React Native project and run on emulator

    Run the following commands to set up your first React Native app. Explaination what you did can be found [here](https://reactnative.dev/docs/environment-setup).

    ```bash
    npm install -g expo-cli
    expo init AwesomeProject
    cd AwesomeProject
    npm start
    ```

    For this tutorial you will need:

    - **Expo** - Framework and platform for universal React applications. Set of tools and services built around React Native.
    - Used to create a React Native App.
    - iOS emulator
    - Android emulator
    - **React Native** - Framework to allow development on iOS, Android and Web Apps.

2. Run project on real device

    Follow this [guide](https://reactnative.dev/docs/running-on-device) to run a physical device.
