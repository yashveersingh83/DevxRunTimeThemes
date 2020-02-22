import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  heroes :Hero[]
  constructor( private service:DashboardService) { }

  ngOnInit() {

    this.service.getHeroes()
    .subscribe(heroes => (this.heroes = heroes));
  }

}
