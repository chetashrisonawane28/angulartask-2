import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailidComponent } from './emailid/emailid.component';
import { PhonenoComponent } from './phoneno/phoneno.component';

const routes: Routes = [
  {path:"phone", component:PhonenoComponent},
  {path:"email", component:EmailidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
