import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolHandlerComponent } from './component/protocol-handler/protocol-handler.component';
import { HandlersTableComponent } from './component/handlers-table/handlers-table.component';
import { FormsModule } from '@angular/forms';
import { TrimShellOpenCommandPipe } from 'src/app/shared/trim-shell-open-command.pipe';
import { ProtocolHandlerToolComponent } from './component/protocol-handler-tool/protocol-handler-tool.component';

@NgModule({
  declarations: [
    HandlersTableComponent,
    ProtocolHandlerComponent,
    TrimShellOpenCommandPipe,
    ProtocolHandlerToolComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HandlersTableComponent,
    ProtocolHandlerComponent
  ],
})
export class ProtocolHandlerToolModule { }
