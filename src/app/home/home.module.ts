import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {UserService} from '@app/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from '@app/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomeComponent, LoaderComponent],
  providers: [UserService],
  entryComponents: [LoaderComponent]
})
export class HomeModule { }
