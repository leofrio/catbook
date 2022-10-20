import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, AnimalsRoutingModule],
})
export class AnimalsModule {}
