import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandlersTableComponent } from './tool/protocol-handler/component/handlers-table/handlers-table.component';
import { ProtocolHandlerToolModule } from './tool/protocol-handler/protocol-handler-tool.module';
import { MemfindComponent } from './tool/memfind/memfind.component';
import { ProtocolHandlerToolComponent } from './tool/protocol-handler/component/protocol-handler-tool/protocol-handler-tool.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MemfindComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProtocolHandlerToolModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "memfind", component: MemfindComponent },
      { path: "protocol-handlers", component: ProtocolHandlerToolComponent },
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }