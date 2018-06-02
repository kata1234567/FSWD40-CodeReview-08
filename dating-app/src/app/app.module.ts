import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlluserPageComponent } from './alluser-page/alluser-page.component';
import { MaleuserPageComponent } from './maleuser-page/maleuser-page.component';
import { FemaleuserPageComponent } from './femaleuser-page/femaleuser-page.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
{
  path: '', component: HomePageComponent
},
{
  path: 'alluser', component: AlluserPageComponent
},
{
  path: 'maleuser', component: MaleuserPageComponent
},
{
  path: 'femaleuser', component: FemaleuserPageComponent
},
];
export const firebaseConfig = {
  apiKey: "AIzaSyBQQ5KnIt3nWUcKIj49L8BrPvlPc4BoPgs",
  authDomain: "dating-app-d0d4c.firebaseapp.com",
  databaseURL: "https://dating-app-d0d4c.firebaseio.com",
  projectId: "dating-app-d0d4c",
  storageBucket: "dating-app-d0d4c.appspot.com",
  messagingSenderId: "635515927050"
};

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, HomePageComponent, AlluserPageComponent, MaleuserPageComponent, FemaleuserPageComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
