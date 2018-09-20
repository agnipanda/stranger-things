import { Routes,RouterOutlet } from "@angular/router"
import { ChatboxComponent } from "./app/chatbox/chatbox.component"
import { LoginComponent } from "./app/login/login.component"


export const appRoutes:Routes = [
  { path: "chatbox", component: ChatboxComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: 'full' }
];
