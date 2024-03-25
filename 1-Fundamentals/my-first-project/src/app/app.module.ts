import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: ServerComponent },
  { path: '', redirectTo: 'Server', pathMatch: 'full' },
  { path: 'Server', component: ServerComponent },
  { path: 'Servers', component: ServersComponent },
];

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
