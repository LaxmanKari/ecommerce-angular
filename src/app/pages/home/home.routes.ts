import { Routes } from '@angular/router';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { WishlistComponent } from '../../shared/components/wishlist/wishlist.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { InventoryComponent } from '../../shared/components/inventory/inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const homeRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
