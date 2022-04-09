import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemfindComponent } from './tool/memfind-tool/component/memfind.component';
import { RestrictedToolGuardGuard } from './tool/memfind-tool/guard/restricted-tool-guard.guard';
import { ProtocolHandlerDetailsComponent } from './tool/protocol-handler/component/protocol-handler-details/protocol-handler-details.component';
import { ProtocolHandlerToolComponent } from './tool/protocol-handler/component/protocol-handler-tool/protocol-handler-tool.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tool/memfind", canActivate: [RestrictedToolGuardGuard], component: MemfindComponent },
  { path: "tool/protocol-handlers", component: ProtocolHandlerToolComponent },
  { path: "tool/protocol-handlers/:id", component: ProtocolHandlerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
