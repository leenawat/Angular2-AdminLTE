import { JhosRoutingModule } from './jhos-routing/jhos-routing.module';
import { JhosComponent } from './jhos.component';
import { JhosContentComponent } from './jhos-content/jhos-content.component';
import { JhosFooterComponent } from './jhos-footer/jhos-footer.component';
import { JhosHeaderComponent } from './jhos-header/jhos-header.component';
import { JhosLeftSideComponent } from './jhos-left-side/jhos-left-side.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    JhosRoutingModule
  ],
  declarations: [
    JhosComponent,
    JhosContentComponent,
    JhosFooterComponent,
    JhosHeaderComponent,
    JhosLeftSideComponent
  ],
  exports: [JhosComponent]
})
export class JhosModule { }
