import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  

    extend: {
      
      textColor: {
        default: "#000000",
        blue: "#0155A5",
      },
      backgroundColor: {
        "landing-page": "#FFFFFF",
        background: "#FFFFFF",
        blue: "#0155A5",
        graybg:"#F3F4F6",
        lightblue:"#D3E9F8"
      },
    
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
