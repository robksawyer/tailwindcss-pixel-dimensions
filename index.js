/**
 * TailwindCSS Font Sizes
 * Generates font sizes in ems
 * @file index.js
 */
const plugin = require('tailwindcss/plugin')

/**
 * getSizes
 * Handles getting sizes in pixels
 * @param {int} totalSizes
 * @param {int} startingValue
 * @return {object}
 */
const getSizes = (totalSizes = 900, startingValue = 0) => {
  // The following generates an array of increasing values from the totalSizes above.
  const sizeArray = Array.from(Array(startingValue + totalSizes + 1).keys())
  const sliced = sizeArray.slice(startingValue, sizeArray.length)
  // Traverse the array and generate sizes in pxs.
  const sizes = sliced.map((i, x) =>
    x > 0 ? { [`${x}px`]: `${x}px;` } : { [`${x}px`]: `${x};` }
  )
  // Merge the array of objects into a single one
  const sizeObj = Object.assign.apply(Object, sizes)
  return sizeObj
}

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, e, variants, theme }) {
      // ...
    }
  },
  function (options) {
    // Widths
    // Option defaults
    // {
    //    total: 900,
    //    startingSize: 0,
    // }
    const widths = getSizes(
      (options && options.width && options.width.total) || 900,
      (options && options.width && options.width.startingSize) || 0
    )
    const heights = getSizes(
      (options && options.height && options.height.total) || 900,
      (options && options.height && options.height.startingSize) || 0
    )
    const margins = getSizes(
      (options && options.margin && options.margin.total) || 900,
      (options && options.margin && options.margin.startingSize) || 0
    )
    const paddings = getSizes(
      (options && options.padding && options.padding.total) || 900,
      (options && options.padding && options.padding.startingSize) || 0
    )

    return {
      theme: {
        // fontSizes: {
        extend: {
          width: {
            ...widths,
          },
          height: {
            ...heights,
          },
          margin: {
            ...margins,
          },
          padding: {
            ...paddings,
          }
        },
      },
      // variants: {
      //   fontSizes: [],
      // },
    }
  }
)
