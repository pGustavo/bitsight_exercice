import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@app/home/home.component';
import {UserService} from '@app/services/user.service';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: '**',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserService]
})
export class HomeRoutingModule {
}
