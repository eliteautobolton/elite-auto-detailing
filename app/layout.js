
export const metadata = {
  title: "Elite Auto Detailing Bolton",
  description: "Car detailing, ceramic coating and paint protection in Bolton & Manchester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}