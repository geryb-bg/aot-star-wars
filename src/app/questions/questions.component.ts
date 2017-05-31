import { Component, OnInit } from '@angular/core';
import { QuizzService } from "app/quizz.service";
import { Question, Image } from "app/quizz-map";
import { Router } from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css']
})
export class QuestionsComponent implements OnInit {
  currentQuestion: Question;
  
  allQuestions: Question[];
  
  constructor (private quizzService: QuizzService, private router: Router) {
    this.currentQuestion = new Question();
  }
  
  ngOnInit() {
    this.quizzService.getQuestions().subscribe((data) => {
      this.allQuestions = data;

      this.getQuestion(1);
    });
  }

  public answerSelected(answer: string) {
    if (answer === "yes") {
      if (this.currentQuestion.yesAnswerId) {
        this.getQuestion(this.currentQuestion.yesAnswerId);
      } else {
        this.goToResult(this.currentQuestion.yesImageId);
      }
    } else {
      if (this.currentQuestion.noAnswerId) {
        this.getQuestion(this.currentQuestion.noAnswerId);
      } else {
        this.goToResult(this.currentQuestion.noImageId);
      }
    }
  }

  private getQuestion(id: number) {
    this.currentQuestion = this.allQuestions.filter((item) => item.id === id)[0];
  }

  private goToResult(id: number) {
    this.router.navigateByUrl("/results/" + id)
  }
}
