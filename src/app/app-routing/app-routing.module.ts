import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from "app/questions/questions.component";
import { ResultsViewComponent } from "app/results-view/results-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/question',
    pathMatch: 'full'
  },
  {
    path: 'question',
    component: QuestionsComponent
  },
  {
    path: 'results/:id',
    component: ResultsViewComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
