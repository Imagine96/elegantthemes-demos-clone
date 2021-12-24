module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange': {
        'normal': '#dca47d',
        'hover': '#DD8C53'
      },
      'dark-text': '#20292f',
      'dark-bg': '#272830',
      'headings': '#333333',
      'text-on-white': '#666666'
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['helvetica'],
    },
    
    extend: {},
  },
  plugins: [],
}
