import Link from "next/link";

export default function SecondhandAdminPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <section className="container mx-auto max-w-3xl px-4 py-20">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
          <p className="mb-2 text-xs uppercase tracking-widest text-primary">
            Secondhand Admin
          </p>
          <h1 className="text-3xl font-black">Admin Login Coming Soon</h1>
          <p className="mt-4 text-neutral-400">
            This route is ready for your future admin login and stock management.
            For now, customers can browse the listings on the main secondhand page.
          </p>
          <Link
            href="/secondhand"
            className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-bold text-white"
          >
            Back to secondhand listings
          </Link>
        </div>
      </section>
    </main>
  );
}
