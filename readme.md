# Kassa Tailwind CSS

We use Tailwind CSS to style our applications and websites. Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces that are highly customizable.

This repository contains Tailwind CSS configuration, `tailwind.config.js`, which we will probably use in most of our applications, and PostCSS configuration, `postcss.config.js` which is required by Tailwind CSS. The reason we create this repository is to prevent duplicating these Tailwind-related files in case we change it in the future.

## Installation

### Package Installation

To have this package set up properly, you need to have installed Tailwind CSS. Please refer to [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-postcss). After that, you can install this package by running the command below:

```bash
npm i @kassahq/tailwindcss
```

### Tailwind CSS Configuration

After installing the package, add a `tailwind.config.js` file at the root of your project. Write the line below inside of the config file.

```js
module.exports = require("@kassahq/tailwindcss/tailwind.config");
```

### PostCSS Configuration

After that, we also need to set up the `postcss.config.js` file with the configuration that is required by Tailwind CSS.

```js
module.exports = require("@kassahq/tailwindcss/postcss.config");
```

### CSS Configuration

Additionally, we have setup the `@layer base` directive separately in `styles/base.css`. We can use this to maintain branding consistency throughout our applications and websites. To use it, follow the guide below.

In `index.js` file or equivalent, import the `base.css` file on the very top to make sure there is no style overriding issue.

```js
// Import this first.
import "@kassahq/tailwindcss/styles/base.css";

// Import other styling below this.
import "./index.css";
```

In `index.css` file or equivalent, the primary stylesheet for the application, add these Tailwind CSS directives:

```css
@tailwind components;
@tailwind utilities;
```

We don't include `@tailwind base` since Tailwind CSS `base` directive is already added by `base.css` file from this package.

We are all set!

## Package Publishing

To publish this module as a Node package in NPM, we can use `np` package. NP is a package that helps us deal with publishing a node package. For more information about the package, please refer to [NP](https://www.npmjs.com/package/np).

After installing and setting up the package in our device according to the documentation, we can simply run the command below in the terminal from the root of our project:

```sh
# Run NP interactive UI and publish package to NPM without 2FA.
np --no-2fa
```

This command will run `np` interactive package publisher without 2-factor authentication (might lead to error if NPM account's 2FA is not set up).

We then can follow the interactive UI and answer some questions according to what have been changed in the latest version. The package should be published in NPM and a tag with the latest version of the package should be created on GitHub.
