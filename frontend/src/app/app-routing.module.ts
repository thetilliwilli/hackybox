import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemfindComponent } from './tool/memfind-tool/component/memfind.component';
import { RestrictedToolGuardGuard } from './tool/memfind-tool/guard/restricted-tool-guard.guard';
import { ProtocolHandlerDetailsComponent } from './tool/protocol-handler/component/protocol-handler-details/protocol-handler-details.component';
import { ProtocolHandlerToolComponent } from './tool/protocol-handler/component/protocol-handler-tool/protocol-handler-tool.component';

const routes: Routes = [
  { path: "memfind", canActivate: [RestrictedToolGuardGuard], component: MemfindComponent },
  { path: "protocol-handlers", component: ProtocolHandlerToolComponent },
  { path: "protocol-handlers/:id", component: ProtocolHandlerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
