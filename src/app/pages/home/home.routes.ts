import { Routes } from '@angular/router';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { WishlistComponent } from '../../shared/components/wishlist/wishlist.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { InventoryComponent } from '../../shared/components/inventory/inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';
import { NewProductComponent } from './new-product/new-product.component';

export const homeRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'add',
    component: NewProductComponent
  }
];
