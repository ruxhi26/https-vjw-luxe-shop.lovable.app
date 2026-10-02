import { useState } from "react";
import {
  ArrowRight, Menu, X, ShoppingBag, Sparkles, Leaf,
  ShieldCheck, HeartHandshake
} from "lucide-react";

const categories = [
  { name: "Fine Jewelry", icon: "✦", text: "Rings, necklaces & heirloom pieces" },
  { name: "Fashion", icon: "✦", text: "Ready-to-wear & couture edits" },
  { name: "Beauty", icon: "✦", text: "Skincare, fragrance & cosmetics" },
  { name: "Home & Decor", icon: "✦", text: "Scandinavian interiors & lighting" },
  { name: "Electronics", icon: "✦", text: "Premium tech & smart devices" },
  { name: "Watches", icon: "✦", text: "Timepieces & fine leather" },
  { name: "Garden", icon: "✦", text: "Botanicals & outdoor living" },
  { name: "Sports", icon: "✦", text: "Performance & athleisure" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          VJW <span>LUXE</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("collection")}>Collection</button>
          <button onClick={() => scrollTo("story")}>Our Story</button>
          <button onClick={() => scrollTo("categories")}>Categories</button>
        </nav>

        <div className="nav-actions">
          <button aria-label="Shopping bag">
            <ShoppingBag size={20} />
            <span>0</span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AUTUMN COLLECTION · 2026</p>
            <h1>Made for the moments that last.</h1>
            <p className="hero-text">
              Hand-finished fine jewelry in 18k gold and ethically-sourced stones.
              Each piece is quietly obsessive, worn every day, kept for a lifetime.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("categories")}>
                Shop Now <ArrowRight size={17} />
              </button>
              <button className="secondary" onClick={() => scrollTo("story")}>
                Our Story
              </button>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="VJW Luxe signature jewelry">
            <div className="jewel-orbit"></div>
            <div className="jewel">VJW</div>
          </div>
        </section>

        <div className="ticker">
          Complimentary shipping over ₹15,000 ✦ Hand-set in Jaipur ✦
          Recycled 18k gold ✦ 30-day returns ✦ Lifetime polishing ✦
          Conflict-free stones ✦ UPI payments
        </div>

        <section id="categories" className="section">
          <p className="eyebrow">BROWSE</p>
          <h2>Shop by Category</h2>
          <p className="section-lead">Eight considered worlds, curated in the VJW way.</p>

          <div className="category-grid">
            {categories.map((item) => (
              <article className="category-card" key={item.name}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <button onClick={() => scrollTo("collection")}>
                  Shop Now <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="story section">
          <div>
            <p className="eyebrow">THE HOUSE</p>
            <h2>Quiet craft, worn openly.</h2>
            <p>
              VJW Luxe is a small atelier making the kind of jewelry you don't
              take off. Every piece is hand-set in Jaipur by artisans who've
              spent lifetimes at the bench, from ethically-sourced stones and
              recycled 18k gold.
            </p>

            <div className="promise-grid">
              <div><HeartHandshake /><h3>Lifetime Care</h3><p>Complimentary polishing and re-plating on every piece.</p></div>
              <div><Leaf /><h3>Ethically Sourced</h3><p>Recycled 18k gold and conflict-free stones.</p></div>
              <div><ShieldCheck /><h3>Signed & Numbered</h3><p>Each piece arrives in an archival velvet case.</p></div>
            </div>
          </div>
          <div className="story-art">
            <Sparkles size={48} />
            <p>Hand-finished in Jaipur</p>
          </div>
        </section>

        <section id="collection" className="app-callout section">
          <p className="eyebrow">WEBSITE & APP · IOS & ANDROID</p>
          <h2>VJW Luxe everywhere.</h2>
          <p>Explore the VJW Luxe collection online. Test checkout is available for preview; no money is charged.</p>
          <button className="primary">Explore Collection <ArrowRight size={17} /></button>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>VJW LUXE</strong>
          <p>Fine pieces. Lasting rituals.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => scrollTo("collection")}>Collection</button>
          <button onClick={() => scrollTo("story")}>Our Story</button>
          <a href="mailto:care@vjwluxe.com">care@vjwluxe.com</a>
        </div>
        <small>© 2026 VJW Luxe</small>
      </footer>
    </div>
  );
}

export default App;
