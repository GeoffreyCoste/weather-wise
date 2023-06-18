// TODO: try createPortal with '#modal-root' element
// TODO: Disable cursor on mobile

import './globals.css';
import Header from './components/Header';
import Cursor from './components/Cursor';
import { ThemeProvider, TemperatureProvider, LanguageProvider } from './utils/context';
/* import { Roboto } from 'next/font/google'; */
import { Quicksand } from 'next/font/google';

/* const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"]}); */
const quicksand = Quicksand({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: 'Weather Wise',
  description: 'Weather forecast app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Cursor />
        <ThemeProvider>
          <LanguageProvider>
            <TemperatureProvider>
              <Header />
              {children}
            </TemperatureProvider>
          </LanguageProvider>
        </ThemeProvider>
        {/* <div id="modal-root"></div> */}
      </body>
    </html>
  )
}
