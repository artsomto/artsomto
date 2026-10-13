import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "WEWIN API Starter", description: "WEWIN backend foundation" };
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}