/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        principale: '#00693E',
        aliceblue: '#F0F8FF',
        jaune: '#F4C431'
      },
      backgroundColor : {
        principale: '#00693E',
        aliceblue: '#F0F8FF',
        jaune: '#F4C431'
      },
      height : {
        bg1: '500px',
        illustration1:'30px'
      },
      width : {
        illustration1:'1100px',
        iconelangage: '600px',
        texteSectionAcceuil: '600px',
        illustration2: '600px'
      },
      top : {
        accroche:'100px'
      },
      screens: {
        'phone':{'max': '640px'},
      },
      fontFamily: {
        'impact': ['impact'],
        'dortmund': ['Dortmund-ExtraBold'],
        'pavelt': ['Pavelt']
      },
    },
  },
  plugins: [],
}

