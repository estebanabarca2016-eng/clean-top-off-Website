import "./globals.css";
import { Header, Footer } from "../components";
import Script from "next/script";

export const metadata = {
  title: "Clean Top Off | Smarter Jet Fuel",
  description: "Better fuel prices. Lower FBO fees. Higher value flights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        {/* Tawk.to Live Chat */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
        >
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();

            (function () {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];

              s1.async = true;
              s1.src = "https://embed.tawk.to/6aaaf741458a753444b9ddc9/1k2ltbmlb";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");

              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}