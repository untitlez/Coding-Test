import Link from "next/link";

export default function Home() {
  return (
   <>
   <div className="hero mt-8">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    <Link href="users">
    <button className="btn btn-accent">Get Start</button>
    </Link>
    </div>
  </div>
</div>
   </>
  );
}
