
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg)]

# ng-chrome-extension-kit
A library that helps you develop chrome extensions with angular. implements chrome extensions with mocks 

# Installation

 ```
 bower install guy-mograbi-at-gigaspaces/ng-chrome-extension-kit
 ```

 in your index.html

 ```
 <script src="bower_components/ng-chrome-extension-kit/src/chrome.js></script>
 ```


 # Usage example


 ```
 angular.module('myApp',[ 'chrome' ]);

 // inject
 angular.module('myApp').service('MyService',function( chrome ){
 })
 ```


# Why use this library

building a chrome extension is easy, but now it is even easier. 

when you develop, apis like chrome's sync are not available. 
plus, they are not angular friendly. 

with my library, you will not see `undefined` errors while developing and using missing chrome apis and you will get an angular friendly api. 



# Functions

## onMessage (callback)

wraps `chrome.runtime.onMessage.addListener`. will print `added listener` in development mode

The callback expects to get `request,sender,sendResponse` just like in the chrome's api.

## setBadgeText (opts)

wraps `chrome.browserAction.setBadgeText`.

opts can contains whatever chrome's api supports.

in case of text field, my wrapper will convert the value to string. (in chrome's api, if you pass a number it will fail).

in case of missing api, will print `setting badge` with opts and error.

## sendMessage(opts)

wraps `chrome.runtime.sendMessage`.

in development mode will print `sending message` with opts value.

## getParameterByName(name)

this function does not wrap any chrome api. it is a helper function that parses the url and returns query parameter value.

for the query string `?a=b&c=d` running `chrome.getParameterByName('a')` will return `b`

## setDefaultConfig (defaults)

sets the default value returned by `readConfig` which wraps `chrome.storage.sync.get` in case this api is missing.

helps in development mode.

## saveConfig(config)

wraps `chrome.storage.sync.set`.

in print `saving config` with config value in development mode.

returns a promise.

## readConfig

wraps `chrome.storage.sync.get`.

in development mode will return value set by `setDefaultConfig`

returns a promise.