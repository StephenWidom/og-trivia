import Music from "./components/Music";
import Number from "./components/Number";
import Photo from "./components/Photo";
import Actors from "./components/Actors";
import Regular from "./components/Regular";

export const quiz = [
  {
    title: "Date with Dentistry",
    category: "Music",
    template: Music,
    description:
      "Name that tune! One point for guessing the artist and one point for the song title. Each song title includes a sweet treat!",
    prompts: [
      {
        file: "song01.mp3",
        artist: "DNCE",
        title: "Cake by the Ocean",
      },
      {
        file: "song02.mp3",
        artist: "System of a Down",
        title: "Sugar",
      },
      {
        file: "song03.mp3",
        artist: "Warrant",
        title: "Cherry Pie",
      },
      {
        file: "song04.mp3",
        artist: "Lizzo",
        title: "Juice",
      },
      {
        file: "song05.mp3",
        artist: "The Four Tops",
        title: "I Can't Help Myself (Sugar Pie, Honey Bunch)",
      },
      {
        file: "song06.mp3",
        artist: "Don McLean",
        title: "American Pie",
      },
      {
        file: "song07.mp3",
        artist: "Mariah Carey",
        title: "Honey",
      },
      {
        file: "song08.mp3",
        artist: "The Rolling Stones",
        title: "Brown Sugar",
      },
      {
        file: "song09.mp3",
        artist: "Harry Styles",
        title: "Watermelon Sugar",
      },
      {
        file: "song10.mp3",
        artist: "The Jesus and Mary Chain",
        title: "Just Like Honey",
      },
    ],
  },
  {
    title: "The Starting Line",
    category: "Literature",
    template: Regular,
    description:
      "I'll read the first line (or two) from a famous novel. You get one point for correctly identifying the title, and one point for its author.",
    prompts: [
      {
        question: "Call me Ishmael.",
        answer: "Herman Melville, Moby-Dick",
      },
      {
        question:
          "Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        answer: "J.K. Rowling, Harry Potter and the Philosopher's Stone",
      },
      {
        question:
          "When I wake up, the other side of the bed is cold. My fingers stretch out, seeking Prim's warmth but finding only the rough canvas cover of the mattress.",
        answer: "Suzanne Collins, The Hunger Games",
      },
      {
        question:
          "What's it going to be then eh? That was me, that is Alex, and my three droogs, that is Pete, Georgie and Dim, Dim being really dim, and we sat in The Korova Milkbar making up our rassoodocks what to do with the evening, a flip dark chill winter bastard though dry.",
        answer: "Anthony Burgess, A Clockwork Orange",
      },
      {
        question:
          "Scarlett O'Hara was not beautiful, but men seldom realized it when caught by her charm.",
        answer: "Margaret Mitchell, Gone With the Wind",
      },
      {
        question:
          "Tyler gets me a job as a waiter, after that Tyler's pushing a gun in my mouth and saying, the first step to eternal life is you have to die.",
        answer: "Chuck Palahniuk, Fight Club",
      },
      {
        question:
          "Far out in the uncharted backwaters of the unfashionable end of the Western Spiral arm of the Galaxy lies a small unregarded yellow sun.",
        answer: "Douglas Adams, The Hitchhiker’s Guide to the Galaxy",
      },
      {
        question:
          "Everyone in Shaker Heights was talking about it that summer: how Isabelle, the last of the Richardson children, had finally gone around the bend and burned the house down.",
        answer: "Celeste Ng, Little Fires Everywhere",
      },
      {
        question:
          "It was a bright cold day in April, and the clocks were striking thirteen.",
        answer: "George Orwell, 1984",
      },
      {
        question:
          "Barabás came to us by sea, the child Clara wrote in her delicate calligraphy.",
        answer: "Isabel Allende, The House of the Spirits",
      },
    ],
  },
  {
    title: "Grouchy Performances",
    description:
      "I'll show you a photo of an oscar winning performance. You give me the name of the actor for one point and the name of the movie for another.",
    category: "Movies",
    template: Actors,
    prompts: [
      {
        actor: "Robert De Niro",
        movie: "Raging Bull",
        file: "movie01.jpg",
      },
      {
        actor: "Cher",
        movie: "Moonstruck",
        file: "movie02.jpg",
      },
      {
        actor: "Anthony Hopkins",
        movie: "The Silence of The Lambs",
        file: "movie03.jpg",
      },
      {
        actor: "Helen Hunt",
        movie: "As Good as it Gets",
        file: "movie04.jpg",
      },
      {
        actor: "Denzel Washington",
        movie: "Training Day",
        file: "movie05.jpg",
      },
      {
        actor: "Charlize Theron",
        movie: "Monster",
        file: "movie06.jpg",
      },
      {
        actor: "Jamie Foxx",
        movie: "Ray",
        file: "movie07.jpg",
      },
      {
        actor: "Natalie Portman",
        movie: "Black Swan",
        file: "movie08.jpg",
      },
      {
        actor: "Rami Malek",
        movie: "Bohemian Rhapsody",
        file: "movie09.jpg",
      },
      {
        actor: "Renee Zellweger",
        movie: "Judy",
        file: "movie10.jpg",
      },
    ],
  },
  {
    title: "Behind the Scenes",
    category: "Landmarks",
    template: Photo,
    description:
      "Photographer Oliver Curtis pointed his camera 'the wrong way' at famous landmarks to capture the hidden side. Name the famous place by looking at each photo.",
    prompts: [
      {
        answer: "The Taj Mahal",
        file: "landmark01.jpg",
        revealed: "landmarkanswer01.jpg",
      },
      {
        answer: "The Lincoln Memorial",
        file: "landmark02.jpg",
        revealed: "landmarkanswer02.jpg",
      },
      {
        answer: "Stonehenge",
        file: "landmark03.jpg",
        revealed: "landmarkanswer03.jpg",
      },
      {
        answer: "Great Wall of China",
        file: "landmark04.jpg",
        revealed: "landmarkanswer04.jpg",
      },
      {
        answer: "The White House",
        file: "landmark05.jpg",
        revealed: "landmarkanswer05.jpg",
      },
      {
        answer: "The Colosseum",
        file: "landmark06.jpg",
        revealed: "landmarkanswer06.jpg",
      },
      {
        answer: "Christ the Redeemer",
        file: "landmark07.jpg",
        revealed: "landmarkanswer07.jpg",
      },
      {
        answer: "The Wailing Wall",
        file: "landmark08.jpg",
        revealed: "landmarkanswer08.jpg",
      },
      {
        answer: "The Mona Lisa",
        file: "landmark09.jpg",
        revealed: "landmarkanswer09.jpg",
      },
      {
        answer: "St. Peter's Basilica",
        file: "landmark10.jpg",
        revealed: "landmarkanswer10.jpg",
      },
    ],
  },
];
