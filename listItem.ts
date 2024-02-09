export type ListItem = {
  id: number;
  title: string;
  price: number;
};

export const LISTS = [
  {
    id: 59,
    title: 'Spring and summershoes',
    price: 20,
    quantity: 3,
    total: 60,
    discountPercentage: 8.71,
    discountedPrice: 55,
    thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
  },
  {
    id: 88,
    title: 'TC Reusable Silicone Magic Washing Gloves',
    price: 29,
    quantity: 2,
    total: 58,
    discountPercentage: 3.19,
    discountedPrice: 56,
    thumbnail: 'https://i.dummyjson.com/data/products/88/thumbnail.jpg',
  },
  {
    id: 18,
    title: 'Oil Free Moisturizer 100ml',
    price: 40,
    quantity: 2,
    total: 80,
    discountPercentage: 13.1,
    discountedPrice: 70,
    thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
  },
];
