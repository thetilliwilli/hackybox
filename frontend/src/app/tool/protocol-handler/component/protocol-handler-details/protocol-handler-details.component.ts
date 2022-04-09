import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProtocolHandler } from '../../domain/protocol-handler';
import { HandlerService } from '../../service/handlers.service';

@Component({
  selector: 'app-protocol-handler-details',
  templateUrl: './protocol-handler-details.component.html',
})
export class ProtocolHandlerDetailsComponent implements OnInit {
  public title = "";
  public handler: ProtocolHandler | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _handlerService: HandlerService,
  ) { }

  ngOnInit(): void {
    const handlerProtocol = this._activatedRoute.snapshot.paramMap.get("id");

    this._handlerService.getHandlers().subscribe({
      next: handlers => {
        this.handler = handlers.find(x => x.protocol === handlerProtocol);
      },
    });

    this.title = handlerProtocol + "";
  }

}
