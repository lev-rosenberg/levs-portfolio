"use client";

import { ContextProvider } from "./context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="full-screen-mobile">
          <ContextProvider>{children}</ContextProvider>
        </div>
      </body>
    </html>
  );
}
