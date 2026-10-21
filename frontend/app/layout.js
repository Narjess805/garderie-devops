export const metadata = {
  title: "Ma Garderie",
  description: "Un cocon pour grandir heureux"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
