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
    let bonneReponse = true;

    for (let i = 0; i < this.question.reponses.length; i++) {
      bonneReponse = bonneReponse &&
        ( this.question.reponses[i].selectionne == this.question.reponses[i].correct);
    }

    if ( bonneReponse ) {
      alert("Oui!");
      this.prochaineQuestion();
    } else {
      alert("Non!");
    }
  }
}
