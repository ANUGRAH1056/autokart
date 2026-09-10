import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-extrabold tracking-tight">
            Auto<span className="text-primary">Kart</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            AutoKart curates premium car accessories for drivers who care about how their car looks,
            feels and performs. Tested products, honest pricing, fast delivery across India.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {["Interior", "Exterior", "Lighting", "Car Care", "Electronics"].map((x) => (
              <li key={x}>
                <a href="#shop" className="transition-colors hover:text-primary">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Customer Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {["Track Order", "Shipping Policy", "Returns & Refunds", "Warranty", "Contact Us"].map(
              (x) => (
                <li key={x}>
                  <a href="#shop" className="transition-colors hover:text-primary">
                    {x}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AutoKart. Upgrade Your Drive.
      </div>
    </footer>
  );
}
