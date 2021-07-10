export interface Reponse {
    id: number;
    text: string;
    correct: boolean;
    selectionne: boolean;
}

export interface Question {
    id: number;
    theme: string;
    question: string;
    reponses: Reponse[];
}

const tousDesQuestions = [
  {
    id: 1,
    theme: "Avoir ou Être",
    question: "Repondre en français: How old are you?",
    reponses: [
      { id: 1, text: "Je suis ...", correct: false, selectionne: false },
      { id: 2, text: "Je serai ...", correct: false, selectionne: false },
      { id: 3, text: "J'ai ...", correct: true, selectionne: false },
      { id: 4, text: "J'aurai ...", correct: false, selectionne: false }
    ]
  },
  {
    id: 2,
    theme: "Avoir ou Être",
    question: "You have arrived at the destination.",
    reponses: [
      { id: 1, text: "Vous avez arrivé à destination.", correct: false, selectionne: false },
      { id: 2, text: "Tu as arrivé à destination.", correct: false, selectionne: false },
      { id: 3, text: "Vous etes arrivé à destination.", correct: true, selectionne: false },
      { id: 4, text: "Vous n'avez pas arrivé à destination.", correct: false, selectionne: false }
    ]
  },
  {
    id: 3,
    theme: "Avoir ou Être",
    question: "'I went' in french is ...",
    reponses: [
      { id: 1, text: "J'ai allé.", correct: false, selectionne: false },
      { id: 2, text: "Je suis allé.", correct: true, selectionne: false }
    ]
  }
];

function shuffle(a : any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function QuestionsReponsesAleatoires() {
  let resultat = [];

  resultat = shuffle(tousDesQuestions);

  for (let i = 0; i < resultat.length; i++) {
    resultat[i].reponses = shuffle(resultat[i].reponses);
  }

  return resultat;
}


export const questions = QuestionsReponsesAleatoires();
