import NavBar from "./Navbar";

export default async function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar />
    </header>
  );
}
