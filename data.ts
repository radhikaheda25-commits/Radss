
import { Product, Review } from './types.ts';

export const products: Product[] = [
  {
    id: '1',
    name: 'Blush Satin Cloud',
    price: 12.00,
    fabric: 'Satin',
    color: 'Blush',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft satin that glides over your hair, reducing breakage and frizz. Perfect for everyday elegance.',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Lavender Silk Dream',
    price: 18.00,
    fabric: 'Silk',
    color: 'Lavender',
    image: 'https://images.unsplash.com/photo-1582294119335-51f78e0787a4?auto=format&fit=crop&q=80&w=800',
    description: 'Pure 22 momme silk for the ultimate hair protection. Luxuriously soft and beautiful.',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Dusty Rose Velvet',
    price: 14.00,
    fabric: 'Velvet',
    color: 'Dusty Rose',
    image: 'https://images.unsplash.com/photo-1610444583737-9759448a02b3?auto=format&fit=crop&q=80&w=800',
    description: 'Lush velvet with a strong hold. Ideal for thicker hair or adding a pop of texture to your outfit.',
    isBestSeller: false
  },
  {
    id: '4',
    name: 'Champagne Satin',
    price: 12.00,
    fabric: 'Satin',
    color: 'Champagne',
    image: 'https://images.unsplash.com/photo-1621252178125-9610f4458373?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant champagne tone in a smooth satin finish. The classic go-to for any look.',
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Sage Silk Luxe',
    price: 22.00,
    fabric: 'Silk',
    color: 'Sage',
    image: 'https://images.unsplash.com/photo-1576073719710-41822c32488d?auto=format&fit=crop&q=80&w=800',
    description: 'Premium mulberry silk in a calming sage green. Gentle on hair, high on style.',
    isBestSeller: false
  },
  {
    id: '6',
    name: 'Midnight Velvet',
    price: 14.00,
    fabric: 'Velvet',
    color: 'Midnight',
    image: 'https://images.unsplash.com/photo-1610444583907-79737f71b9f7?auto=format&fit=crop&q=80&w=800',
    description: 'Deep midnight blue velvet. Sophisticated, strong, and stunning.',
    isBestSeller: false
  },
  {
    id: '7',
    name: 'Creamy Satin Glow',
    price: 12.00,
    fabric: 'Satin',
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1621252179047-94459d278660?auto=format&fit=crop&q=80&w=800',
    description: 'A glowing cream satin that brightens any hairstyle. Gentle enough for overnight use.',
    isBestSeller: false
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    user: 'Sarah M.',
    rating: 5,
    comment: "The softest scrunchies I've ever owned! No more headaches.",
    date: '2 days ago'
  },
  {
    id: 'r2',
    user: 'Chloe G.',
    rating: 5,
    comment: "Beautiful colors. The Silk Dream is definitely worth the price!",
    date: '1 week ago'
  },
  {
    id: 'r3',
    user: 'Emma R.',
    rating: 4,
    comment: "I love the velvet collection for my gym hair. Stays put perfectly.",
    date: '2 weeks ago'
  }
];
