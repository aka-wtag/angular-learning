import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { SubscribeService } from './services/subscribe.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent, GreetComponent],
  imports: [BrowserModule],
  providers: [SubscribeService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
