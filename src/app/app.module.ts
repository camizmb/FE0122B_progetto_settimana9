import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompletedComponent } from './completed/completed.component';
import { TodoComponent } from './todo/todo.component';


const routes : Route[] = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletedComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
