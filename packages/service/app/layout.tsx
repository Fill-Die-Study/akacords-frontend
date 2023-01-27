import '@styles/global.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className="box-border">{children}</body>
    </html>
  );
}
