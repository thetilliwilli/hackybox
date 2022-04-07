import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProtocolHandler } from '../../domain/protocol-handler';
import { HandlersProviderService } from '../../service/handlers.service';

@Component({
  selector: 'handlers-table',
  templateUrl: './handlers-table.component.html',
})
export class HandlersTableComponent implements OnInit, OnDestroy {
  private _filterValue: string = "";
  private _subscription?: Subscription;
  public get filterValue(): string {
    return this._filterValue;
  }
  public set filterValue(value: string) {
    this._filterValue = value;

    this.filteredHandlers = this.handlers.filter(x => `${x.protocol}${x.key}${x.command}`.toLowerCase().includes(this._filterValue.toLowerCase()));
  }

  private _url: string = "//";
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;

    this.filteredHandlers = this.filteredHandlers.slice();
  }

  public resetUrl() {
    this.url = "//" + this.url;
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
}
