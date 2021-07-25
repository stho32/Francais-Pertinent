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

async function ajaxRequest(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

function QuestionLoading(callback: (questions: any) => void) {
  ajaxRequest("https://scaling-giggle-api.duckdns.org/training/cd46bbcc-764c-4ee4-b91f-4528e8f95604")
    .then((data) => 
    {
      callback(QuestionsReponsesAleatoires(data));
    },
    function() {
      console.log("something bad has happened!")
    });
}

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

function QuestionsReponsesAleatoires(desQuestion: any[]) {
  let resultat = [];

  resultat = shuffle(desQuestion);

  for (let i = 0; i < resultat.length; i++) {
    resultat[i].reponses = shuffle(resultat[i].reponses);
  }

  return resultat;
}

export const questionLoading = QuestionLoading;
