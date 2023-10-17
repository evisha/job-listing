import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {articleListFeature} from "./data-access/src";

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({ rootState: articleListFeature }),],
  declarations: []
})
export class JobsModule {}
