import { Product, Review } from './types.ts';

export const products: Product[] = [
  {
    id: '1',
    name: 'Desert Bloom Trio',
    price: 899,
    fabric: 'Satin',
    color: 'Champagne',
    image: 'https://images.unsplash.com/photo-1631557551062-8e7918233b3b?auto=format&fit=crop&q=80&w=1000',
    description: 'A curated trio of satin scrunchies in burnt sienna, dusty rose, and shimmering champagne gold. Inspired by desert sunsets.',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Cottage Core Trio',
    price: 749,
    fabric: 'Satin',
    color: 'Sage',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1000',
    description: 'A charming set featuring polka dots, green gingham, and houndstooth patterns. Perfect for cozy tea-time aesthetics.',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Midnight Teal Shimmer',
    price: 349,
    fabric: 'Velvet',
    color: 'Midnight',
    image: 'https://images.unsplash.com/photo-1610444583907-79737f71b9f7?auto=format&fit=crop&q=80&w=1000',
    description: 'Deep teal velvet with a celestial shimmer. Strong, comfortable hold that captures the light beautifully.',
    isBestSeller: false
  },
  {
    id: '4',
    name: 'Ethereal Organza Cloud',
    price: 299,
    fabric: 'Silk',
    color: 'Blush',
    image: 'https://images.unsplash.com/photo-1550523588-444490403362?auto=format&fit=crop&q=80&w=1000',
    description: 'A light-as-air pink organza scrunchie with golden highlights. Adds a high-fashion, dreamy finish to any hair style.',
    isBestSeller: false
  },
  {
    id: '5',
    name: 'Pure Luxury Satin Stack',
    price: 999,
    fabric: 'Satin',
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1621252178125-9610f4458373?auto=format&fit=crop&q=80&w=1000',
    description: 'A luxurious stack of white, rose, and gold satin scrunchies. Ultra-gentle on hair to prevent kinks and breakage.',
    isBestSeller: true
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    user: 'Ananya S.',
    rating: 5,
    comment: "The Desert Bloom Trio is even more beautiful in person! The satin quality is exceptional.",
    date: '1 day ago'
  },
  {
    id: 'r2',
    user: 'Priya K.',
    rating: 5,
    comment: "Finally found scrunchies that don't pull my hair. The Midnight Teal looks stunning.",
    date: '5 days ago'
  },
  {
    id: 'r3',
    user: 'Riya M.',
    rating: 4,
    comment: "The Ethereal Organza is so dreamy. Perfect for weddings!",
    date: '1 week ago'
  }
];