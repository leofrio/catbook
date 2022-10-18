import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
