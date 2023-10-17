import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  providers: [],
  declarations: [ProfileComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class FeatureProfileModule {}
