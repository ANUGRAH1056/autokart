import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { inr } from "@/data/products";
import { useCart } from "@/lib/cart";

type Step = "cart" | "checkout" | "done";

const FIELDS = [
  { key: "name", label: "Full name", type: "text" },
  { key: "mobile", label: "Mobile number", type: "tel" },
  { key: "email", label: "Email", type: "email" },
  { key: "address", label: "Address", type: "text", full: true },
  { key: "city", label: "City", type: "text" },
  { key: "state", label: "State", type: "text" },
  { key: "pincode", label: "Pincode", type: "text" },
] as const;

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, setQty, remove, subtotal, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [order, setOrder] = useState("");
  const [form, setForm] = useState<Record<string, string>>({});

  const delivery = subtotal > 0 && subtotal < 999 ? 99 : 0;
  const total = subtotal + delivery;

  const close = () => {
    onClose();
    setTimeout(() => setStep("cart"), 250);
  };

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrder("AK" + Math.floor(100000 + Math.random() * 900000));
    clear();
    setStep("done");
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-base font-bold">
            {step === "cart" ? "Your Cart" : step === "checkout" ? "Checkout" : "Order Confirmed"}
          </h2>
          <button aria-label="Close cart" onClick={close} className="rounded-full p-2 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Your cart is empty.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-20 w-20 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{product.name}</p>
                        <p className="text-sm text-primary">{inr(product.price)}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center rounded-lg border border-border">
                            <button
                              aria-label="Decrease"
                              onClick={() => setQty(product.id, qty - 1)}
                              className="px-2 py-1"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-7 text-center text-sm">{qty}</span>
                            <button
                              aria-label="Increase"
                              onClick={() => setQty(product.id, qty + 1)}
                              className="px-2 py-1"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            aria-label="Remove item"
                            onClick={() => remove(product.id)}
                            className="text-muted-foreground transition-colors hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="space-y-2 border-t border-border px-5 py-4 text-sm">
                <Row label="Subtotal" value={inr(subtotal)} />
                <Row label="Delivery" value={delivery ? inr(delivery) : "Free"} />
                <p className="text-xs text-muted-foreground">Estimated delivery in 3–5 days</p>
                <div className="flex justify-between pt-1 text-base font-bold">
                  <span>Total</span>
                  <span>{inr(total)}</span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}

        {step === "checkout" && (
          <form onSubmit={placeOrder} className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
            <div className="grid grid-cols-2 gap-3">
              {FIELDS.map((f) => (
                <label
                  key={f.key}
                  className={`flex flex-col gap-1 text-xs text-muted-foreground ${
                    "full" in f && f.full ? "col-span-2" : ""
                  }`}
                >
                  {f.label}
                  <input
                    required
                    type={f.type}
                    value={form[f.key] ?? ""}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="rounded-xl border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 space-y-2 rounded-2xl border border-border p-4 text-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Order summary</p>
              {items.map(({ product, qty }) => (
                <Row key={product.id} label={`${product.name} × ${qty}`} value={inr(product.price * qty)} />
              ))}
              <Row label="Delivery" value={delivery ? inr(delivery) : "Free"} />
              <div className="flex justify-between border-t border-border pt-2 text-base font-bold">
                <span>Total</span>
                <span>{inr(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Place Order
            </button>
            <button
              type="button"
              onClick={() => setStep("cart")}
              className="mt-2 w-full rounded-xl border border-border py-3 text-sm font-medium"
            >
              Back to cart
            </button>
          </form>
        )}

        {step === "done" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <h3 className="text-xl font-bold">Order Placed Successfully!</h3>
            <p className="text-sm text-muted-foreground">
              Order number <span className="font-semibold text-foreground">{order}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              We've emailed your invoice. Expect delivery in 3–5 business days.
            </p>
            <button
              onClick={close}
              className="mt-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="min-w-0 truncate text-muted-foreground">{label}</span>
      <span className="shrink-0">{value}</span>
    </div>
  );
}
