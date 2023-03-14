import NavBar from "./Navbar";

function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
}

export default RootLayout;
