import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';  // Correct package

export default {
  plugins: [
    tailwindcss(), // Using the separated package
    autoprefixer(), // Using autoprefixer
  ],
};
