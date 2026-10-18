import type {Metadata, Viewport } from "next";
import Header from '@/components/Header';
import {Footer} from '@/components/Shared';
import './globals.css';
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata:Metadata={
  metadataBase: new URL("https://veteransserviceassistancecenterinc.preview.kantage.solutions"),title:{default:'VSA | Veteran Service & Assistance, Inc.',template:'%s | VSA'},description:'Veterans helping veterans with dignity, respect, and compassion. Connect with housing assistance, advocacy, wellness, and community resources in Augusta and the CSRA.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
