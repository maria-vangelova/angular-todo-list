import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { AboutComponent } from "./components/about/about.component";
import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
