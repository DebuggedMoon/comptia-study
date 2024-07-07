import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      {/* Landing Page */}
      <section className="flex w-full">
        <article className="flex flex-col w-[60%] py-[10%]">
          <h1 className="h-[20%] text-5xl font-bold text-nowrap">
            CompTIA Study Helper
          </h1>
          <p className="w-[75%] pl-2 text-zinc-700 text-balance">
            Your little study app!
            Quam, autem aspernatur. Ad quisquam exercitationem adipisci placeat recusandae ex laborum corporis optio? Incidunt quisquam est voluptatibus beatae, sit reprehenderit aliquid excepturi?
          </p>
          <Link 
            href="./practice" 
            className="w-[35%] p-4 mb-4 mt-auto bg-blue-800 border rounded text-zinc-50 font-bold text-center"
          >
            Start Studying <span className="font-normal text-zinc-200">-- It&apos;s free</span>
          </Link>
        </article>
      </section>
    </main>
  );
}