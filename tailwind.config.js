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
        jaune: '#F4C431',
        'main-green': '#00693E'
      },
      backgroundColor : {
        principale: '#00693E',
        aliceblue: '#F0F8FF',
        jaune: '#F4C431',
        'main-green': '#00693E',
        'secondary-green': '#7ED218'
      },
      height : {
        bg1: '500px',
        illustration1:'30px'
      },
      width : {
        illustration1:'1100px',
        iconelangage: '600px',
        texteSectionAcceuil: '600px',
        texteSectionParcour: '500px',
        titrePhoneDevice: '300px',
        illustration2: '600px'
      },
      top : {
        accroche:'100px',
        sectionPublicationRecents: '600px',
      },
      fontFamily: {
        'impact': ['impact'],
        'dortmund': ['Dortmund-ExtraBold'],
        'pavelt': ['Pavelt']
      },
      fontSize: {
        titrePhoneDevice: '900px'
      },
      screens: {
        'xs': { max: '639px' },
        'tablet': { min: '640px', max: '1023px' },
        'desktop': { min: '1024px' },
      },
    },
  },
  plugins: [],
}

