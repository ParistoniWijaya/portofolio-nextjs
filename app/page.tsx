import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex gap-4 justify-center p-6 lg:px-8">
    <Link href="/home"> Home </Link>
    <Link href="/about"> About </Link>
    <Link href="/service"> Service </Link>
    <Link href="/teams"> Teams </Link>
    <Link href="/testimonials"> Testimonials </Link>
    </div>
    
  );
}
