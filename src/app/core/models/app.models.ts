export interface loggedInUser {
    userEmail: string,
    userPassword: string
}

export interface user {
    userName: string,
    userEmail: string,
    userPasswordHash: string, 
    userProfilePicture?: string,
    userPhoneNumber?: string,
    role: string,
    userProducts?: [string],
    userPurchases?: [string],
    userProductSales?: [string],
    userProductTrades?: [string],
    userProductWishList?: [string],
    userProductReview?: [review],
    userNotifications?: ["notification-object"],
    userSettings?: "can be an object",
    userCreatedAt?: string,
    userUpdatedAt?: string
}

export interface review {
    reviewId: string,
    productId: string,
    rating: number,
    comment: string,
    reviewerId: number,
    revieweeId: number
}