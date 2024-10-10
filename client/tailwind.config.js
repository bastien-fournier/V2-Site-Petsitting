export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#C2EFD4", // Définir une couleur primaire personnalisée
        secondary: "#FDC435",
      },
      fontFamily: {
        nunito: ['"Nunito-Regular.ttf"', "sans-serif"], // Définir une police de caractères personnalisée
        playfair: ['"PlayfairDisplay-Regular.ttf"', "sans-serif"],
        roboto: ['"Roboto-Regular.ttf"', "sans-serif"],
        // Vous pouvez ajouter d'autres polices personnalisées ici si nécessaire
      },
    },
  },
  plugins: [],
};
