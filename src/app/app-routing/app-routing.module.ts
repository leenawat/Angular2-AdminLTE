// import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
// import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
// import { AdminComponent } from './../admin/admin.component';
// import { JhosComponent } from './../jhos/jhos.component';
// import { JhosContentComponent } from './../jhos/jhos-content/jhos-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
    ], {useHash: true})
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
