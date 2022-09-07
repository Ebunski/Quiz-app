export const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];
export const difficulty = ["easy", "medium", "hard"];

const data = {
  response_code: 0,
  results: [
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which of these levels does NOT appear in the console/PC versions of the game &quot;Sonic Generations&quot;?",
      correct_answer: "Mushroom Hill",
      incorrect_answers: ["City Escape", "Planet Wisp", "Sky Sanctuary"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "easy",
      question: "Who plays Alice in the Resident Evil movies?",
      correct_answer: "Milla Jovovich",
      incorrect_answers: ["Madison Derpe", "Milla Johnson", "Kim Demp"],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question: "In what year was Hearthstone released?",
      correct_answer: "2014",
      incorrect_answers: ["2011", "2013", "2012"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital of Belarus?",
      correct_answer: "Minsk",
      incorrect_answers: ["Warsaw", "Kiev", "Vilnius"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "In what year was McDonald&#039;s founded?",
      correct_answer: "1955",
      incorrect_answers: ["1964", "1951", "1947"],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which franchise was NOT featured in the 2015 video game &quot;Lego Dimensions&quot;?",
      correct_answer: "Breaking Bad",
      incorrect_answers: ["Portal", "Doctor Who", "Back to the Future"],
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "hard",
      question:
        "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
      correct_answer: "Dog Blood",
      incorrect_answers: ["Jack &Uuml;", "What So Not", "Noisia"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question:
        "In 1845, a series of wars named after which indigenous people began in New Zealand?",
      correct_answer: "Māori",
      incorrect_answers: ["Papuans", "Aborigines", "Polynesians"],
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these is not a world in the anime &quot;Buddyfight&quot;?",
      correct_answer: "Ancient Dragon World",
      incorrect_answers: [
        "Dragon World",
        "Star Dragon World",
        "Darkness Dragon World",
      ],
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "hard",
      question: "Where was Nicki Minaj born?",
      correct_answer: "Trinidad and Tobago",
      incorrect_answers: ["Haiti", "Saint Lucia", "Grenada"],
    },
  ],
};
