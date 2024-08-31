import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Yuji_Boku } from "next/font/google";

export const metadata: Metadata = {
    title: "Chikara IT | <力/>",
};

const sawarabi_Mincho = Yuji_Boku({
    weight: "400",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="bg-background">
            <head>
                <link data-rh="true" rel="icon" href="/logo.png" />
            </head>
            <body className={sawarabi_Mincho.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
