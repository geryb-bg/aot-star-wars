import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { QuizzService } from "app/quizz.service";
import { Image } from "app/quizz-map";

@Component({
  selector: 'app-results-view',
  templateUrl: 'results-view.component.html',
  styleUrls: ['results-view.component.css']
})
export class ResultsViewComponent implements OnInit {
  image: Image;

  constructor(private quizzService: QuizzService, private route: ActivatedRoute) {
    this.image = new Image();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.quizzService.getImage(+params['id']))
      .subscribe(data => this.image = data);
  }

}
