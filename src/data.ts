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

export const properties: Property[] = [
  {
    id: '1',
    title: 'Лофт на Красном проспекте',
    type: 'Квартира',
    price: 4500,
    location: 'Новосибирск, Центральный р-н',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi', 'Smart TV', 'Кондиционер', 'Стиральная машина', 'Кофеварка'],
    stats: { guests: 2, bedrooms: 1, area: 45 },
    rating: 4.9,
    isPopular: true,
    description: 'Стильный лофт в самом центре города. Дизайнерский ремонт, панорамные окна с видом на Красный проспект. Идеально подойдет для романтических выходных или деловой поездки.'
  },
  {
    id: '2',
    title: 'Уютный коттедж в Заельцовском парке',
    type: 'Коттедж',
    price: 15000,
    location: 'Новосибирск, Заельцовский р-н',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Баня', 'Мангал', 'Парковка', 'Лес', 'Караоке', 'Настольный теннис'],
    stats: { guests: 8, bedrooms: 4, area: 180 },
    rating: 5.0,
    description: 'Большой деревянный коттедж прямо на границе с сосновым бором. На территории есть жаркая русская баня на дровах, просторная беседка с мангальной зоной.'
  },
  {
    id: '3',
    title: 'A-Frame дом с купелью (ОбьГЭС)',
    type: 'Дом',
    price: 12000,
    location: 'Новосибирск, Советский р-н',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Купель', 'Камин', 'Терасса', 'Гриль', 'Wi-Fi'],
    stats: { guests: 6, bedrooms: 3, area: 120 },
    rating: 4.8,
    description: 'Инстаграмный треугольный дом (A-Frame) с панорамным фасадом. Главная фишка — горячая купель фурако на открытой террасе, которую можно принимать даже зимой!'
  },
  {
    id: '4',
    title: 'Студия с панорамным видом на Обь',
    type: 'Квартира',
    price: 3800,
    location: 'Новосибирск, Октябрьский р-н',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi', 'Телевизор', 'Кухня', 'Балкон'],
    stats: { guests: 2, bedrooms: 1, area: 35 },
    rating: 4.7,
    description: 'Светлая студия на 20 этаже в новом ЖК Европейский Берег. Потрясающий вид на реку и Бугринский мост. Рядом красивая набережная для прогулок.'
  },
  {
    id: '5',
    title: 'Современный дом с бассейном',
    type: 'Дом',
    price: 25000,
    location: 'Новосибирск, пос. Элитный',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Бассейн', 'Сауна', 'Гараж', 'BBQ зона', 'Бильярд'],
    stats: { guests: 12, bedrooms: 5, area: 300 },
    rating: 4.9,
    isPopular: true,
    description: 'Шикарная резиденция для премиального отдыха. Подогреваемый бассейн внутри дома, финская сауна, огромная зона для барбекю и ухоженный газон.'
  },
  {
    id: '6',
    title: 'Скандинавский домик в лесу',
    type: 'Коттедж',
    price: 9000,
    location: 'Новосибирск, Кольцово',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    amenities: ['Мангал', 'Лес', 'Печь-камин', 'Проектор'],
    stats: { guests: 4, bedrooms: 2, area: 80 },
    rating: 4.9,
    description: 'Уединенный эко-домик в стиле сканди. Вокруг только сосны и тишина. Отличный вариант для цифрового детокса и отдыха от городской суеты.'
  }
];
