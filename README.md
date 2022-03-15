# Cara Install & Konfigurasi Tailwind di React Js

## Membuat Project React

```sh
npx create-react-app my-project
cd my-project
```

## Setting up Tailwind CSS

Install Tailwind via npm

```sh
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Note :
PostCSS versi 8 tidak mendukung untuk create-react-app, jadi menggunakan versi 7 dari PostCSS

## Install & Konfigurasi CRACO

```sh
npm i @craco/craco
```

Lalu ganti script di package.json seperti ini :

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
}
```

Membuat file bernama craco.config.js dan beri script seperti ini :

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

Jalankan perintah ini untuk membuat file tailwind.config.js secara otomatis dan beri/ganti dengan script ini

```js
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Tambahkan script ini di index.css

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Lalu import file css nya di index.js

```js
import "./index.css";
```

atau bisa juga dengan cara mengimportnya langsung

```js
import "tailwindcss/tailwind.css";
```

SELESAI DAN JALANKAN NPM RUN START :)
