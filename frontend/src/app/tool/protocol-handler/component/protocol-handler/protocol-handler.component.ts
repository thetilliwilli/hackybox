import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProtocolHandler } from '../../domain/protocol-handler';

@Component({
  selector: '[protocol-handler]',
  templateUrl: './protocol-handler.component.html',
})
export class ProtocolHandlerComponent implements OnInit {

  @Input()
  public index: number = 0;

  @Input()
  public url: string = "";

  @Input()
  public handler: ProtocolHandler = new ProtocolHandler("-", "-", "-");

  public get fullUrl(): string {
    return this.handler.protocol + ":" + this.url;
  }

  public get href(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(this.fullUrl);
  }

  constructor(
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

}
