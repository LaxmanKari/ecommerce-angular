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
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'TIMEWEAR Analog Day Date Functioning Stainless Steel Chain Watch for Men',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  },
  {
    productId: '123',
    productName: 'Watch',
    productOwner: usersDatabase[0],
    productDescription: 'Stylish watch',
    productPrice: 2500,
    // productImage: "src\assets\watch-olves.jpg",
    productCondition: "New",
    productCategory: "watch"
  }
]
