import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@app/home/home.component';
import {GitService} from '@app/services/git.service';

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
  providers: [GitService]
})
export class HomeRoutingModule {
}
