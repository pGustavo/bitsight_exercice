import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {GitService} from '@app/services/git.service';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from '@app/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomeComponent, LoaderComponent],
  providers: [GitService],
  entryComponents: [LoaderComponent]
})
export class HomeModule { }
