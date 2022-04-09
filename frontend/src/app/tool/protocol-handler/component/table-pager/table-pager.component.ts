import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pager',
  templateUrl: './table-pager.component.html',
})
export class TablePagerComponent implements OnInit {
  public pageIndex: number = 0;
  public pageCount: number = 0;

  ngOnInit(): void {
  }

}
