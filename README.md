# AutoKart MVP

Build a modern, premium-looking car accessories e-commerce website called "AutoKart".

IMPORTANT:

- Keep the project relatively small and efficient because I am using Lovable's FREE token/credit limit.

- Do not over-engineer the project.

- Build a polished frontend-first MVP with clean reusable components.

- Avoid unnecessary backend systems, authentication, payment gateways, admin dashboards, complex databases, or excessive pages.

- The website must still feel like a real professional car accessories store.

- Use realistic product information and images.

- Make the UI responsive for desktop, tablet, and mobile.

TECH STACK:

- React

- TypeScript

- Tailwind CSS

- shadcn/ui where useful

- Lucide icons

- Use local/static mock product data instead of requiring a backend.

- Store cart state locally in the browser/localStorage.

BRAND:

Name: AutoKart

Tagline: "Upgrade Your Drive"

Style: premium automotive e-commerce

Visual direction: dark, sporty, modern, clean and slightly aggressive.

Use a dark charcoal/black interface with subtle gradients, white text, and one strong accent color.

Use rounded cards, smooth hover animations, subtle shadows, and clean spacing.

Do NOT make it look like a generic template.

MAIN WEBSITE STRUCTURE:

1. STICKY HEADER

Create a professional sticky navigation bar containing:

- AutoKart logo/text

- Home

- Shop

- Categories

- Deals

- About

- Search icon/search bar

- Cart icon with item count

- Mobile hamburger menu

Header should become slightly blurred/translucent while scrolling.

2. HERO SECTION

Create a visually impressive automotive hero section.

Headline:

"Upgrade Your Drive."

Subheading:

"Premium car accessories built to make every journey better."

Buttons:

- Shop Accessories

- Explore Deals

Use a high-quality automotive/car interior or modified-car background image.

Add a dark gradient overlay so text remains readable.

Add a small promotional badge:

"Premium Accessories • Fast Delivery • Easy Returns"

3. CATEGORY SECTION

Show 6 compact category cards:

- Interior

- Exterior

- Lighting

- Car Care

- Electronics

- Performance

Each card should have an appropriate icon/image and hover animation.

4. FEATURED PRODUCTS

Create a responsive product grid with approximately 8 products.

Use realistic products such as:

- Premium Car LED Headlight Kit

- Magnetic Phone Holder

- Car Ambient Lighting Kit

- Premium Seat Cushion

- Car Vacuum Cleaner

- Dashboard Camera

- Car Cleaning Kit

- Universal Car Floor Mats

Every product card should contain:

- Product image

- Product name

- Star rating

- Number of reviews

- Current price

- Original price with strikethrough

- Discount percentage

- "Add to Cart" button

- Wishlist heart icon

Make the cards visually premium.

5. DEAL / PROMOTIONAL BANNER

Create a compact promotional section:

"Make Your Car Stand Out"

"Save up to 30% on selected accessories."

Button:

"View Deals"

Use an automotive image and attractive gradient overlay.

6. WHY AUTOKART

Create 4 small feature cards:

- Premium Quality

- Fast Delivery

- Easy Returns

- Secure Checkout

Keep this section compact.

7. PRODUCT DETAIL MODAL

When a product is clicked, open a modal instead of creating a separate complex page.

The modal should show:

- Large product image

- Product name

- Rating

- Price

- Description

- Quantity selector

- Add to Cart button

- Buy Now button

8. SHOPPING CART DRAWER

Clicking the cart should open a right-side cart drawer.

Show:

- Product image

- Product name

- Price

- Quantity +/-

- Remove button

- Subtotal

- Delivery estimate

- Total

- Checkout button

Use localStorage so the cart remains after refreshing.

9. CHECKOUT

Do NOT build a real payment gateway.

Create a simple checkout modal/page showing:

- Customer name

- Mobile number

- Email

- Address

- City

- State

- Pincode

- Order summary

- Total

- "Place Order" button

After clicking Place Order, show a professional success screen:

"Order Placed Successfully!"

with a generated mock order number.

10. SEARCH

Implement frontend product search.

The search bar should filter products by:

- Product name

- Category

Show a clean "No products found" state when necessary.

11. FILTERS

On the Shop section add simple filters:

- Category

- Price range

- Rating

- Sort by price

- Sort by popularity

Keep filtering frontend-only using mock data.

12. FOOTER

Create a professional footer containing:

- AutoKart logo

- Short description

- Shop links

- Customer Support

- Social icons

- Copyright

DESIGN DETAILS:

- Premium automotive aesthetic

- Dark charcoal/black background

- White/light-gray typography

- One accent color such as electric blue

- Large bold headings

- Modern rounded cards

- Subtle glassmorphism where appropriate

- Smooth hover effects

- Smooth scrolling

- Button hover animations

- Product card lift animation on hover

- Skeleton/loading effect if useful

- Avoid excessive animations

- Maintain excellent readability

RESPONSIVE DESIGN:

Desktop:

- Wide professional layout

- 4 product cards per row

Tablet:

- 2–3 product cards per row

Mobile:

- 2 product cards per row where practical

- Compact header

- Hamburger navigation

- Cart drawer optimized for mobile

- Hero text properly resized

- No horizontal scrolling

IMPORTANT PERFORMANCE / LOVABLE FREE-TOKEN CONSTRAINT:

Keep the implementation compact.

Do not create unnecessary files or components.

Do not install unnecessary dependencies.

Do not build a backend.

Do not implement real authentication.

Do not implement real payments.

Do not create an admin panel.

Do not create a complex database.

Use a single mock products data file.

Use reusable components for ProductCard, Header, CartDrawer, ProductModal, CategoryCard, and Footer.

CONTENT:

Use realistic Indian e-commerce pricing in INR (₹).

Example price range: ₹299–₹9,999.

Use realistic ratings such as 4.2–4.9.

Use believable review counts.

Do not label the website data as "dummy data" or "imaginary data" in the visible UI.

FINAL QUALITY:

The finished website should look like a real premium car accessories startup website, not a basic college project.

Prioritize:

1. Excellent visual design

2. Smooth user experience

3. Working product search

4. Working category/filter system

5. Working cart

6. Responsive design

7. Fast performance

8. Clean code

Before finishing, make sure there are no broken buttons, broken layouts, console errors, or horizontal scrolling on mobile.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://autokart.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/abcbc92c-74a3-4e6f-b0d6-b8022e32ceb9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
