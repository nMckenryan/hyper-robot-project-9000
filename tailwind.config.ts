import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// :root {
//   --color-white: #ffffff;
//   --color-grey-100: #f7f7f7;
//   --color-grey-200: #efefef;
//   --color-grey-300: #dbdbdb;
//   --color-grey-400: #9b9b9b;
//   --color-grey-500: #666666;
//   --color-grey-600: #333333;
//   --color-pop-orange: #e15a1d;
//   --color-text-primary: var(--color-grey-600);
//   --color-text-secondary: var(--color-grey-500);
//   --color-text-tertiary: var(--color-grey-400);
//   --color-text-inverted: var(--color-white);
//   --color-text-brand: var(--color-pop-orange);
//   --color-surface-primary: var(--color-grey-100);
//   --color-surface-secondary: var(--color-grey-300);
//   --color-surface-tertiary: var(--color-grey-400);
//   --color-surface-brand: var(--color-pop-orange);
//   --link-color-text: var(--color-text-brand);
//   --modal-color-surface: #efeae5;
//   --modal-header-color: var(--color-text-brand);

export default {
  content: ["./src/**/*.tsx"],
  theme: {


    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        popOrange: "#e15a1d",
        warmWhite: "#EFEAE5",

        whiteSteel: "#efefef",
        steel: "#dbdbdb",
        dryGranite: "#9b9b9b",
        granite: "#666666",
        wetGranite: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
