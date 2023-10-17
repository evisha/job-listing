import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './profile.component';
import {NgModule} from "@angular/core";
import {AppAuthGuard} from "../../../../auth/data-access/src/lib/services/auth-guard";
import {ListingComponent} from "./listing/listing.component";


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AppAuthGuard]
    children: [
      { path: 'add', component: ListingComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutesModule { }


