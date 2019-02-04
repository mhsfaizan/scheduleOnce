import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';

const routes: Routes = [
  { path:'',redirectTo:"/home",pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'question-one',component:QuestionOneComponent},
  { path:'question-two',component:QuestionTwoComponent},
  { path:'question-three',component:QuestionThreeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
