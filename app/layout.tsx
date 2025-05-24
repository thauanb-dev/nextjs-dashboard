import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       {/* Adiciona font por toda a aplicação */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
