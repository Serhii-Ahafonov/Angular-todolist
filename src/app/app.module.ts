import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsDirective } from './forms.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { CountriesComponent } from './compomemts/countries/countries.component';
import { TemplateforComponent } from './components/templatefor/templatefor.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewFormComponent } from './components/new-form/new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    FormsComponent,
    FormsDirective,
    FilterPipe,
    CountriesComponent,
    TemplateforComponent,
    LoginFormComponent,
    NewFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
