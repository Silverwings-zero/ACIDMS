# ACIDS
Atlanta Police Identification Database System
Georgia Tech CS4440 Project Spring 2021

## Data Preparation and Setup

**Which database system(s) and version(s) are you using? How do we install it/them? (providing a link to official documentation will be enough)**<br /><br />
Firebase 9.10 https://firebase.google.com/docs/web/setup

**How do we download the data you used for your project? Please do NOT submit ALL the data with your code (Submitting a very small portion (< 5 MB) so that we can run the demo might be okay)**<br /><br />
The data is in Firebase. Since Firebase configuration is in our code base, there is no need to download or load the data.

## Application and code

**Which programming language(s) and version(s) are you using (Python, Java 8, C++, etc.)?**<br /><br />
Javascript ES6

**List the third-party libraries needed to execute your code and how do we install them (For ex. MySQL/neo4j connector for Python)**

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

## Code Documentation and References

**Did you use some code from GitHub or other sources? If yes provide the link.**<br /><br />
https://github.com/VictorYu379/hyppoe-junior-design

**If you used some online code, what changes did you make to the code?**<br /><br />
We only used the dummy page to make this app runnable. All the functional classes are written by ourselves.

**Give a list of files in your submission which are written by you.**<br /><br />
* dataListView.js
* dataMapView.js
* heatMapView.js
* queryFields.js
* zipcodeEntry.js

### Known bugs and defects
- input zipcode outside of Atlanta will give no results at all since the database only includes crime incidents in atlanta
- You have to change the api key in the file dataListView.js(line 90) to the most updated api key in http://www.zipcodeapi.com/API zipcode to location information. It is changing everyday
- API Location information stop showing after 20 or so queries, because of API limits

  
