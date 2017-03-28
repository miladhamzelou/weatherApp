<h1> Weather App </h1>
<br />
<div align="center"><strong>About</strong></div>
<div align="center">Simple mobile weather mobile app. This version works with touch screen only. Iphone 6s checked</div>

<br />


## Demo version
Visual testing only on iPhone6s
Please ensure you check it on mobile || RWD.Chrome.Iphone6 with touch events on
<a href="http://us3r.io:3000">link</a>

## Features

<dl>
  <dt>Swipes 5 days weather forecast, takes data from OpenWeather API</dt>
  <dd>Shows temperature - current temp for the current day, and only 1pm forecast for rest 4 days</dd>
  <dd>Shows day of the weak</dd>
  <dd>Shows city of the forecast</dd>
Using react-boilerplate
  https://github.com/react-boilerplate/react-boilerplate
Using react-swipe
  https://github.com/voronianski/react-swipe
</dl>

## Quick start

## Processes

#### SETUP

Before start 'npm start' please do npm i

### Development

```Shell
npm start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

### Production

```Shell
npm run start:production
```

 * Runs tests (see `npm test`)
 * Builds your app (see `npm run build`)
 * Starts the production server (see `npm run start:prod`)

The app is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

## Testing

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing

```Shell
npm test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the Button component tests
npm test -- Button
```

### Watching

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Remote testing

```Shell
npm run start:tunnel
```
Starts the development server and tunnels it with `ngrok`, making the website
available on the entire world. Useful for testing on different devices in different locations!

### Dependency size test

```Shell
npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
npm run lint
```
