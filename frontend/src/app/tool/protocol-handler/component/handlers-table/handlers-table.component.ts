import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProtocolHandler } from '../../domain/protocol-handler';
import { HandlersProviderService } from '../../service/handlers.service';

@Component({
  selector: 'handlers-table',
  templateUrl: './handlers-table.component.html',
})
export class HandlersTableComponent implements OnInit, OnDestroy {
  private _subscription?: Subscription;
  private _filterValue: string = "";
  public get filterValue(): string {
    return this._filterValue;
  }
  public set filterValue(value: string) {
    this._filterValue = value;
    this.updateFilteredHandlers();
    this.updatePageCount();
  }

  private _url: string = "//";
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
    this.updateFilteredHandlers();
  }

  public resetUrl() {
    this.url = "//" + this.url;
  }

  private _count: number = 10;
  public get count(): number {
    return this._count;
  }
  public set count(value: number) {
    this._count = Number.parseInt(value as any); // input element returns a string as value
    this.updatePageCount();
  }

  public pageCount: number = 0;
  private updatePageCount(): void {
    this.pageCount = Math.ceil(this.filteredHandlers.length / this.count);
    this.updatePageHandlers()
  }

  private _pageIndex = 0;
  public get pageIndex() {
    return this._pageIndex;
  }
  public set pageIndex(value) {
    this._pageIndex = value;
    this.updatePageHandlers()
  }

  public allHandlers: ProtocolHandler[] = [];
  public filteredHandlers: ProtocolHandler[] = [];
  public pageHandlers: ProtocolHandler[] = [];

  constructor(
    private _handlersProviderService: HandlersProviderService,
  ) { }

  ngOnInit(): void {
    this._subscription = this._handlersProviderService.getHandlers().subscribe({
      next: x => {
        this.allHandlers = x;
        this.filteredHandlers = x;
        this.updatePageCount();
      },
      error: x => {
        console.error(x);
      },
    });
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }


  public maxCount(): void {
    this.count = this.filteredHandlers.length;
  }

  public onPageIndexChanged(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }

  private updateFilteredHandlers(): void {
    this.filteredHandlers = this.allHandlers
      .filter(x => `${x.protocol}${x.key}${x.command}`.toLowerCase().includes(this._filterValue.toLowerCase()));
  }

  private updatePageHandlers(): void {
    this.pageHandlers = this.filteredHandlers.slice(this.pageIndex * this.count, this.pageIndex * this.count + this.count);
  }
}
