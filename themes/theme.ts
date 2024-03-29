const red: string = "#cc241d";
const green: string = "#98971a";
const yellow: string = "#d79921";
const blue: string = "#458588";
const magenta: string = "#b16286";
const black: string = "hsl(0, 0%, 16%)";
const blackLight: string = "hsl(0, 0%, 30%)";
const white: string = "#FFFFFF";

export const theme = {
  fonts: {
    title: "Alfa Slab One, serif",
    main: `Open Sans, sans-serif`,
  },
  spacings: {
    xxxsm: "0.125rem",
    xxsm: ".25rem",
    xsm: ".5rem",
    sm: "1rem",
    md: "2rem",
    l: "3rem",
    xl: "4rem",
    xxl: "6rem",
    xxxl: "8rem",
  },
  colors: {
    yellow: yellow,
    green: green,
    red: red,
    magenta: magenta,
    black: black,
    blackLight: blackLight,
    white: white,
    blue: blue,
    blueLight: "#569699",
    whiteDark: "#BBB",
  },
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  breakpoints: {
    mobile: "only screen and (max-width: 768px)",
    tablet: "only screen and (max-width: 1000px)",
  },
  speed: {
    slower: "800ms",
    slow: "500ms",
    medium: "300ms",
    fast: "200ms",
  },
  transition: {
    fade: `   &.fade-enter {
                opacity: 0;
              }
              &.fade-enter-active {
                opacity: 0.7;
              }
              &.fade-exit {
                opacity: 0.7;
              }
              &.fade-exit-active {
                opacity: 0;
              }
              &.fade-enter-active, &.fade-exit-active {
                transition: opacity ease 300ms;
              }
          `,
    slide: `  &.slide-enter {
                opacity: 0;
                transform: translateX(-300px);
              }
              &.slide-enter-active {
                opacity: 1;
                transform: translateX(0);
              }
              &.slide-exit {
                opacity: 1;
                transform: translateX(0);
              }
              &.slide-exit-active {
                opacity: 0;
                transform: translateX(-300px);
              }

              &.slide-enter-active, &.slide-exit-active {
                transition: opacity ease 300ms, transform ease 300ms;
              }
          `,
  },
};
