import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-pager',
  templateUrl: './table-pager.component.html',
})
export class TablePagerComponent implements OnInit {
  @Input() public pageCount: number = 0;
  @Input() public pageIndex: number = 0;

  @Output() public pageIndexChanged = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public changePageIndex(pageIndex: number): void {
    this.pageIndexChanged.emit(pageIndex);
  }
}
