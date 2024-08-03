import { type product, type user } from '../models/app.models';

export const usersDatabase: user[] = [
  {
    userName: 'Kari Laxman',
    userEmail: 'kalaxman@hasedIn.com',
    userPasswordHash: 'password',
    userProfilePicture: '',
    role: 'user',
  },
  {
    userName: 'Kari',
    userEmail: 'k',
    userPasswordHash: 'pa',
    userProfilePicture: '',
    role: 'user',
  },
  {
    userName: 'Kari Ramani',
    userEmail: 'ramani@hasedIn.com',
    userPasswordHash: 'password',
    userProfilePicture: '',
    role: 'user',
  },
  {
    userName: 'Kari Hardeep',
    userEmail: 'hardeep@hasedIn.com',
    userPasswordHash: 'password',
    userProfilePicture: '',
    role: 'user',
  },
  {
    userName: 'Pavan Sagi',
    userEmail: 'pavansagi@hasedIn.com',
    userPasswordHash: 'password',
    userProfilePicture: '',
    role: 'user',
  },
];

export const products: product[] = [
  {
    productId: '1',
    productName: 'Watch-1',
    productOwner: usersDatabase[0],
    productDescription: 'TIMEWEAR Analog Day Date Functioning Stainless Steel Chain Watch for Men',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '12',
    productName: 'Watch-12',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '13',
    productName: 'Watch-13',
    productOwner: usersDatabase[1],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '10',
    productName: 'Watch-10',
    productOwner: usersDatabase[1],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '23',
    productName: 'Watch-23',
    productOwner: usersDatabase[2],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '33',
    productName: 'Watch-33',
    productOwner: usersDatabase[2],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '321',
    productName: 'Watch-321',
    productOwner: usersDatabase[3],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '145',
    productName: 'Watch-145',
    productOwner: usersDatabase[3],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '50',
    productName: 'Watch-50',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '90',
    productName: 'Watch-90',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  }
]
