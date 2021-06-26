import { Component } from '@angular/core';
import { Question, Reponse, questions } from './des-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Francais-Pertinent';
  questions = questions;
  currentQuestion = 0;
  question = questions[this.currentQuestion];

  prochaineQuestion() {
    this.currentQuestion += 1;
    this.question = questions[this.currentQuestion];
  }

  valider() {
    alert(this.question.reponses[0].selectionne);
  }
}
