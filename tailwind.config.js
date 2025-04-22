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
        'brown-100': '#E7E0DA',
        'gray-500': 'rgba(0,0,0,0.4)',
        'gray-800': 'rgba(0,0,0,0.9)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
