import { NgModule } from '@angular/core';
import { TodosComponent } from '../app/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component'

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
