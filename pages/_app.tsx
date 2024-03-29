/* import "../styles/global.css"; */
import { ThemeProvider, Global, css } from "@emotion/react";
import { AppProps } from "next/app";
import { theme } from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap");
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Fira Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
            color: #282828;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: border-box;
          }
          h1 {
            font-size: 1.75rem;
          }
          ul {
            padding: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
