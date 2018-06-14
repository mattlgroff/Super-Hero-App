import { Router, Routes, RouterModule } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  { path: 'superheros/:hero', component: DetailsComponent }
];

@NgModule({
  declarations: [AppComponent, DetailsComponent, HeroesListComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
