import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-5  p-5">
      <Image
        alt="logo-katana"
        src="/katana.png"
        width={70}
        height={50}
        quality={100}
        placeholder="blur"
        blurDataURL="/katana-blur.png"
      />

      <h1>Katana-Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/create">Tickets</Link>
    </nav>
  );
}
