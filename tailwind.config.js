/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F4F6',
        secondary: '#F3F4F6',
        // negro: '#15161b',
        // primary: '#1C1C24',
        // secondary: '#232429',
        gris: '#383A46',
        rosa: '#BA2057',
        rosaclaro: '#E26091',
        // uno: '#BA2057',
        uno: {
          "50": "#FBE5EC",
          "100": "#F7CFDD",
          "200": "#EE9BB8",
          "300": "#E66B96",
          "400": "#DD3771",
          "500": "#BA2057",
          "600": "#941944",
          "700": "#711334",
          "800": "#4A0D22",
          "900": "#270712"
        },
        dos: '#C72861',
        tres: '#F5E1E8',
        fondo: '#F5F5F5',
        success: '#46BFA3',
        fuente: '#27425D'
      },
      height: {
        'screen-nav': 'calc(100vh - 64px)',
        'screen-nav2': 'calc(100vh - calc(96px + 64px))',
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "-1": "-1",
      },
    },
  },
  plugins: [],
}

