import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/helpers/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { wrapper } from "@/store/store";
import { createTheme, GlobalStyles } from "@mui/material";

// English Font Family
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Arabic Font Family
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";

import lightThemeOptions from "@/theme/lightThemeOptions";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { Mode } from "@/models/app";
import darkThemeOptions from "@/theme/darkThemeOptions";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Cookies, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import { setAccessToken, setRefreshToken, setUser } from "@/store/appSlice";

export const metadata: Metadata = {
  title: {
    default: "Noot",
    template: "%s | Noot",
  },
  description:
    "Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services",
  openGraph: {
    title: "Noot",
    description:
      "Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services",
    url: "https://noot.ae",
    siteName: "Noot",
    images: [
      {
        url: "https://noot.ae/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Noot",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};
// import { setSession } from '@/store/appSlice';

function getActiveTheme(themeMode: Mode, locale: any) {
  return themeMode === "dark"
    ? createTheme(lightThemeOptions(locale))
    : createTheme(darkThemeOptions(locale!));
}

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { locale } = useRouter();
  const [activeTheme, setActiveTheme] = useState(
    getActiveTheme("dark", locale!)
  );
  const [selectedTheme, setSelectedTheme] = useState<Mode>("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme, locale!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTheme]);

  const { store, props } = wrapper.useWrappedStore(rest);

  const clientSideEmotionCache = createEmotionCache(locale!);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={activeTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={{
              ".MuiAccordionSummary-root .MuiAccordionSummary-content": {
                margin: "12px 8px !important",
              },
              ".MuiAccordionSummary-root .MuiAccordionSummary-content.Mui-expanded":
                {
                  margin: "12px 8px !important",
                },
              ".MuiAccordionSummary-root.Mui-expanded": {
                minHeight: "0 !important",
              },
              ".MuiAccordionSummary-root.Mui-expanded .MuiTypography-root": {
                marginLeft: "0 !important",
              },
            }}
          />
          <Component {...pageProps} toggleTheme={toggleTheme} />
        </ThemeProvider>
        <ScrollToTop />
      </CacheProvider>
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);

    if (!appContext.router.route.includes(Routes.AUTH)) {
      console.log("Not in accounts");
      const cookieAccessToken: CookieValueTypes = getCookie(
        Cookies.ACCESS_TOKEN,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res,
        }
      );
      const cookieRefreshToken: CookieValueTypes = getCookie(
        Cookies.ACCESS_TOKEN,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res,
        }
      );
      const cookieSessionUser: CookieValueTypes = getCookie(
        Cookies.SESSION_USER,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res,
        }
      );

      if (
        cookieAccessToken === undefined &&
        cookieRefreshToken === undefined &&
        cookieSessionUser === undefined
      ) {
      } else {
        const sessionUser: any = JSON.parse(cookieSessionUser as string);
        store.dispatch(setAccessToken(cookieAccessToken as string));
        store.dispatch(setRefreshToken(cookieRefreshToken as string));
        store.dispatch(setUser(sessionUser));
      }
    }

    return { ...ctx };
  }
);

export default MyApp;
