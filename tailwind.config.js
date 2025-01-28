module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'blue-500': '#5276FA',
        'blue-600': '#2448CC',
        'gray-700': '#505050',
        'gray-500': '#9D9D9D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
