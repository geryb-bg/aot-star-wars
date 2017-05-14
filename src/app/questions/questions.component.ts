import { Component, OnInit } from '@angular/core';
import { QuizzService } from "app/quizz.service";
import { Question, Image, QuizzMap } from "app/quizz-map";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  currentQuestion: Question;
  currentImage: Image;
  
  quizzMap: QuizzMap;
  
  constructor (private quizzService: QuizzService) {
    this.currentQuestion = new Question();
  }
  
  ngOnInit() {
    this.quizzService.getQuizz().subscribe((data) => {
      this.quizzMap = data;

      this.getQuestion(1);
    });
  }

  public answerSelected(answer: string) {
    if (answer === "yes") {
      if (this.currentQuestion.yesAnswerId) {
        this.getQuestion(this.currentQuestion.yesAnswerId);
      }
    } else {
      if (this.currentQuestion.noAnswerId) {
        this.getQuestion(this.currentQuestion.noAnswerId);
      }
    }
  }

  private getQuestion(id: number) {
    this.currentQuestion = this.quizzMap.questions.filter((item) => item.id === id)[0];
  }
}
