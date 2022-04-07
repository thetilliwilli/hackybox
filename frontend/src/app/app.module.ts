import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtocolHandlerToolModule } from './tool/protocol-handler/protocol-handler-tool.module';
import { MemfindToolModule } from './tool/memfind-tool/memfind-tool.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProtocolHandlerToolModule,
    MemfindToolModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }