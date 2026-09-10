import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { discount, inr, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (p: Product) => void;
}) {
  const { add } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() => onOpen(product)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_18px_40px_-18px_var(--glow)]"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground">
          {discount(product)}% OFF
        </span>
        <button
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:border-primary"
        >
          <Heart
            className={`h-4 w-4 ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <p className="text-[11px] uppercase tracking-widest text-primary">{product.category}</p>
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground sm:text-base">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews.toLocaleString("en-IN")})</span>
        </div>
        <div className="mt-auto flex flex-wrap items-baseline gap-2">
          <span className="text-base font-bold text-foreground sm:text-lg">
            {inr(product.price)}
          </span>
          <span className="text-xs text-muted-foreground line-through">{inr(product.mrp)}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            add(product);
          }}
          className="mt-1 w-full rounded-xl bg-secondary px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
