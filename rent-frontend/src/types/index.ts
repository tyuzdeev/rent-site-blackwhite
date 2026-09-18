export interface Property {
  id: string;
  title: string;
  type: 'Квартира' | 'Коттедж' | 'Дом';
  price: number;
  location: string;
  imageUrl: string;
  amenities: string[];
  stats: { guests: number; bedrooms: number; area: number };
  rating: number;
  isPopular?: boolean;
  description?: string;
}
