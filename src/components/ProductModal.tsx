import { Star, X } from "lucide-react";
import { useState } from "react";
import { discount, inr, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export default function ProductModal({
  product,
  onClose,
  onBuyNow,
}: {
  product: Product;
  onClose: () => void;
  onBuyNow: () => void;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-card sm:rounded-3xl"
      >
        <div className="relative grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/70 backdrop-blur"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-widest text-primary">{product.category}</p>
            <h2 className="text-xl font-bold sm:text-2xl">{product.name}</h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">{product.rating}</span>
              <span>({product.reviews.toLocaleString("en-IN")} reviews)</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-bold">{inr(product.price)}</span>
              <span className="text-sm text-muted-foreground line-through">{inr(product.mrp)}</span>
              <span className="text-sm font-semibold text-primary">{discount(product)}% off</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Quantity</span>
              <div className="flex items-center rounded-xl border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1.5">
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                <button onClick={() => setQty((q) => Math.min(10, q + 1))} className="px-3 py-1.5">
                  +
                </button>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => {
                  add(product, qty);
                  onClose();
                }}
                className="flex-1 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary/70"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  add(product, qty);
                  onBuyNow();
                }}
                className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
