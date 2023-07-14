export default function Page() {
  return (
    <section className="container mx-auto mt-10 flex flex-col gap-4">
      <h1 className="text-xl">Calculator</h1>
      <section className="mx-auto flex w-3/5 flex-col gap-4 rounded-md bg-zinc-400 px-4 py-6">
        <div className="rounded-md bg-slate-200 p-4 text-right">Input</div>
        <div className="">Numbers</div>
      </section>
    </section>
  );
}
