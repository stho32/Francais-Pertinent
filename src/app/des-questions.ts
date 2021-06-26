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
    reponses : Reponse[];
  }
  
  export const questions = [
    {
        id: 1,
        theme: "Avoir ou être",
        question: "Repondre en français: How old are you?",
        reponses: [
            {id: 1, text: "Je suis ...", correct: false, selectionne:false},
            {id: 2, text: "Je serai ...", correct: false, selectionne:false},
            {id: 3, text: "J'ai ...", correct: true, selectionne:false},
            {id: 4, text: "J'aurai ...", correct: false, selectionne:false}
        ]
    },
    {
        id: 2,
        theme: "Avoir ou être",
        question: "You have arrived at the destination.",
        reponses: [
            {id: 1, text: "Vous avez arrivé à destination.", correct: false, selectionne:false},
            {id: 2, text: "Tu as arrivé à destination.", correct: false, selectionne:false},
            {id: 3, text: "Vous etes arrivé à destination.", correct: true, selectionne:false},
            {id: 4, text: "Vous n'avez pas arrivé à destination.", correct: false, selectionne:false}
        ]
    },
    {
        id: 3,
        theme: "Avoir ou être",
        question: "'I went' in french is ...",
        reponses: [
            {id: 1, text: "J'ai allé.", correct: false, selectionne:false},
            {id: 2, text: "Je suis allé.", correct: true, selectionne:false}
        ]
    }
  ];
