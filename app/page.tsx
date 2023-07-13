import Link from "next/link";

type CardProps = { title: string; url: string };

export default function Home() {
  return (
    <main className="container mx-auto mt-10 flex flex-col">
      <section className="mt-4 flex flex-col gap-4 py-4 lg:grid lg:grid-cols-2">
        <Cards title="Calculator" url="/calculator" />
        <Cards title="Naughts and Crosses" url="/naughtsandcrosses" />
      </section>
    </main>
  );
}

// internal components
function Cards({ title, url }: CardProps) {
  return (
    <Link href={url}>
      <div className="flex flex-col overflow-hidden rounded-lg bg-violet-100 p-4 shadow-lg transition hover:-translate-y-4 md:h-20 md:flex-row">
        <h1 className="text-lg">{title}</h1>
      </div>
    </Link>
  );
}
