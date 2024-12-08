import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-out' },
          '50%': { transform: 'translateY(-20px)', animationTimingFunction: 'ease-in' },
        },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      }, flip: {
        '0%': { transform: 'rotateY(0)' },
        '100%': { transform: 'rotateY(180deg)' },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
        slideIn: 'slideIn 2.5s ease-out  ',
        scaleUp: 'scaleUp 3.5s ease-out infinite',
        rotateIn: 'rotateIn 0.8s ease-in-out',
        bounceIn: 'bounceIn 1s infinite',
      },
      
    },
    animation: {
      'fade-in': 'fadeIn 2s ease-in-out',
    },
  },
  plugins: [],
} satisfies Config;
