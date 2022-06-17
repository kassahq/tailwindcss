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

After we complete the configuration process, we need to add the line below in the primary CSS file that we use in our project, `index.css` or equivalent.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

We are all set!
