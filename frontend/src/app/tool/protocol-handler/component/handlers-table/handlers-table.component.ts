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

  private _rangeQuery: string = "[0:10]*0+0";
  public get rangeQuery(): string {
    return this._rangeQuery;
  }

  public set rangeQuery(value: string) {
    this._rangeQuery = value;
    this.updateFilteredHandlers();
  }

  public handlers: ProtocolHandler[] = [];
  public filteredHandlers: ProtocolHandler[] = [];

  constructor(
    private _handlersProviderService: HandlersProviderService,
  ) { }

  ngOnInit(): void {
    this._subscription = this._handlersProviderService.getHandlers().subscribe({
      next: x => {
        this.handlers = x;
        this.filteredHandlers = x;
      },
      error: x => {
        console.error(x);
      },
    });
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }


  private updateFilteredHandlers(): void {
    const parts = this.rangeQuery.split(/[\[:\]*+]/).map(x => Number.parseInt(x)); //example [0:10]*2+3

    const from = Number.isNaN(parts[1]) ? 0 : parts[1];
    const to = Number.isNaN(parts[2]) ? Number.MAX_VALUE : parts[2];
    const pageIndex = Number.isNaN(parts[4]) ? 0 : parts[4];
    const offset = Number.isNaN(parts[5]) ? 0 : parts[5];
    const rangeCount = to - from;

    this.filteredHandlers = this.handlers
      .filter(x => `${x.protocol}${x.key}${x.command}`.toLowerCase().includes(this._filterValue.toLowerCase()))
      .slice(from + rangeCount * pageIndex + offset, to + rangeCount * pageIndex + offset);
  }
}
