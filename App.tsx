
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Instagram, ChevronRight, Star, ArrowRight, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { products, reviews } from './data.ts';
import { Product, CartItem, Fabric } from './types.ts';

// --- Sub-components ---

const Navbar = ({ cartCount, openCart, setPage }: { cartCount: number, openCart: () => void, setPage: (p: 'home' | 'shop') => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-blush-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} className="text-charcoal" />
        </button>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide text-charcoal/80 uppercase">
          <button onClick={() => setPage('home')} className="hover:text-blush transition-colors">Home</button>
          <button onClick={() => setPage('shop')} className="hover:text-blush transition-colors">Shop All</button>
          <a href="#" className="hover:text-blush transition-colors">Collections</a>
        </div>

        <button onClick={() => setPage('home')} className="flex items-center gap-1">
          <span className="text-2xl font-serif font-bold text-charcoal tracking-tight">Luna <span className="text-blush">Loops</span></span>
        </button>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block hover:text-blush transition-colors"><Search size={20} /></button>
          <button className="hover:text-blush transition-colors"><Heart size={20} /></button>
          <button onClick={openCart} className="relative hover:text-blush transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blush text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col p-8 animate-in fade-in slide-in-from-left duration-300">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8 mt-12 text-2xl font-serif text-charcoal">
            <button onClick={() => { setPage('home'); setIsMenuOpen(false); }}>Home</button>
            <button onClick={() => { setPage('shop'); setIsMenuOpen(false); }}>Shop All</button>
            <button onClick={() => setIsMenuOpen(false)}>Satin Collection</button>
            <button onClick={() => setIsMenuOpen(false)}>Silk Collection</button>
            <button onClick={() => setIsMenuOpen(false)}>Velvet Collection</button>
            <button onClick={() => setIsMenuOpen(false)}>About Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onShopNow }: { onShopNow: () => void }) => (
  <section className="pt-32 pb-16 px-6 bg-blush-50 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left space-y-6">
        <span className="inline-block px-4 py-1 bg-white rounded-full text-xs font-semibold uppercase tracking-widest text-blush">Ethically Handmade</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight">
          Soft on Your Hair. <br />
          <span className="italic text-blush-200">Strong on Style.</span>
        </h1>
        <p className="text-lg text-charcoal/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
          The aesthetic solution to hair care. Our premium scrunchies are designed to protect your locks while elevating your everyday look.
        </p>
        <button 
          onClick={onShopNow}
          className="bg-charcoal text-white px-10 py-4 rounded-full font-medium hover:bg-blush transition-all transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0"
        >
          Shop Now <ArrowRight size={18} />
        </button>
      </div>
      <div className="flex-1 relative">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
          <img src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1000" alt="Luna Loops Scrunchie" className="w-full h-[500px] object-cover" />
        </div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender rounded-full blur-3xl opacity-50 -z-0"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blush-100 rounded-full blur-3xl opacity-50 -z-0"></div>
      </div>
    </div>
  </section>
);

const FeatureBanner = () => (
  <div className="bg-cream py-10 border-y border-blush-100">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center text-blush group-hover:bg-blush group-hover:text-white transition-colors">
          <Truck size={24} />
        </div>
        <div>
          <h4 className="font-bold text-charcoal">Free Shipping</h4>
          <p className="text-xs text-charcoal/50">On all orders over $40</p>
        </div>
      </div>
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-lavender-50 flex items-center justify-center text-lavender-DEFAULT group-hover:bg-lavender-DEFAULT group-hover:text-white transition-colors">
          <RefreshCcw size={24} />
        </div>
        <div>
          <h4 className="font-bold text-charcoal">Easy Returns</h4>
          <p className="text-xs text-charcoal/50">30-day no-hassle returns</p>
        </div>
      </div>
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-cream-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h4 className="font-bold text-charcoal">Secure Checkout</h4>
          <p className="text-xs text-charcoal/50">100% encrypted payment</p>
        </div>
      </div>
    </div>
  </div>
);

const CollectionCard = ({ title, image, color, onClick }: { title: string, image: string, color: string, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer flex-1 min-w-[300px]"
  >
    <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
      <h3 className="text-3xl font-serif font-bold mb-4">{title} Collection</h3>
      <button className="bg-white text-charcoal px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
        Browse {title}
      </button>
    </div>
  </div>
);

const ProductCard: React.FC<{ product: Product, addToCart: (p: Product) => void }> = ({ product, addToCart }) => (
  <div className="group space-y-4">
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {product.isBestSeller && (
        <span className="absolute top-4 left-4 bg-blush text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Best Seller</span>
      )}
      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full text-charcoal/50 hover:text-blush transition-colors">
        <Heart size={18} />
      </button>
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-white text-charcoal py-3 rounded-full font-semibold shadow-lg hover:bg-charcoal hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <ShoppingBag size={16} /> Quick Add
        </button>
      </div>
    </div>
    <div className="text-center px-2">
      <h4 className="font-medium text-charcoal group-hover:text-blush transition-colors">{product.name}</h4>
      <p className="text-charcoal/60 text-sm font-medium mt-1">${product.price.toFixed(2)}</p>
      <p className="text-[10px] text-charcoal/30 uppercase tracking-widest mt-2 font-bold">{product.fabric}</p>
    </div>
  </div>
);

const ReviewSlider = () => (
  <section className="bg-lavender-50 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-center mb-16">What Our Community Says</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-sm relative">
            <div className="flex gap-1 text-blush mb-4">
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-charcoal/80 italic mb-6">"{review.comment}"</p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm">{review.user}</span>
              <span className="text-xs text-charcoal/40">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="bg-cream py-24 px-6 border-t border-blush-100">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h2 className="text-4xl font-serif text-charcoal">Join the Loop</h2>
      <p className="text-charcoal/60">Subscribe for early access to new collections, hair tips, and 10% off your first order!</p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="flex-1 px-6 py-4 rounded-full border border-blush-100 focus:outline-none focus:ring-2 focus:ring-blush transition-all"
        />
        <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-blush transition-colors">Subscribe</button>
      </form>
    </div>
  </section>
);

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }: { 
  isOpen: boolean, 
  onClose: () => void, 
  cart: CartItem[], 
  removeFromCart: (id: string) => void,
  updateQuantity: (id: string, delta: number) => void
}) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 40;
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);

  return (
    <>
      <div className={`fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-[101] shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-blush-100 flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold">Your Bag ({cart.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-blush-50 rounded-full transition-colors"><X size={24} /></button>
        </div>

        <div className="px-6 py-4 bg-blush-50 space-y-2">
          <p className="text-xs font-medium text-charcoal/60">
            {total >= freeShippingThreshold ? "Congrats! You've got free shipping!" : `Add $${(freeShippingThreshold - total).toFixed(2)} more for FREE shipping!`}
          </p>
          <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
            <div className="h-full bg-blush transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} className="text-charcoal/10" />
              <p className="text-charcoal/50">Your bag is empty. <br /> Let's find something pretty!</p>
              <button onClick={onClose} className="bg-charcoal text-white px-8 py-3 rounded-full text-sm font-bold">Shop Now</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm text-charcoal">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-charcoal/30 hover:text-red-400"><X size={16} /></button>
                    </div>
                    <p className="text-xs text-charcoal/40 uppercase tracking-wider">{item.fabric}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-blush-100 rounded-full bg-white px-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-blush transition-colors">-</button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-blush transition-colors">+</button>
                      </div>
                      <span className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-blush-100 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal/40 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-white py-4 rounded-full font-bold hover:bg-blush transition-all shadow-xl">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<'home' | 'shop'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Fabric | 'All'>('All');
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} added to bag!`);
    setTimeout(() => setNotification(null), 3000);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.fabric === activeFilter);

  return (
    <div className="min-h-screen selection:bg-blush/30 selection:text-blush-DEFAULT">
      <div className="bg-blush text-white text-[10px] sm:text-xs font-bold py-2 text-center uppercase tracking-[0.2em] px-4">
        ✨ Free shipping on orders over $40 ✨
      </div>

      <Navbar 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
        openCart={() => setIsCartOpen(true)}
        setPage={setPage}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-charcoal text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl animate-bounce">
          {notification}
        </div>
      )}

      {page === 'home' ? (
        <main className="animate-in fade-in duration-700">
          <Hero onShopNow={() => setPage('shop')} />
          <FeatureBanner />

          {/* Featured Collections */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-4">Shop Collections</h2>
            <p className="text-center text-charcoal/50 mb-16 max-w-xl mx-auto">Discover our handcrafted fabric choices, each designed with your hair health in mind.</p>
            <div className="flex flex-wrap gap-8">
              <CollectionCard 
                title="Satin" 
                image="https://images.unsplash.com/photo-1550523588-444490403362?auto=format&fit=crop&q=80&w=1000" 
                color="blush"
                onClick={() => { setActiveFilter('Satin'); setPage('shop'); }}
              />
              <CollectionCard 
                title="Silk" 
                image="https://images.unsplash.com/photo-1615396899793-134015f4039b?auto=format&fit=crop&q=80&w=1000" 
                color="lavender"
                onClick={() => { setActiveFilter('Silk'); setPage('shop'); }}
              />
              <CollectionCard 
                title="Velvet" 
                image="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=1000" 
                color="cream"
                onClick={() => { setActiveFilter('Velvet'); setPage('shop'); }}
              />
            </div>
          </section>

          {/* Best Sellers */}
          <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif">Community Favorites</h2>
                  <p className="text-charcoal/50">Our most-loved pieces, according to you.</p>
                </div>
                <button onClick={() => setPage('shop')} className="text-sm font-bold border-b-2 border-blush pb-1 hover:text-blush transition-colors flex items-center gap-2 w-fit">
                  View All Products <ChevronRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
                {products.filter(p => p.isBestSeller).map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-32 bg-cream-50 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Fabric close up" />
                  <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="Sewing details" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="Handcrafting" />
                  <img src="https://images.unsplash.com/photo-1611082216935-7c090bfde384?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Finished product" />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-5xl font-serif">Made with Love, <br /><span className="text-blush">Worn with Confidence.</span></h2>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  Every Luna Loop is handcrafted in our small studio with the highest quality fabrics. We believe your hair accessories should be as kind as they are stylish.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blush rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold">Hair Friendly</h4>
                      <p className="text-sm text-charcoal/50">Reduces breakage, kinks, and headaches compared to traditional elastics.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blush rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold">Handcrafted Quality</h4>
                      <p className="text-sm text-charcoal/50">Small batch production ensures every piece meets our aesthetic standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ReviewSlider />
        </main>
      ) : (
        <main className="pt-32 pb-24 px-6 animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div>
                <h1 className="text-5xl font-serif mb-2">Shop All</h1>
                <p className="text-charcoal/50">Explore our full range of hair-loving accessories.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['All', 'Satin', 'Silk', 'Velvet'].map((filter) => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter as Fabric | 'All')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeFilter === filter ? 'bg-charcoal text-white shadow-lg' : 'bg-white text-charcoal border border-blush-100 hover:border-blush'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-32 text-center text-charcoal/40">No products found in this category.</div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            )}
          </div>
        </main>
      )}

      <Newsletter />

      <footer className="bg-charcoal text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-tight">Luna Loops</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Ethically made hair accessories that bridge the gap between wellness and fashion. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blush transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blush transition-colors"><Search size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-blush">Shop</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><button onClick={() => setPage('shop')} className="hover:text-white transition-colors">Satin Collection</button></li>
              <li><button onClick={() => setPage('shop')} className="hover:text-white transition-colors">Silk Collection</button></li>
              <li><button onClick={() => setPage('shop')} className="hover:text-white transition-colors">Velvet Collection</button></li>
              <li><button onClick={() => setPage('shop')} className="hover:text-white transition-colors">New Arrivals</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-blush">Care</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Washing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hair Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-blush">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2024 Luna Loops. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
