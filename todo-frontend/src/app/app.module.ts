import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FooterComponent,
    CreateTodoComponent,
    CompletedTodosComponent,
    UpdateTodoComponent,
    ViewTodoComponent,
    DigitalClockComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
