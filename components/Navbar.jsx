import Link from 'next/link'
export default function Navbar () {
    return (
        <nav>
         <div className="logo"></div>
         <div className="list">
         <h1>Presh List</h1>   
            </div>
        <Link href="/">Home</Link> 
        <Link href="/about">About</Link>
        <Link href="/world/presh">World</Link>
        
        </nav>
    )
}