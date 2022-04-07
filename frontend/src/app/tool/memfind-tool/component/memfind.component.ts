import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memfind',
  templateUrl: './memfind.component.html',
})
export class MemfindComponent implements OnInit {
  public title = "Memfind tool";
  public args: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
