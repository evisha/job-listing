import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {FeatureAuthModule} from "../../../../libs/feature-auth/src/lib/auth.module";
import {AuthenticationRoutingModule} from "../../../../libs/feature-auth/src/lib/auth-routes.module";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {FooterComponent} from "./layout/footer/footer.component";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, FooterComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FeatureAuthModule,
    AuthenticationRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
