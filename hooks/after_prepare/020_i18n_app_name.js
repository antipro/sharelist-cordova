#!/usr/bin/env node

const fs = require('fs');

var fsCallback = function (err) {
  if (err) {
    console.error("Failed to create directory or file.");
    throw err;
  }
}

var platforms = (process.env.CORDOVA_PLATFORMS ? process.env.CORDOVA_PLATFORMS.split(',') : []);

if (platforms.indexOf('android') > -1) {
  console.log("Adding I18N App Name for Android");
  // Copy over the Chinese Resource Files
  fs.stat('platforms/android/res/values-zh-rCN', (err, stats) => {
    if (stats === undefined || !stats.isDirectory()) {
      fs.mkdir('platforms/android/res/values-zh-rCN', fsCallback);
    }
    fs.copyFile('res/i18n/android/values-zh-rCN/strings.xml', 'platforms/android/res/values-zh-rCN/strings.xml', fsCallback);
  })
  console.log('Added I18N Resource Files for Android');
} else {
  console.warn('I18N Resource Files were NOT added for Android');
}