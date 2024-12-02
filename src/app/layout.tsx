
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <ThemeProvider>
        {children}
      </ThemeProvider>     
    </html>
  )
}