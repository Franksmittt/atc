"use client";

import { useMemo, useState } from "react";

type Condition = "Excellent" | "Good" | "Fair" | "Poor";

type WheelItem = {
  stockCode: string;
  brand: string;
  size: number;
  widthOffset: string;
  holes: number;
  pcd: string;
  qty: number;
  condition: Condition;
  notes: string;
  imageFront: string;
  imageBack: string;
};

const CONDITION_BADGE_STYLES: Record<Condition, string> = {
  Excellent:
    "bg-emerald-500/15 text-emerald-500 border border-emerald-500/35",
  Good: "bg-sky-500/15 text-sky-500 border border-sky-500/35",
  Fair: "bg-amber-500/15 text-amber-500 border border-amber-500/35",
  Poor: "bg-rose-500/15 text-rose-500 border border-rose-500/35",
};

const MOCK_INVENTORY: WheelItem[] = [
  {
    stockCode: "001",
    brand: "Unknown",
    size: 16,
    widthOffset: "6J",
    holes: 5,
    pcd: "5x116",
    qty: 2,
    condition: "Good",
    notes: "",
    imageFront: "/images/secondhand/SH001A.jpeg",
    imageBack: "/images/secondhand/SH001B.jpeg",
  },
  {
    stockCode: "002",
    brand: "Mopar",
    size: 19,
    widthOffset: "7.5J",
    holes: 5,
    pcd: "5x130",
    qty: 4,
    condition: "Fair",
    notes: "",
    imageFront: "/images/secondhand/SH002A.jpeg",
    imageBack: "/images/secondhand/SH002B.jpeg",
  },
  {
    stockCode: "003",
    brand: "Aline",
    size: 15,
    widthOffset: "6.5J",
    holes: 5,
    pcd: "5x113",
    qty: 2,
    condition: "Fair",
    notes: "",
    imageFront: "/images/secondhand/SH003A.jpeg",
    imageBack: "/images/secondhand/SH003B.jpeg",
  },
  {
    stockCode: "004",
    brand: "Audi",
    size: 17,
    widthOffset: "7.5J",
    holes: 5,
    pcd: "5x112",
    qty: 2,
    condition: "Poor",
    notes: "Only one center cap.",
    imageFront: "/images/secondhand/SH004A.jpeg",
    imageBack: "/images/secondhand/SH004B.jpeg",
  },
  {
    stockCode: "005",
    brand: "Aline",
    size: 20,
    widthOffset: "10.5J",
    holes: 5,
    pcd: "5x130",
    qty: 2,
    condition: "Excellent",
    notes: "",
    imageFront: "/images/secondhand/SH005A.jpeg",
    imageBack: "/images/secondhand/SH005B.jpeg",
  },
  {
    stockCode: "006",
    brand: "Nissan",
    size: 17,
    widthOffset: "7J",
    holes: 5,
    pcd: "5x115",
    qty: 3,
    condition: "Poor",
    notes: "Only two center caps.",
    imageFront: "/images/secondhand/SH006A.jpeg",
    imageBack: "/images/secondhand/SH006B.jpeg",
  },
];

export default function SecondhandPage() {
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [pcdFilter, setPcdFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const sizeOptions = useMemo(
    () => Array.from(new Set(MOCK_INVENTORY.map((item) => item.size.toString()))).sort(),
    [],
  );
  const pcdOptions = useMemo(
    () => Array.from(new Set(MOCK_INVENTORY.map((item) => item.pcd))).sort(),
    [],
  );

  const visibleItems = useMemo(() => {
    const filtered = MOCK_INVENTORY.filter((item) => {
      const sizeMatch = sizeFilter === "all" || item.size.toString() === sizeFilter;
      const pcdMatch = pcdFilter === "all" || item.pcd === pcdFilter;
      return sizeMatch && pcdMatch;
    });

    if (sortBy === "size-asc") {
      return [...filtered].sort((a, b) => a.size - b.size);
    }

    if (sortBy === "size-desc") {
      return [...filtered].sort((a, b) => b.size - a.size);
    }

    return filtered;
  }, [pcdFilter, sizeFilter, sortBy]);

  return (
    <main className="bg-neutral-950 text-white">
      <section className="border-b border-neutral-800">
        <div className="container mx-auto max-w-screen-2xl px-4 py-14">
          <h1 className="text-4xl font-black tracking-tight uppercase">
            Secondhand Wheels
          </h1>
          <p className="mt-3 max-w-3xl text-neutral-400">
            View inspected secondhand mags and rims. Each listing includes stock
            code, fitment specs, condition, and two photos.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-800 bg-neutral-900/60">
        <div className="container mx-auto max-w-screen-2xl px-4 py-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <select
              className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
              value={sizeFilter}
              onChange={(event) => setSizeFilter(event.target.value)}
              aria-label="Filter by wheel size"
            >
              <option value="all">All sizes</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <select
              className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
              value={pcdFilter}
              onChange={(event) => setPcdFilter(event.target.value)}
              aria-label="Filter by PCD"
            >
              <option value="all">All PCD</option>
              {pcdOptions.map((pcd) => (
                <option key={pcd} value={pcd}>
                  {pcd}
                </option>
              ))}
            </select>

            <select
              className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort wheel results"
            >
              <option value="newest">Sort: Latest first</option>
              <option value="size-asc">Sort: Size small to large</option>
              <option value="size-desc">Sort: Size large to small</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-screen-2xl px-4 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={item.stockCode}
                className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
              >
                <div className="relative aspect-square overflow-hidden bg-black">
                  <span
                    className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${CONDITION_BADGE_STYLES[item.condition]}`}
                  >
                    {item.condition}
                  </span>
                  <img
                    src={item.imageFront}
                    alt={`${item.brand} front view`}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={item.imageBack}
                    alt={`${item.brand} second view`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-bold">{item.brand}</h2>
                      <p className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                        {item.stockCode}
                      </p>
                    </div>
                    <div className="text-xl font-black text-primary">
                      {item.size}
                      &quot;
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-md border border-neutral-800 bg-neutral-950 p-2">
                      <dt className="text-[11px] uppercase tracking-wide text-neutral-400">
                        Width / Offset
                      </dt>
                      <dd className="font-semibold">{item.widthOffset}</dd>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-neutral-950 p-2">
                      <dt className="text-[11px] uppercase tracking-wide text-neutral-400">
                        PCD
                      </dt>
                      <dd className="font-semibold">{item.pcd}</dd>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-neutral-950 p-2">
                      <dt className="text-[11px] uppercase tracking-wide text-neutral-400">
                        Holes / Studs
                      </dt>
                      <dd className="font-semibold">{item.holes}</dd>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-neutral-950 p-2">
                      <dt className="text-[11px] uppercase tracking-wide text-neutral-400">
                        Qty
                      </dt>
                      <dd className="font-semibold">{item.qty}</dd>
                    </div>
                  </dl>

                  <p className="text-sm text-neutral-400">
                    {item.notes || "No notes added yet."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
