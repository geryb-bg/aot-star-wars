import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuizzService } from "app/quizz.service";
import { AppRoutingModule } from "app/app-routing/app-routing.module";
import { ResultsViewComponent } from './results-view/results-view.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsViewComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [QuizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
