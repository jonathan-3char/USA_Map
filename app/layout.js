import "@/styles/globals.css"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: 'Learn US States',
  description: 'Learn the US states by the travel path to two states.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="font-sans text-lg">
        <main className="justify-center items-center">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
