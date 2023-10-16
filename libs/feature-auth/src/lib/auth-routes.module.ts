import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent, RegisterComponent} from "@jobs-app/feature-auth";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthenticationModuleGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate: [AuthenticationModuleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
