import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListingComponent} from "./listing/listing.component";

@NgModule({
  providers: [],
  declarations: [ProfileComponent, ListingComponent],
  imports: [CommonModule, RouterModule,  FormsModule, ReactiveFormsModule ],
})
export class FeatureProfileModule {}
