"use client";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { WalletProvider } from "@suiet/wallet-kit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <WalletProvider>
          <div>{loading ? <Loader /> : children}</div>
        </WalletProvider>
      </body>
    </html>
  );
}
