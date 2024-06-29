import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google"
const myFont = localFont({ src: './CeraPro-Regular.woff' });

export const metadata = {
  title: "DRIVERAVE - поиск билетов",
  description: " Driverave- сайт выгодного поиска билетов",
};
export const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap'})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
