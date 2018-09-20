import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
