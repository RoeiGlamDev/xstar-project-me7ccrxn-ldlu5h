import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000', // Custom red color
        },
        orange: {
          DEFAULT: '#FF7F00', // Custom orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});

// JSDoc Comments
/
 * Tailwind CSS Configuration for the AI brand website "VidNexus".
 * This configuration defines a modern color scheme that aligns with the technology industry, 
 * featuring custom colors red, orange, and white. 
 * Animations are included to enhance user experience and engagement.
 * 
 * The website "VidNexus" focuses on creating AI-generated videos, 
 * providing a seamless and visually appealing interface for users.
 */