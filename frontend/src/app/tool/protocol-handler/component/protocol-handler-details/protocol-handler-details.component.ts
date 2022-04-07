import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protocol-handler-details',
  templateUrl: './protocol-handler-details.component.html',
})
export class ProtocolHandlerDetailsComponent implements OnInit {
  public title = "";

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title = "Details of " + this._activatedRoute.snapshot.paramMap.get("id");
  }

}
