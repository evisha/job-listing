import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './profile.component';
import {NgModule} from "@angular/core";
import {ListingComponent} from "./listing/listing.component";
import {AppAuthGuard, RolesGuard} from "../../../../auth/data-access/src/lib/services/auth-guard";


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AppAuthGuard]
    children: [
      { path: 'add', component: ListingComponent, canActivate: [RolesGuard, AppAuthGuard] },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutesModule { }


