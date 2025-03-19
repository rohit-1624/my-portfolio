import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    theme: {
      extend: {
        animation: {
          moveUp: "moveUp 1s ease-in-out",
          moveDown: "moveDown 1s ease-in-out",
          moveLeft: "moveLeft 1s ease-in-out",
          moveRight: "moveRight 1s ease-in-out",
        },
        keyframes: {
          moveUp: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
          moveDown: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(20px)" },
          },
          moveLeft: {
            "0%, 100%": { transform: "translateX(0)" },
            "50%": { transform: "translateX(-20px)" },
          },
          moveRight: {
            "0%, 100%": { transform: "translateX(0)" },
            "50%": { transform: "translateX(20px)" },
          },
        },
      },
    },
    

  plugins: [
    tailwindcss()
  ],
})