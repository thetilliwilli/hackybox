import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-pager',
  templateUrl: './table-pager.component.html',
})
export class TablePagerComponent implements OnInit, OnChanges {
  @Input() public pageCount: number = 0;
  @Input() public pageIndex: number = 0;

  public get currentPage(): number {
    return this.pageIndex + 1;
  }

  @Output() public pageIndexChanged = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public changePageIndex(pageIndex: number): void {
    this.pageIndexChanged.emit(pageIndex);
  }
  public ngOnChanges(changes: SimpleChanges): void {
    if ("pageCount" in changes)
      this.pageCount = changes["pageCount"].currentValue;
  }
}
