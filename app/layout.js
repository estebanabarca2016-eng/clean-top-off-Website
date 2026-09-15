import "./globals.css";
import { Header, Footer } from "../components";
export const metadata={title:"Clean Top Off | Smarter Jet Fuel",description:"Better fuel prices. Lower FBO fees. Higher value flights."};
export default function RootLayout({children}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
