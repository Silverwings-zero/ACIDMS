# ACIDS
Atlanta Police Identification Database System
Georgia Tech CS4440 Project Spring 2021

### Known bugs and defects
- input zipcode outside of Atlanta will give no results at all since the database only includes crime incidents in atlanta
- You have to change the api key in the file dataListView.js(line 90) to the most updated api key in http://www.zipcodeapi.com/API zipcode to location information. It is changing everyday
- API Location information stop showing after 20 or so queries, because of API limits

## Install Guide
Follow the intructions below step-by-step to run our application on your end.

### Pre-requisites
Any common computers and common operating systems that support Node.js and Git.

### Dependent Libraries
Download and install latest LTS version of Node.js supported on your operating system ([*link to official download*](https://nodejs.org/en/download/))
- Verify `node` is a valid command by running `node -v` in your command prompt/terminal, the current installed version number (e.g. `v14.15.1`) is expected to show up.
- Verify `npm` is a valid command by running `npm -v` in your command prompt/terminal, the current installed version number (e.g. `6.14.8`) is expected to show up.

[Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you have not already.
- Make sure `git` is a valid command by running `git --version` in your command prompt/terminal, the current installed version number (e.g. `git version 2.16.0.windows.2`) is expected to show up.

### Download Instruction
Clone the current repository to your local directory using:
```
git clone https://github.com/Silverwings-zero/ACIDMS.git
```

### Installation Guide
Run `npm install` in the root directory of your cloned local repository.

This will install all the necessary packages according to *package.json*.

### Run Instructions
Run `npm start` in the root directory of your cloned local repository.

Expo Dev Tools (web-based control panel) will pop up as a web page in your browser.

To run on your **smartphone**
1. Download Expo Client app from App Store or Google Play.
2. Select LAN or Tunnel for connection option on Expo Dev Tools.
3. Scan the QR code on Expo Dev Tools page with your smartphone.
4. When the link pops out, click it to enter our application via Expo Client. (It might take from a couple seconds to a few minutes to finish building the application and downloading it to your phone.)

To run on **emulators**
- **iOS** (on Mac only)
  - Install [*XCode*](https://apps.apple.com/us/app/xcode/id497799835).
- **Android**
  - Install [*Android Studio*](https://developer.android.com/studio).
  - Create an Android vidtual device following [*this guide*](https://developer.android.com/studio/run/managing-avds).
- Click on *“Run on Android device/emulator”* or *“Run on iOS simulator”* on Expo DevTools to run our application in your installed emulator.

### Troubleshooting
- `'npm' is not recognized as interal or external command` or `npm: command not found`
  - npm is now distributed with Node.js. Make sure you download and install the latest LTS version of Node.js, which should automatically install the LTS version of npm. ([*link to official download*](https://nodejs.org/en/download/))
- `Package not found`
  - Install the latest version of the package specified using `npm install` and retry.
  
