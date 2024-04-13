import type { Config } from "tailwindcss";

/*
ЦВЕТ ФОНА/ТЕКСТА СТРАНИЦЫ:

- Главный цвет фона сайта: #E8E8E8
- Цвет поля: #2E2D2D

Цвет шрифта:

1. Бежевый - #E8E8E8
2. Бежевый - #D6D3CA ( Project ) 
3. Темный - #2E2D2D
4. Зелёный - #56503F ( Options. )
*/

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    extend: {
      colors: {
        mainBg: "#E8E8E8",
        fieldColor: "#2E2D2D",
        fontBeigeOne: "#E8E8E8",
        fontBeigeSec: "#D6D3CA",
        fontDark: "#2E2D2D",
        fontGreen: "#56503F",
        c_black: "#202020",
      },
      backgroundImage: {
        "main-hero-bg": "url('/images/main/home_hero.jpg')",
        "visual-hero-bg": "url('/images/visual/visual_hero.jpg')",
      },
      fontFamily: {
        serif: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
export default config;
