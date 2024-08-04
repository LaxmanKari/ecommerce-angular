export interface loggedInUser {
  userEmail: string;
  userPassword: string;
}

export interface registerUser {
  userName: string;
  userEmail: string;
  userPassword: string;
  confirmUserPassword: string;
}

export interface user {
  userName: string;
  userEmail: string;
  userPasswordHash: string;
  userProfilePicture?: string;
  userPhoneNumber?: string;
  role: string;
  userProducts?: string[];
  userCart?: string[];
  userPurchases?: string[];
  userProductSales?: string[];
  userProductTrades?: string[];
  userProductWishList?: string[];
  userProductReview?: review[];
  userNotifications?: [];
  userSettings?: [];
  userCreatedAt?: string;
  userUpdatedAt?: string;
}

export interface product {
  productId: string;
  productName: string;
  productOwner: string;
  productDescription: string;
  productPrice: number;
  productImage?: string;
  productReviews?: review[];
  productCondition: string;
  productCategory: string;
  productDateAdded: string;
}

export interface filter {
  sortBy: string;
  category: string;
  priceRange: string;
}

export interface review {
  reviewId: string;
  productId: string;
  rating: number;
  comment: string;
  reviewerId: number;
  revieweeId: number;
}
