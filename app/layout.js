import "@/styles/globals.css";
import Home from "./page";

export const metadata = {
  title: "Learn US States",
  description: "Learn the US states by the travel path to two states.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  );
}
