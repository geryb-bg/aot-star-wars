import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Question, Image } from "app/quizz-map";

@Injectable()
export class QuizzService {

  constructor(private http: Http) { }

  getQuestions(): Observable<Question[]> {
      return this.http.get("assets/questions.json")
          .map(response => <Question[]>response.json().questions);
  }

  getImage(id: number): Observable<Image> {
    return this.http.get("assets/questions.json")
          .map(response => {
            let data = response.json();
            return data.images.filter((item) => item.id === id)[0];
          });
  }

}
