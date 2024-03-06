import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-4 bg-orange-300">
    <Link href="/home"> HOME </Link>
    <Link href="/about"> ABOUT </Link>
    <Link href="/service"> Service </Link>
    <Link href="/teams">Teams</Link>
    <Link href="/testimonials"> Testimonials </Link>
    </div>
  );
}
