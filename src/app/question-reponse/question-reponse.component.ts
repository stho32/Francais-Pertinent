import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Reponse } from '../des-questions';

@Component({
  selector: 'app-question-reponse',
  templateUrl: './question-reponse.component.html',
  styleUrls: ['./question-reponse.component.css']
})
export class QuestionReponseComponent implements OnInit {
  @Input() reponse!: Reponse;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChanged(newValue : boolean) {
    this.reponse.selectionne = newValue;
  }
}
