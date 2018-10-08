# to see the error

1. cd into this directory
3. `cd RNapp && npm install --no-optional && cd ..` (otherwise you will get an error that `@scope/ui` could not be found. if you want to use yarn, make sure to remove `@scope/ui` module from the `package.json` before running `yarn`, you can add it back after the command has finished)
2. `mkdir RNapp/node_modules/@scope && cd RNapp/node_modules/@scope && ln -s ../../../
scoped-module ui && cd ../../`
4. `yarn start`
5. run XCode and try the app

# to fix the error

1. shut down the running instance of metro
2. cd into this directory
3. `mv RNapp/node_modules/@scope/ui RNapp/node_modules/@scope/linked-ui`
4. `cp -r scoped-module RNapp/node_modules/@scope/u
i`
5. `cd RNapp && yarn start --reset-cache`
6. run XCode and try the app