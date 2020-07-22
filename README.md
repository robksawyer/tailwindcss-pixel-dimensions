# Font Sizes for Tailwind CSS
This plugin allows you to quickly generate widths and heights in pixels.

## Requirements

This plugin requires Tailwind CSS 1.2 or later.

## Installation

```bash
yarn add tailwindcss-pixel-dimensions
```

## Usage

The following plugin options are available. See below how these are passed (via an object) to the plugin in your `tailwind.config.js`.

## Options Available
Pass along a number value to generate that many font sizes.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // Generates 10 widths and heights in pxs
    require('tailwindcss-pixel-dimensions')({
        width: {
          total: 10, // 900 is the default
          // startingSize: 0, // default
        },
        height: {
          total: 10, // 900 is the default
          // startingSize: 0, // default
        },
    }),
  ],
};
```

The above configuration would generate the following CSS:

```css
.w-0px {
  width: 0;
}

.w-1px {
  width: 1px;
}

.w-2px {
  width: 2px;
}

.w-3px {
  width: 3px;
}

.w-4px {
  width: 4px;
}

.w-5px {
  width: 5px;
}

.w-6px {
  width: 6px;
}

.w-7px {
  width: 7px;
}

.w-8px {
  width: 8px;
}

.w-9px {
  width: 9px;
}

.w-10px {
  width: 10px;
}

.h-0px {
  height: 0;
}

.h-1px {
  height: 1px;
}

.h-2px {
  height: 2px;
}

.h-3px {
  height: 3px;
}

.h-4px {
  height: 4px;
}

.h-5px {
  height: 5px;
}

.h-6px {
  height: 6px;
}

.h-7px {
  height: 7px;
}

.h-8px {
  height: 8px;
}

.h-9px {
  height: 9px;
}

.h-10px {
  height: 10px;
}
/* etc. */
```

Which you can then use in your HTML like this:

```html
<div class="h-10px">
  I'm a div with a height of 10 pixels or pickles depending on how you pronounce it.
</div>
```

The above depends on the order of the generated CSS.
