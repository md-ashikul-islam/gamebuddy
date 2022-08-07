import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ashik',
      email: 'ashikul005@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ruku',
      email: 'rukaiyamaymuna@gmail.com',
      password: bcrypt.hashSync('696969'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Asus RA05 TUF Gaming K3 RGB Mechanical Keyboard',
      slug: 'asus-ra05-tug-gaming-k3-rgb-mechanical-keyboard',
      category: 'Keyboards',
      image: '/images/p1.jpg',
      price: 6500,
      countInStock: 5,
      brand: 'Asus',
      rating: 4.5,
      numReviews: 10,
      description:
        'Asus TUF Gaming K3 RGB Mechanical Keyboard comes with Tactile TUF Gaming switches with reliable performance',
    },
    {
      name: 'Corsair K95 RGB Platinum Mechanical Gaming Keyboard',
      slug: 'corsair-k95-rgb-platinum-mechanical-gaming-keyboard',
      category: 'Keyboards',
      image: '/images/p2.jpg',
      price: 16000,
      countInStock: 7,
      brand: 'Corsair',
      rating: 4.8,
      numReviews: 19,
      description:
        'CORSAIR K95 RGB PLATINUM features CHERRYÂ® MX Speed keyswitches backed by a lightweight aluminum frame.',
    },
    {
      name: 'The Last of Us Part II for PS4 and PS5',
      slug: 'the-last-of-us-part-ii-for-ps4-and-ps5',
      category: 'Games',
      image: '/images/p3.jpg',
      price: 3500,
      countInStock: 12,
      brand: 'Sony',
      rating: 4.7,
      numReviews: 11,
      description:
        'The Last of Us Part II is an action-adventure survival horror video game developed by Naughty Dog and published By Sony Interactive Entertainment.',
    },
    {
      name: 'Razer Raiju Ultimate PS4 Controller',
      slug: 'razer-raiju-ultimate-ps4-controller',
      category: 'Controller',
      image: '/images/p4.jpg',
      price: 20500,
      countInStock: 3,
      brand: 'Razer',
      rating: 4.7,
      numReviews: 11,
      description:
        'Razer Raiju Ultimate PS4 Controller features both Bluetooth and wired connection.',
    },
  ],
};

export default data;
