# Lab.Intro-Parcel

## Goals for this tutorial:

* Understand what a bundler is for
* Understand how to install and set up Parcel
* Resolve a few common gotchas
  * async await
  * browserslist
* Understand "entry-point"

## Stretch Goals (or maybe just a future module)

* Set up Parcel middleware in Express
* Understand "dist" and ".cache"
* Understand "hot module reloading"
* Use Parcel to build for production
  * Deploy? Heroku?? Netlify???

## Steps

### Step 1: Setting Up

* Clone the starting point repo (has browserslist defined, but not much else)?

* Install Parcel
```
npm install parcel-bundler
```

* Create src directory. Add some files.
```sh
mkdir src
touch src/index.html src/style.css src/main.js src/helpers.js
```

* Paste some code into each file
TODO: Create all that stuff for pasting 🙃

* Run the code by opening the index.html in browser

### Step 2: Add Parcel

* Notice the import / export statements. They don't work. In fact, they generate errors.
* Install Parcel
  * `npm install parcel-bundler`
* NPM install faker
* Run Parcel
  * Add `"start": "parcel src/index.html"` to package.json scripts
  * `npm start`
  * It will notice that there's an import that hasn't been installed yet (faker)
    and installs that. Whoa, that's weird.
  * It'll also create two new folders: dist and .cache
  * Take a look at dist/index.html.
    * Notice how it's transformed the original into something slightly different.
  * Take a look at the browser: [http://localhost:1234](http://localhost:1234)
  * Make a change to the HTML or CSS.
    * See how it reloads immediately? Very much wow!
  * Now's a good time to add .cache and dist to .gitignore.
    * We don't need to track these things in Git. Why? Because anyone who runs
    our app will simply build them themselves using Parcel. These things are
    called "build artifacts".

### Step 3: Profit
* Unfortunately, we cannot write async functions. Not all browsers support async
  await. So, for some older browsers, Parcel will try to compile our async await
  code into soemthing those older browsers can parse and execute.
  * The tool Parcel uses is called [Babel](https://babeljs.io/).
  * Parcel markets itself as a "zero-configuration" bundler. Realistically,
    we'll want to configure it _a little bit_ now and then.
  * Let's add browserslist to package.json:
```json
  "browserslist": [
    "> 3%"
  ],
```
  * This browserslist property informs Parcel which browsers are worth targeting
  * "> 3%" means "support browsers that are used by more than 3% of users
    globally"
  * This _does_ mean we're leaving a few users behind: they're browsers will not
    be able to parse the JavaScript that we send them. There are further
    optimizations we can choose to make if we want to support those browsers.
    Deciding how long the list of supported browsers should be is a non-trivial
    decision, and it is a question that front-end developers wrestle with often.
