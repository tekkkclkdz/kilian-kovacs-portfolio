import Link from "next/link";
import Menu from '../components/menu_no_scroll'

export default function Home() {

  return (
    <>
        <img className="object-cover h-screen w-full" src="/contact.jpg" alt="Contact" />
        <div className="absolute top-64 grid left-0 w-full text-center font-victor-mono">
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            <Link href="https://www.instagram.com/istwanalog/" className="text-5xl font-bold hover:underline hover:underline-offset-2 text-white">@ISTWANANALOG</Link>
            
        </div>
        {/* <div className="absolute top-3/4 left-0 w-full text-center">
            <h1 className="text-6xl font-bold hover:underline hover:underline-offset-2 text-white">KILIAN.KOVACS@GMAIL.COM</h1>
        </div> */}
        <Menu />

    </>
  );
}