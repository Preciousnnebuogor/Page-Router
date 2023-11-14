import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/ice cream 3.jpg" width={128} height={77}/>
      </div>
      
      <div className="list">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/world/presh">World</Link>
      </div>
    </nav>
  );
}
