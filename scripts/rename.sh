#!/bin/bash

# Function to replace package name in Android files
replace_android_package() {
  local old_package=$1
  local new_package=$2

  # Replace package name in AndroidManifest.xml
  sed -i '' "s/$old_package/$new_package/g" android/app/src/main/AndroidManifest.xml

  # Rename the package directory
  mv "android/app/src/main/java/$old_package" "android/app/src/main/java/$new_package"
}

# Function to replace app name in Android files
replace_android_app_name() {
  local old_name=$1
  local new_name=$2

  # Replace app name in strings.xml
  sed -i '' "s/$old_name/$new_name/g" android/app/src/main/res/values/strings.xml
}

# Function to replace package name in iOS files
replace_ios_package() {
  local old_bundle_identifier=$1
  local new_bundle_identifier=$2

  # Replace bundle identifier in Info.plist
  plutil -replace CFBundleIdentifier -string "$new_bundle_identifier" ios/YourAppName/Info.plist

  # Rename the app directory
  mv "ios/YourAppName" "ios/$new_bundle_identifier"
}

# Function to replace app name in iOS files
replace_ios_app_name() {
  local old_display_name=$1
  local new_display_name=$2

  # Replace display name in Info.plist
  plutil -replace CFBundleDisplayName -string "$new_display_name" ios/YourAppName/Info.plist
}

# Replace package name and app name for Android
replace_android_package "com.yourapp" "com.newpackage"
replace_android_app_name "YourApp" "NewAppName"

# Replace package name and app name for iOS
replace_ios_package "com.yourapp" "com.newpackage"
replace_ios_app_name "YourApp" "NewAppName"

# To Run this script just run below command in terminal
# chmod +x script.sh