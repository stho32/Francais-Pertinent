import { Component, OnInit } from '@angular/core';
import { Question, Reponse, questions } from '../des-questions';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-mot',
  templateUrl: './question-mot.component.html',
  styleUrls: ['./question-mot.component.css']
})
export class QuestionMotComponent implements OnInit {
  @Input() question!: Question;

  constructor() { }

  ngOnInit(): void {
  }

}


