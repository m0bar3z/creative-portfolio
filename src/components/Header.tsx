import Link from "next/link";

export default async function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Home Page">
              Ali Mobarezi
            </Link>
          </li>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </nav>
    </header>
  );
}
