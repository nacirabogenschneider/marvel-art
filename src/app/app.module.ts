import { HeroService } from './services/hero.service';
import {RouterModule} from '@angular/router'
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { AngularFireModule} from '@angular/fire' 
import { AngularFireDatabaseModule} from '@angular/fire/database' 
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { HttpClientModule } from '@angular/common/http';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { DetailsComponent } from './details/details.component';
import { NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    CardComponent,
    CardListComponent,
    UserprofileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path:'', 
        component: AppContentComponent
      },
      {
        path:'user/:userName', 
        component: UserprofileComponent
      },
              // {
              //   path:'user', 
              //   component: UserComponent
              // },
      {
        path:'hero/:id', 
        component: DetailsComponent
      },  
      // {
      //   path:'posts/:id', 
      //   component: PostDetailComponent
      // },
      // {
      //   path:'posts', 
      //   component: PostComponent
      // },
      

      {
        path:'**', 
        component: AppContentComponent
        //add a 404 Picture with navigation to Homepage
      }
    ])
    
    
  
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
