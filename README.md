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

## Preview
### Mobile(Android)

![Android](http://onmdsye1w.bkt.clouddn.com/sharelist-cordova1.png)
![Android](http://onmdsye1w.bkt.clouddn.com/sharelist-cordova2.png)