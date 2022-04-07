import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemfindComponent } from './component/memfind.component';

@NgModule({
  declarations: [
    MemfindComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class MemfindToolModule { }