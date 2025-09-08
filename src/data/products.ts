import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'books',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const products: Product[] = [
    {
  id: '3',
  title: 'Men’s Slim Fit Casual Shirt',
  description: 'Cotton shirt with a stylish check pattern for everyday wear.',
  price: 899,
  originalPrice: 1499,
  discount: 40,
  rating: 4.2,
  reviewCount: 583,
  category: 'fashion',
  brand: 'Levi’s',
  images: [
    'https://pictures.kartmax.in/live/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8905745204992/660/KHSH001033_1.jpg'
  ],
  specifications: {
    Size: 'M, L, XL',
    Material: 'Cotton',
    Fit: 'Slim Fit',
    Color: 'Navy Blue'
  },
  features: [
    'Lightweight fabric',
    'Machine washable',
    'Smart casual look'
  ],
  inStock: true,
  seller: 'Levi’s Official Store'
},
{
  id: '4',
  title: 'Women’s Floral Print Dress',
  description: 'Elegant knee-length dress with floral print and flared sleeves.',
  price: 1299,
  originalPrice: 1999,
  discount: 35,
  rating: 4.4,
  reviewCount: 762,
  category: 'fashion',
  brand: 'Zara',
  images: [
    'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Size: 'S, M, L',
    Material: 'Rayon',
    Length: 'Knee-Length',
    Color: 'Peach Floral'
  },
  features: [
    'Flattering silhouette',
    'Lightweight fabric',
    'Perfect for summer'
  ],
  inStock: true,
  seller: 'Zara Store'
},
{
  id: '5',
  title: 'Men’s Stretchable Denim Jeans',
  description: 'Classic blue jeans with stretchable fabric and a snug fit.',
  price: 1499,
  originalPrice: 2299,
  discount: 35,
  rating: 4.3,
  reviewCount: 671,
  category: 'fashion',
  brand: 'Wrangler',
  images: [
    'https://images.meesho.com/images/products/471584268/bnmyw_512.webp'
  ],
  specifications: {
    Waist: '30, 32, 34',
    Material: 'Denim',
    Fit: 'Slim Fit',
    Color: 'Classic Blue'
  },
  features: [
    '5-pocket style',
    'High durability',
    'Stretch comfort'
  ],
  inStock: true,
  seller: 'Wrangler Official'
},
{
  id: '6',
  title: 'Women’s Handbag Combo Set',
  description: 'Stylish 3-piece handbag combo for daily use and travel.',
  price: 1099,
  originalPrice: 1899,
  discount: 42,
  rating: 4.1,
  reviewCount: 498,
  category: 'fashion',
  brand: 'Baggit',
  images: [
    'https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Material: 'Faux Leather',
    Type: 'Handbag + Sling + Wallet',
    Color: 'Beige Brown'
  },
  features: [
    'Spacious compartments',
    'Stylish design',
    'Durable handles'
  ],
  inStock: true,
  seller: 'Baggit India'
},
{
  id: '7',
  title: 'Men’s Sports Shoes',
  description: 'Breathable running shoes with cushioned soles and stylish finish.',
  price: 1799,
  originalPrice: 2999,
  discount: 40,
  rating: 4.5,
  reviewCount: 890,
  category: 'fashion',
  brand: 'Nike',
  images: [
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Size: '7, 8, 9, 10',
    Material: 'Mesh + Rubber Sole',
    Type: 'Running Shoes',
    Color: 'Black/White'
  },
  features: [
    'Shock-absorbing sole',
    'Lightweight build',
    'Anti-slip grip'
  ],
  inStock: true,
  seller: 'Nike India'
  },

  {
  id: '8',
  title: 'Multipurpose Wooden Coffee Table',
  description: 'Elegant center table made with engineered wood and modern design.',
  price: 2999,
  originalPrice: 4999,
  discount: 40,
  rating: 4.3,
  reviewCount: 348,
  category: 'home',
  brand: 'Wakefit',
  images: [
    'https://m.media-amazon.com/images/I/61Q1hvMM7BL._UF894,1000_QL80_.jpg'
  ],
  specifications: {
    Material: 'Engineered Wood',
    Dimensions: '90 x 60 x 45 cm',
    Color: 'Walnut Brown'
  },
  features: [
    'Scratch resistant surface',
    'Easy to assemble',
    'Compact & stylish'
  ],
  inStock: true,
  seller: 'Wakefit Home'
},
{
  id: '9',
  title: 'Ceramic Dinner Set - 18 Pieces',
  description: 'Premium glazed dinner set with floral design.',
  price: 1999,
  originalPrice: 2799,
  discount: 29,
  rating: 4.5,
  reviewCount: 415,
  category: 'home',
  brand: 'LaOpala',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceMdju3W8aa2is5NabMUDHnD1XPUodEvjHw&s'
  ],
  specifications: {
    Material: 'Ceramic',
    Contents: '6 Dinner Plates, 6 Bowls, 6 Side Plates',
    Design: 'Floral Print'
  },
  features: [
    'Microwave Safe',
    'Chip Resistant',
    'Glossy Finish'
  ],
  inStock: true,
  seller: 'LaOpala Store'
},
{
  id: '10',
  title: 'Premium Cotton Bedsheet with 2 Pillow Covers',
  description: 'King size bedsheet with soft and breathable fabric.',
  price: 1099,
  originalPrice: 1899,
  discount: 42,
  rating: 4.2,
  reviewCount: 689,
  category: 'home',
  brand: 'Spaces',
  images: [
    'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Size: 'King',
    Fabric: 'Cotton',
    ThreadCount: '300 TC',
    Color: 'Pastel Blue'
  },
  features: [
    'Fade-resistant print',
    'Soft & breathable',
    'Perfect fit'
  ],
  inStock: true,
  seller: 'Spaces India'
},
{
  id: '11',
  title: 'Electric Kettle 1.5L - Stainless Steel',
  description: 'Quick boil kettle with auto shut-off and cool touch handle.',
  price: 799,
  originalPrice: 1499,
  discount: 47,
  rating: 4.4,
  reviewCount: 1342,
  category: 'home',
  brand: 'Prestige',
  images: [
    'https://rukminim2.flixcart.com/image/750/900/koudfgw0/electric-kettle/8/e/w/rio-1-5-l-ss-kettle-borosil-original-imag37f2cerwszbg.jpeg?q=90&crop=false'
  ],
  specifications: {
    Capacity: '1.5 Litres',
    Material: 'Stainless Steel',
    Power: '1500W',
    AutoOff: 'Yes'
  },
  features: [
    'Boils in 3 minutes',
    'Cordless base',
    'Dry boil protection'
  ],
  inStock: true,
  seller: 'Prestige Official'
},
{
  id: '12',
  title: 'Set of 3 Floating Wall Shelves',
  description: 'Space-saving decorative shelves for home décor and storage.',
  price: 649,
  originalPrice: 1199,
  discount: 46,
  rating: 4.1,
  reviewCount: 522,
  category: 'home',
  brand: 'Urban Ladder',
  images: [
    'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Material: 'MDF Wood',
    Number: '3 Shelves',
    Color: 'Black',
    Dimensions: 'Varied sizes'
  },
  features: [
    'Easy to install',
    'Minimalist design',
    'Holds up to 5kg each'
  ],
  inStock: true,
  seller: 'Urban Ladder'
},

{
  id: '13',
  title: 'Cosco All Court Basketball - Size 7',
  description: 'Durable and grippy basketball for indoor and outdoor play.',
  price: 799,
  originalPrice: 1199,
  discount: 33,
  rating: 4.4,
  reviewCount: 234,
  category: 'sports',
  brand: 'Cosco',
  images: [
    'https://images.pexels.com/photos/161207/basketball-sport-ball-sports-161207.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Size: '7',
    Material: 'Rubber',
    Usage: 'Indoor/Outdoor'
  },
  features: [
    'High bounce performance',
    'Superior grip',
    'Weather resistant'
  ],
  inStock: true,
  seller: 'Cosco Sports'
},
{
  id: '14',
  title: 'Yonex GR 303 Badminton Racket Combo',
  description: 'Lightweight and beginner-friendly rackets with full cover.',
  price: 999,
  originalPrice: 1399,
  discount: 29,
  rating: 4.5,
  reviewCount: 547,
  category: 'sports',
  brand: 'Yonex',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5CrEfpjceulpo33tID2wXtXRPgH96PRSCA&s'
  ],
  specifications: {
    Frame: 'Aluminium',
    Weight: '95–99g',
    Grip: 'G3',
    Strung: 'Yes'
  },
  features: [
    'Combo of 2 rackets',
    'Full cover included',
    'Ideal for beginners'
  ],
  inStock: true,
  seller: 'Yonex India'
},
{
  id: '15',
  title: 'Nivia Dominator Football Size 5',
  description: 'Match-level football with high air retention and grip.',
  price: 599,
  originalPrice: 899,
  discount: 33,
  rating: 4.3,
  reviewCount: 384,
  category: 'sports',
  brand: 'Nivia',
  images: [
    'https://rukminim2.flixcart.com/image/750/900/xif0q/ball/g/q/b/410-435-dominator-03-5-22-1-fb-80083-football-nivia-original-imahfxdbkgpyqmzs.jpeg?q=90&crop=false'
  ],
  specifications: {
    Size: '5',
    Panels: '32',
    Material: 'PU',
    Weight: '420g'
  },
  features: [
    'Machine stitched',
    'Good bounce',
    'Best for grass courts'
  ],
  inStock: true,
  seller: 'Nivia Sports'
},
{
  id: '16',
  title: 'Decathlon Yoga Mat 6mm - Blue',
  description: 'Anti-slip yoga mat with optimal cushioning and texture.',
  price: 899,
  originalPrice: 1299,
  discount: 31,
  rating: 4.6,
  reviewCount: 741,
  category: 'sports',
  brand: 'Decathlon',
  images: [
    'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Thickness: '6mm',
    Material: 'Foam',
    Dimensions: '183 x 61 cm'
  },
  features: [
    'Eco-friendly material',
    'Textured surface for grip',
    'Includes carry strap'
  ],
  inStock: true,
  seller: 'Decathlon India'
},
{
  id: '17',
  title: 'BTWIN Rockrider ST 100 MTB Helmet',
  description: 'Adjustable mountain bike helmet with ventilated design.',
  price: 1299,
  originalPrice: 1799,
  discount: 28,
  rating: 4.5,
  reviewCount: 198,
  category: 'sports',
  brand: 'BTWIN',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTtAq5I-0FtBqrykOnZiJ3V6eeQGI2W83ag&s'
  ],
  specifications: {
    Weight: '280g',
    Size: 'M-L',
    Material: 'EPS Foam + Polycarbonate'
  },
  features: [
    'Lightweight and secure fit',
    '20 air vents',
    'Quick adjust dial'
  ],
  inStock: true,
  seller: 'BTWIN by Decathlon'
},

{
  id: '18',
  title: 'OnePlus 12R 5G',
  description: 'Flagship killer with Snapdragon 8 Gen 2 and AMOLED display.',
  price: 45999,
  originalPrice: 49999,
  discount: 8,
  rating: 4.6,
  reviewCount: 856,
  category: 'electronics',
  brand: 'OnePlus',
  images: [
    'https://rukminid2.flixcart.com/image/850/1000/xif0q/mobile/z/y/i/-original-imagy5wg4pqpymyh.jpeg?q=90&crop=false'
  ],
  specifications: {
    'Screen Size': '6.7 inch',
    'Storage': '256GB',
    'RAM': '16GB',
    'Camera': '50MP Triple Camera',
    'Battery': '5000 mAh',
    'OS': 'OxygenOS (Android 14)'
  },
  features: [
    '120Hz AMOLED',
    'Snapdragon 8 Gen 2',
    'Fast Charging 100W',
    'Gorilla Glass Victus'
  ],
  inStock: true,
  seller: 'OnePlus India'
},
{
  id: '19',
  title: 'boAt Airdopes 441',
  description: 'Wireless earbuds with immersive sound and long battery life.',
  price: 1599,
  originalPrice: 2999,
  discount: 47,
  rating: 4.2,
  reviewCount: 2341,
  category: 'electronics',
  brand: 'boAt',
  images: [
    'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Battery: '25 hours total',
    Type: 'TWS',
    Connectivity: 'Bluetooth 5.0'
  },
  features: [
    'IPX7 Waterproof',
    'Touch Controls',
    'Dual Mic Support'
  ],
  inStock: true,
  seller: 'boAt Lifestyle'
},
{
  id: '20',
  title: 'HP Pavilion 14 i5 12th Gen',
  description: 'Portable laptop with 14" FHD display and Intel Core i5.',
  price: 62999,
  originalPrice: 68999,
  discount: 9,
  rating: 4.3,
  reviewCount: 629,
  category: 'electronics',
  brand: 'HP',
  images: [
    'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Processor: 'Intel Core i5 12th Gen',
    RAM: '16GB',
    Storage: '512GB SSD',
    Display: '14 inch FHD',
    OS: 'Windows 11'
  },
  features: [
    'Backlit Keyboard',
    'Intel Iris Xe Graphics',
    'MS Office 2021'
  ],
  inStock: true,
  seller: 'HP India'
},
{
  id: '21',
  title: 'Mi 50 inch 4K Smart TV',
  description: 'Ultra HD LED Smart TV with Android TV and Dolby Vision.',
  price: 35999,
  originalPrice: 44999,
  discount: 20,
  rating: 4.4,
  reviewCount: 1883,
  category: 'electronics',
  brand: 'Xiaomi',
  images: [
    'https://rukminim2.flixcart.com/image/750/900/xif0q/television/4/n/x/-original-imagu4368g8vznua.jpeg?q=90&crop=false'
  ],
  specifications: {
    Size: '50 inch',
    Resolution: '4K UHD',
    OS: 'Android TV'
  },
  features: [
    'Dolby Vision',
    'PatchWall Interface',
    '20W Stereo Speakers'
  ],
  inStock: true,
  seller: 'Xiaomi India'
},
{
  id: '22',
  title: 'Canon EOS 200D DSLR Camera',
  description: 'Entry-level DSLR with Dual Pixel Autofocus and Wi-Fi.',
  price: 54999,
  originalPrice: 61999,
  discount: 11,
  rating: 4.5,
  reviewCount: 442,
  category: 'electronics',
  brand: 'Canon',
  images: [
    'https://in.canon/media/image/2019/04/09/cd7198fe980a4ed48be85ac376aec5d1_EOS+200D+MKII+BK+Front+Slant.png'
  ],
  specifications: {
    Sensor: '24.1MP APS-C',
    Lens: '18-55mm',
    Video: '1080p Full HD',
    Connectivity: 'Wi-Fi, Bluetooth'
  },
  features: [
    'Vari-Angle Touchscreen',
    'Live View Autofocus',
    'Lightweight Design'
  ],
  inStock: true,
  seller: 'Canon India'
},
{
  id: '23',
  title: 'Samsung Galaxy Watch 6',
  description: 'Smartwatch with fitness tracking, ECG, and Super AMOLED.',
  price: 27999,
  originalPrice: 31999,
  discount: 12,
  rating: 4.6,
  reviewCount: 589,
  category: 'electronics',
  brand: 'Samsung',
  images: [
    'https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-sm-r940nzkains-537406449?$684_547_PNG$'
  ],
  specifications: {
    Display: '1.5 inch Super AMOLED',
    Battery: '40 hours',
    OS: 'Wear OS'
  },
  features: [
    'Fitness & Sleep Tracking',
    'ECG Sensor',
    'Wireless Charging'
  ],
  inStock: true,
  seller: 'Samsung India'
},
{
  id: '24',
  title: 'JBL Flip 6 Bluetooth Speaker',
  description: 'Portable party speaker with punchy bass and IP67 waterproof.',
  price: 8999,
  originalPrice: 10999,
  discount: 18,
  rating: 4.7,
  reviewCount: 762,
  category: 'electronics',
  brand: 'JBL',
  images: [
    'https://images.pexels.com/photos/6387822/pexels-photo-6387822.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Battery: '12 hours',
    Connectivity: 'Bluetooth 5.1',
  },
  features: [
    'Bold Sound',
    'Waterproof Design',
    'PartyBoost Compatible'
  ],
  inStock: true,
  seller: 'JBL Official'
},
{
  id: '25',
  title: 'Amazon Kindle Paperwhite (11th Gen)',
  description: 'E-reader with adjustable warm light and 6.8-inch display.',
  price: 13999,
  originalPrice: 15999,
  discount: 13,
  rating: 4.8,
  reviewCount: 1095,
  category: 'electronics',
  brand: 'Amazon',
  images: [
    'https://images-cdn.ubuy.co.in/659d9c11fd55da5c303ba0d7-amazon-kindle-paperwhite-signature.jpg'
  ],
  specifications: {
    Display: '6.8 inch',
    Storage: '16GB',
    Battery: 'Up to 10 weeks'
  },
  features: [
    'Glare-free screen',
    'Waterproof (IPX8)',
    'Adjustable Warm Light'
  ],
  inStock: true,
  seller: 'Amazon India'
},
{
  id: '26',
  title: 'Maybelline Fit Me Matte + Poreless Foundation',
  description: 'Lightweight matte foundation for normal to oily skin.',
  price: 549,
  originalPrice: 799,
  discount: 31,
  rating: 4.4,
  reviewCount: 1293,
  category: 'beauty',
  brand: 'Maybelline',
  images: [
    'https://images.pexels.com/photos/3373742/pexels-photo-3373742.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Shade: '128 Warm Nude',
    Volume: '30ml',
    SkinType: 'Oily/Normal'
  },
  features: [
    'Blends effortlessly',
    'Controls shine',
    'Dermatologist tested'
  ],
  inStock: true,
  seller: 'Maybelline Official'
},
{
  id: '27',
  title: 'Lakmé Eyeconic Kajal - Deep Black',
  description: 'Long-lasting, smudge-proof kajal for defined eyes.',
  price: 180,
  originalPrice: 210,
  discount: 14,
  rating: 4.5,
  reviewCount: 876,
  category: 'beauty',
  brand: 'Lakmé',
  images: [
    'https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&w=500'
  ],
  specifications: {
    Type: 'Twist-up pencil',
    WearTime: '22 hours',
    Color: 'Black'
  },
  features: [
    'Waterproof',
    'Smudge-resistant',
    'No sharpening needed'
  ],
  inStock: true,
  seller: 'Lakmé Store'
},
{
  id: '28',
  title: 'Mamaearth Vitamin C Face Wash',
  description: 'Brightening face wash with turmeric and Vitamin C.',
  price: 249,
  originalPrice: 299,
  discount: 17,
  rating: 4.3,
  reviewCount: 642,
  category: 'beauty',
  brand: 'Mamaearth',
  images: [
    'https://m.media-amazon.com/images/I/518ZS9ul64L._AC_.jpg'
  ],
  specifications: {
    SkinType: 'All',
    Volume: '100ml',
    Ingredients: 'Vitamin C, Turmeric'
  },
  features: [
    'SLS & Paraben free',
    'Natural glow booster',
    'Dermatologically tested'
  ],
  inStock: true,
  seller: 'Mamaearth India'
},
{
  id: '29',
  title: 'L’Oréal Paris Total Repair 5 Shampoo',
  description: 'Nourishing shampoo for damaged hair with 5 benefits.',
  price: 359,
  originalPrice: 449,
  discount: 20,
  rating: 4.4,
  reviewCount: 533,
  category: 'beauty',
  brand: 'L’Oréal',
  images: [
    'https://assets.ajio.com/medias/sys_master/root/20241129/LGrJ/6749c0c70f47f80c87bab818/-1117Wx1400H-4906424090-340-MODEL6.jpg'
  ],
  specifications: {
    HairType: 'All',
    Volume: '340ml',
    Benefits: 'Damage repair, Strength, Shine'
  },
  features: [
    'Ceramide technology',
    'Hair fiber reinforcement',
    'Reduces split ends'
  ],
  inStock: true,
  seller: 'L’Oréal India'
},
{
  id: '30',
  title: 'The Face Shop Sheet Mask Pack (Set of 5)',
  description: 'Hydrating and brightening sheet masks with natural extracts.',
  price: 499,
  originalPrice: 699,
  discount: 29,
  rating: 4.6,
  reviewCount: 714,
  category: 'beauty',
  brand: 'The Face Shop',
  images: [
    'https://thefaceshop.in/cdn/shop/files/MicrosoftTeams-image_8_fcb30472-4406-411d-ab2a-36cb1749aefa.jpg?v=1744369753&width=1500'
  ],
  specifications: {
    Pack: '5 masks',
    Ingredients: 'Rice, Aloe, Lemon, Pomegranate, Tea Tree',
    Usage: 'Single use per mask'
  },
  features: [
    'Soothing and hydrating',
    'Dermatologically tested',
    'K-Beauty product'
  ],
  inStock: true,
  seller: 'The Face Shop India'
},
{
  id: '31',
  title: 'Atomic Habits',
  description: 'An easy & proven way to build good habits and break bad ones.',
  price: 499,
  originalPrice: 799,
  discount: 38,
  rating: 4.9,
  reviewCount: 3200,
  category: 'books',
  brand: 'Penguin',
  images: [
    'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg'
  ],
  specifications: {
    Author: 'James Clear',
    Pages: '320',
    Language: 'English',
    Publisher: 'Penguin Random House',
    Format: 'Paperback'
  },
  features: [
    'Build better habits',
    'Science-based approach',
    'Actionable advice',
    'Bestseller'
  ],
  inStock: true,
  seller: 'BookStore'
},
{
  id: '32',
  title: 'The Alchemist',
  description: 'A journey of dreams, self-discovery, and destiny.',
  price: 299,
  originalPrice: 499,
  discount: 40,
  rating: 4.7,
  reviewCount: 2100,
  category: 'books',
  brand: 'HarperOne',
  images: [
    'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg'
  ],
  specifications: {
    Author: 'Paulo Coelho',
    Pages: '208',
    Language: 'English',
    Publisher: 'HarperOne',
    Format: 'Paperback'
  },
  features: [
    'Inspirational story',
    'Global bestseller',
    'Translated in 80+ languages'
  ],
  inStock: true,
  seller: 'Classic Reads'
},
{
  id: '33',
  title: 'Think and Grow Rich',
  description: 'The timeless guide to success and financial freedom.',
  price: 350,
  originalPrice: 499,
  discount: 30,
  rating: 4.6,
  reviewCount: 1800,
  category: 'books',
  brand: 'FingerPrint',
  images: [
    'https://books.google.co.in/books/publisher/content?id=t6epDQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1RAXgdMx7EXFA0QbAferLBmWmSqA&w=1280'
  ],
  specifications: {
    Author: 'Napoleon Hill',
    Pages: '320',
    Language: 'English',
    Publisher: 'FingerPrint Publishing',
    Format: 'Paperback'
  },
  features: [
    'Success strategies',
    'Financial mindset',
    'Motivational read'
  ],
  inStock: true,
  seller: 'Readers Paradise'
},
{
  id: '34',
  title: 'The Psychology of Money',
  description: 'Timeless lessons on wealth, greed, and happiness.',
  price: 420,
  originalPrice: 699,
  discount: 40,
  rating: 4.8,
  reviewCount: 2450,
  category: 'books',
  brand: 'Jaico',
  images: [
    'https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg'
  ],
  specifications: {
    Author: 'Morgan Housel',
    Pages: '256',
    Language: 'English',
    Publisher: 'Jaico Publishing House',
    Format: 'Paperback'
  },
  features: [
    'Personal finance insights',
    'Behavioral economics',
    'Bestselling finance book'
  ],
  inStock: true,
  seller: 'Finance Books'
},
{
  id: '35',
  title: 'Wings of Fire',
  description: 'Autobiography of Dr. A.P.J. Abdul Kalam, former President of India.',
  price: 299,
  originalPrice: 399,
  discount: 25,
  rating: 4.9,
  reviewCount: 3721,
  category: 'books',
  brand: 'Universities Press',
  images: [
    'https://books.google.co.in/books/content?id=c3qmIZtWUjAC&pg=PA5&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0M-7L3elOSlyTroC2dMHlNTsU7XQ&w=1280'
  ],
  specifications: {
    Author: 'Dr. A.P.J. Abdul Kalam',
    Pages: '180',
    Language: 'English',
    Format: 'Paperback'
  },
  features: [
    'Inspirational story',
    'National bestseller',
    'Ideal for students'
  ],
  inStock: true,
  seller: 'Universities Press'
}

];