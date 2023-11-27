# MUST FOLLOW CODE QUALITY INSTRUCTIONS

## WINITJOBS

## Description

**Your Project Desciption** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Add FIREBASE FILES FOR DEVELOPMENT AND PRODUCTION(IF NEEDED)

Project is fully setup just go to ios then inside your project folder in this case its winitjobs go inside and create group name GoogleServices and add different folders like production and development and paste their firebase plist files in them thats it
Android side go to android app src and create folder one for production other for development and paste googleservices.json there.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Start your Application

### Android Development

      npm run android

### Android Production

      npm run android:production

### Ios Development

      npm run ios

### Ios Production

      npm run ios:production

# APK AND ABB GENERATION GUIDE

## APK DEVELOPMENT ENVIROMENT

      npm run androidapk

## APK PRODUCTION ENVIROMENT

      npm run androidapk:production

## ABB DEVELOPMENT ENVIROMENT

      npm run androidabb

## ABB PRODUCTION ENVIROMENT

      npm run androidabb:production

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# IMPORTANT MAKE SURE TO FOLLOW ALL THESE INSTRUCTIONS BELOW

## Code Quality Instructions

### Unused Modules

Delete any unused modules from the project.

### Unused Imports and Variables etc:

Remove every unused import, variable, and function.

### Component Usage

Use components effectively during development.

### Duplication

Keep code duplicacy less than 3%.

### Naming Conventions

Follow camel case when declaring variables, functions, classes, etc.

### Usage of Constants

Avoid to use contants like screennames manually try to declare constants in a seperate file import and use it some other constants examples are colors fonts etc.

### envs

Make sure to decalre Api keys in envs and any other data that is sensitive declare in env.

### Avoid Unknown, any and undefined (if project in Typescript)

Make sure to define types for every possible module avoid using undefined any unknown

### Sonar Friendliness

Ensure that your code is Sonar-friendly.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
