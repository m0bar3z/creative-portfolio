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
          <li>
            <Link href="about" aria-label="About Page">
              About
            </Link>
          </li>
          <li>
            <Link href="blog" aria-label="Blog Page">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
