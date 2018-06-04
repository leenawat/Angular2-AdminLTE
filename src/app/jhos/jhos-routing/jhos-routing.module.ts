import { JhosContentComponent} from './../jhos-content/jhos-content.component';
import { JhosComponent } from './../jhos.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forChild([
      {
        path: 'jhos',
        component: JhosComponent,
        children: [
          // {
          //   path: '',
          //   redirectTo: 'home',
          //   pathMatch: 'full'
          // },
          {
            path: '',
            component: JhosContentComponent
          },
        //   {
        //     path: 'dashboard2',
        //     component: AdminDashboard2Component
        //   }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
  // ,
  // declarations: []
})
export class JhosRoutingModule { }
