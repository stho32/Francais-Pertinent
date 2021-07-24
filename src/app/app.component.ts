import { Component } from '@angular/core';
import { Question, questionLoading } from './des-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Francais-Pertinent';
  questions = [];
  currentQuestion = 0;
  question : Question | undefined;

  myLoadingProcess = questionLoading((questionsFromAjax) => {
    this.questions = questionsFromAjax;
    this.question = this.questions[0];
    console.log("Loading complete! First question assigned!");
  });

  prochaineQuestion() {
    this.currentQuestion += 1;
    this.question = this.questions[this.currentQuestion];
  }

  valider() {
    let bonneReponse = true;

    if (this.question != undefined) {
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
}
