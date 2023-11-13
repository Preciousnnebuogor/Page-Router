import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div>
        <h1 className="logo">Presh List</h1>
      </div>
      <div>felix</div>
      <div className="list">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/world/presh">World</Link>
      </div>
    </nav>
  );
}
