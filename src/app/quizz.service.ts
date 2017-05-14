import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { QuizzMap } from "app/quizz-map";

@Injectable()
export class QuizzService {

  constructor(private http: Http) { }

  getQuizz(): Observable<QuizzMap> {
      return this.http.get("assets/questions.json")
          .map(response => <QuizzMap>response.json());
  }

}
