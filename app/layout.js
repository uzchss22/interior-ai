import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Provider from "./provider";

export const metadata = {
  title: "Interior AI",
  manifest: '/manifest.json',
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider>
            {children}
          </Provider>
          <footer style={{textAlign: 'center', padding: '12px', fontSize: '13px', color: '#888', borderTop: '1px solid #e5e7eb'}}>
            2025810092 Hyeok CHOI
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
