import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Shop", id: "shop" },
  { label: "Categories", id: "categories" },
  { label: "Deals", id: "deals" },
  { label: "About", id: "about" },
];

export default function Header({
  query,
  setQuery,
  onCart,
}: {
  query: string;
  setQuery: (v: string) => void;
  onCart: () => void;
}) {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button onClick={() => go("home")} className="shrink-0 text-lg font-extrabold tracking-tight">
          Auto<span className="text-primary">Kart</span>
        </button>

        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 md:flex">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search accessories..."
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground lg:w-56"
            />
          </div>

          <button
            aria-label="Search"
            onClick={() => setShowSearch((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            aria-label="Open cart"
            onClick={onCart}
            className="relative grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            aria-label="Menu"
            onClick={() => setMenu((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search accessories..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}

      {menu && (
        <nav className="flex flex-col border-t border-border bg-background/95 px-4 py-2 backdrop-blur-xl lg:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
