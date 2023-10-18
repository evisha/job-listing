import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './profile.component';
import {NgModule} from "@angular/core";
import {ListingComponent} from "./listing/listing.component";
import {AppAuthGuard, RolesGuard} from "../../../../auth/data-access/src/lib/services/auth-guard";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
      children: [
        { path: 'add',
          component: ListingComponent,
          canActivate: [RolesGuard,
            AppAuthGuard]
        },
      ],
    canActivate: [AppAuthGuard],
  },
  {
    path: 'add',
    component: ListingComponent
  },
  {
    path: 'edit/:slug',
    component: ListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutesModule { }


