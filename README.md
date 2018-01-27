# Sharelist

> A todo list application with share function accross telephone number.
> This is only a wrapper.
> Only test in android.

## Related Project

* [sharelist-client](https://gitee.com/antipro/sharelist-client)
  > client program
* [sharelist-server](https://gitee.com/antipro/sharelist-server)
  > server-side program
* [sharelist-electron](https://gitee.com/antipro/sharelist-electron)
  > desktop wrapper

## Preparation

build or start client program according to guide of [sharelist-client](https://gitee.com/antipro/sharelist-client)

## Build Setup

``` bash
# install cordova (and prepare your android environment)
npm install -g cordova

# make a 'www' soft link to dist folder of sharelist-client
ln -s <path to sharelist-client/dist> www

# install dependencies
npm install

# install android platform
cordova platform add android

# run android
cordova run android
```
Maybe someone can help me to add ios platform :)

## Preview
### Mobile(Android)

![Android](http://onmdsye1w.bkt.clouddn.com/sharelist-cordova3.png)
![Android](http://onmdsye1w.bkt.clouddn.com/sharelist-cordova4.png)