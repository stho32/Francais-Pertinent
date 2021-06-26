import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionMotComponent } from './question-mot/question-mot.component';
import { QuestionReponseComponent } from './question-reponse/question-reponse.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionMotComponent,
    QuestionReponseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
