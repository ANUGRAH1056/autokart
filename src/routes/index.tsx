import { createFileRoute } from "@tanstack/react-router";
import {
  Armchair,
  Car,
  Cpu,
  Gauge,
  Lightbulb,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import dealImg from "@/assets/deal.jpg";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/products";
import { CartProvider } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoKart — Premium Car Accessories Online in India" },
      {
        name: "description",
        content:
          "Shop premium car accessories at AutoKart: LED lighting, dash cams, floor mats, car care kits and more. Fast delivery and easy returns across India.",
      },
      { property: "og:title", content: "AutoKart — Upgrade Your Drive" },
      {
        property: "og:description",
        content: "Premium car accessories built to make every journey better.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CartProvider>
      <Home />
    </CartProvider>
  ),
});

const CATEGORY_ICONS = [Armchair, Car, Lightbulb, Sparkles, Cpu, Gauge];
const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹1,000", min: 0, max: 999 },
  { label: "₹1,000 – ₹3,000", min: 1000, max: 3000 },
  { label: "Above ₹3,000", min: 3001, max: Infinity },
];
const SORTS = ["Popularity", "Price: Low to High", "Price: High to Low", "Rating"];

function Home() {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [active, setActive] = useState<Product | null>(null);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState(SORTS[0]!);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const range = PRICE_RANGES[price]!;
    const list = PRODUCTS.filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) &&
        (category === "All" || p.category === category) &&
        p.price >= range.min &&
        p.price <= range.max &&
        p.rating >= minRating,
    );
    const sorted = [...list];
    if (sort === "Price: Low to High") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "Price: High to Low") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "Rating") sorted.sort((a, b) => b.rating - a.rating);
    else sorted.sort((a, b) => b.reviews - a.reviews);
    return sorted;
  }, [query, category, price, minRating, sort]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header query={query} setQuery={setQuery} onCart={() => setCartOpen(true)} />

      {/* HERO */}
      <section id="home" className="relative flex min-h-[92vh] items-center">
        <img
          src={heroImg}
          alt="Illuminated premium car interior at night"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-primary sm:text-xs">
            Premium Accessories • Fast Delivery • Easy Returns
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Upgrade Your <span className="text-primary">Drive.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            Premium car accessories built to make every journey better.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("shop")}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_35px_-12px_var(--glow)] transition-transform hover:-translate-y-0.5"
            >
              Shop Accessories
            </button>
            <button
              onClick={() => scrollTo("deals")}
              className="rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Explore Deals
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section id="categories" title="Shop by Category" kicker="Categories">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c, i) => {
            const Icon = CATEGORY_ICONS[i]!;
            return (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  scrollTo("shop");
                }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{c}</span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* SHOP */}
      <Section id="shop" title="Featured Products" kicker="Shop">
        <div className="mb-6 flex flex-wrap gap-2">
          <Select value={category} onChange={setCategory} options={["All", ...CATEGORIES]} />
          <Select
            value={PRICE_RANGES[price]!.label}
            onChange={(v) => setPrice(PRICE_RANGES.findIndex((r) => r.label === v))}
            options={PRICE_RANGES.map((r) => r.label)}
          />
          <Select
            value={minRating ? `${minRating}★ & above` : "Any rating"}
            onChange={(v) => setMinRating(v === "Any rating" ? 0 : parseFloat(v))}
            options={["Any rating", "4.5★ & above", "4.3★ & above", "4★ & above"]}
          />
          <Select value={sort} onChange={setSort} options={SORTS} />
        </div>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card py-16 text-center">
            <p className="text-base font-semibold">No products found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search term or reset the filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setPrice(0);
                setMinRating(0);
              }}
              className="mt-4 rounded-xl bg-secondary px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setActive} />
            ))}
          </div>
        )}
      </Section>

      {/* DEALS */}
      <section id="deals" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={dealImg}
            alt="Modified black sedan at night"
            loading="lazy"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 sm:p-12">
            <h2 className="max-w-md text-2xl font-extrabold leading-tight sm:text-4xl">
              Make Your Car Stand Out
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Save up to 30% on selected accessories.
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setSort("Popularity");
                scrollTo("shop");
              }}
              className="w-fit rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Deals
            </button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <Section id="why" title="Why AutoKart" kicker="Built on trust">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            [ShieldCheck, "Premium Quality", "Every product is tested before it ships."],
            [Truck, "Fast Delivery", "Dispatched within 24 hours, pan-India."],
            [RotateCcw, "Easy Returns", "7-day hassle-free return window."],
            [Zap, "Secure Checkout", "Encrypted payments and instant invoices."],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Zap;
            return (
              <div
                key={title as string}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <I className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-sm font-semibold sm:text-base">{title as string}</h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{text as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Footer />

      {active && (
        <ProductModal
          product={active}
          onClose={() => setActive(null)}
          onBuyNow={() => {
            setActive(null);
            setCartOpen(true);
          }}
        />
      )}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-primary">{kicker}</p>
      <h2 className="mb-6 mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
