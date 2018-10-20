import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NavComponent } from "./nav/nav.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "nav", component: NavComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "about", component: AboutComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent }
];

export function ErrorHandler(error: any) {
  console.log(error.stack);
}

export const routing = RouterModule.forRoot(routes, {
  errorHandler: ErrorHandler
});

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {}
