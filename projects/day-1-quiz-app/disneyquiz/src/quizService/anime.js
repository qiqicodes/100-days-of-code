const animeBank = [
  {
    question:
      'Who wrote and directed the animated movie "Spirited Away" (2001)?',
    answer: "Hayao Miyazaki",
    answers: [
      "Isao Takahata",
      "Mamoru Hosoda",
      "Hayao Miyazaki",
      "Hidetaka Miyazaki"
    ],
    questionId: "997449"
  },
  {
    question:
      "In Dragon Ball Z, who was the first character to go Super Saiyan 2?",
    answer: "Gohan",
    answers: ["Goku", "Vegeta", "Trunks", "Gohan"],
    questionId: "651690"
  },
  {
    question: 'Which anime heavily features music from the genre "Eurobeat"?',
    answer: "Initial D",
    answers: ["Initial D", "Wangan Midnight", "Kino no Tabi", "Cowboy Bebop"],
    questionId: "404002"
  },
  {
    question:
      'Who was given the title "Full Metal" in the anime series "Full Metal Alchemist"?',
    answer: "Edward Elric",
    answers: [
      "Alphonse Elric",
      "Edward Elric",
      "Van Hohenheim",
      "Izumi Curtis"
    ],
    questionId: "888302"
  },
  {
    question: 'In "Inuyasha", what are the heros are looking to collect?',
    answer: "Jewel Shards",
    answers: ["Jewel Shards", "Dragon Balls", "Rave Stones", "Sacred Stones"],
    questionId: "568883"
  },
  {
    question: "What is the name of the corgi in Cowboy Bebop?",
    answer: "Einstein",
    answers: ["Edward", "Rocket", "Jewel Shards", "Joel"],
    questionId: "112788"
  },
  {
    question: "What is the name of the stuffed lion in Bleach?",
    answer: "Kon",
    answers: ["Jo", "Kon", "Urdiu", "Chad"],
    questionId: "333462"
  },
  {
    question:
      'In "Highschool of the Dead", where did Komuro and Saeko establish to meet after the bus explosion?',
    answer: "Eastern Police Station",
    answers: [
      "Eastern Police Station",
      "The Center Mall",
      "Komuro's House",
      "On The Main Bridge"
    ],
    questionId: "345788"
  },
  {
    question: "What was Ash Ketchum's second Pokemon?",
    answer: "Caterpie",
    answers: ["Charmander", "Pikachu", "Pidgey", "Caterpie"],
    questionId: "435993"
  },
  {
    question:
      "Which one of these Manga titles was not created by Urasawa Naoki?",
    answer: "My Father's Journal",
    answers: ["Billy Bat", "20th Century Boys", "Monster"],
    questionId: "450600"
  },
  {
    question:
      "The main protagonist of the fourth part of JoJo's Bizarre Adventure is which of the following?",
    answer: "Josuke Higashikata",
    answers: [
      "Yoshikage kira",
      "Koichi Hirose",
      "Josuke Higashikata",
      "Joey JoJo"
    ],
    questionId: "435609"
  },
  {
    question:
      "In JoJo's Bizarre Adventure, winch character is able to accelerate time?",
    answer: "Enrico Pucci",
    answers: ["Jotaro Kujo", "Enrico Pucci", "Jolyne Cujoh", "Kujo Jotaro"],
    questionId: "345989"
  },
  {
    question:
      "The name of Junko Enoshima's imposter at the beginning of Danganronpa: Trigger Happy Havoc is?",
    answer: "Mukuro Ikusaba",
    answers: [
      "Ryota Mitarai",
      "Ultimate Imposter",
      "Komaru Naegi",
      "Mukuro Ikusaba"
    ],
    questionId: "208005"
  },
  {
    question:
      "In the anime Assassination Classroom what is the class that Korosensei teaches?",
    answer: "Class 3-E",
    answers: ["Class 3-A", "Class 3-B", "Class 3-D", "Class 3-E"],
    questionId: "237962"
  },
  {
    question:
      "In the anime Seven Deadly Sins what is the name of one of the sins?",
    answer: "Diane",
    answers: ["Sakura", "Ayano", "Sheska", "Diane"],
    questionId: "237878"
  },
  {
    question:
      'In the "Toaru Majutsu no Index" anime, Touma Kamijou is a level 0 esper that has the ability to do what?',
    answer: "Dispell any esper or magical powers",
    answers: [
      "Teleport",
      "Make telepathic communications",
      "Create electricity from his own body"
    ],
    questionId: "055849"
  },
  {
    question:
      'In "A Certain Scientific Railgun", how many "sisters" did Accelerator have to kill to achieve the rumored level 6?',
    answer: "20,000",
    answers: ["128", "10,000", "20,000", "5,000"],
    questionId: "288973"
  },
  {
    question:
      "Which of the following anime of the mecha genre began airing in 1982?",
    answer: "The Super Dimension Fortress Macross",
    answers: [
      "Mobile Suit Gundam",
      "Armored Trooper VOTOMS",
      "Neon Genesis Evangelion",
      "The Super Dimension Fortress Macross"
    ],
    questionId: "193006"
  },
  {
    question: "Which of the following manga have the most tankouban volumes?",
    answer: "Golgo 13",
    answers: [
      "JoJo's Bizarre Adventure",
      "Golgo 13",
      "Detective Conan",
      "One Piece"
    ],
    questionId: ""
  },
  {
    question:
      "In Digimon, what is the Japanese name for the final evolutionary stage?",
    answer: "Ultimate",
    answers: ["Mega", "Adult", "Ultimate", "Champion"],
    questionId: "238571"
  },
  {
    question: 'What year did "Attack on Titan" Season 2 begin airing?',
    answer: "2017",
    answers: ["2017", "2018", "2019", "2020"],
    questionId: "734234"
  },
  {
    question:
      'What is the name of the device that allows for infinite energy in the anime "Dimension W"?',
    answer: "Coils",
    answers: ["Wires", "Collectors", "Coils", "Tesla"],
    questionId: "835672"
  },
  {
    question:
      "What was studio Trigger's first original long-form animated series for television?",
    answer: "Kill la Kill",
    answers: ["Kiznaiver", "Kill la Kill", "Inferno Cop", "Gurren Lagann"],
    questionId: "578245"
  },
  {
    question: `Akatsuki's subclass in "Log Horizon" is what?`,
    answer: "Tracker",
    answers: ["Assassin", "Scribe", "Tracker", "Apprentice"],
    questionId: "198203"
  },
  {
    question: 'Krusty is the guild master of which guild in "Log Horizon"?',
    answer: "D. D. D",
    answers: [
      "D. D. D",
      "Silver Sword",
      "West Wind Brigade",
      "Oceanic Systems (Marine Agency)"
    ],
    questionId: "657843"
  },
  {
    question:
      'In "One Piece", who is the girl who overcame her enslaved past and became an agent of an army to fight the corrupt government?',
    answer: "Koala",
    answers: ["Boa Hancock", "Nico Robin", "Emporio Ivankov", "Koala"],
    questionId: "212351"
  },
  {
    question:
      'Which one of these characters is from "Legendz : Tale of the Dragon Kings"?',
    answer: "Shiron",
    answers: ["Jack", "Axia", "Drum", "Shiron"],
    questionId: "856563"
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      'In "Toriko", which of the following foods is knowingly compatible with Toriko?',
    answer: "Poison Potato",
    answers: ["Mors Oil", "Alpacookie", "Poison Potato", "Parmesansho Fruit"],
    questionId: "524573"
  },
  {
    question: 'Who is the creator of the manga series "One Piece"?',
    answer: "Eiichiro Oda",
    answers: [
      "Eiichiro Oda",
      "Yoshihiro Togashi",
      "Hayao Miyazaki",
      "Masashi Kishimoto"
    ],
    questionId: "234781"
  },
  {
    question:
      'In "Hunter x Hunter", which of the following is NOT a type of Nen aura?',
    answer: "Restoration",
    answers: ["Emission", "Restoration", "Transmutation", "Specialization"],
    questionId: "458963"
  },
  {
    question: 'What year did "Bishoujo Senshi Sailor Moon" air in Japan?',
    answer: "1992",
    answers: ["1989", "1990", "1992", "1994"],
    questionId: "112353"
  },
  {
    question:
      'In the "To Love-Ru" series, how many Trans-weapons were created?',
    answer: "3",
    answers: ["1", "2", "3", "4"],
    questionId: "333228"
  },
  {
    question: 'Who is the armored titan in "Attack On Titan"?',
    answer: "Reiner Braun",
    answers: ["Armin Arlelt", "Mikasa Ackermann", "Eren Jaeger"],
    questionId: "390082"
  },
  {
    question: 'In "Highschool DxD", Koneko Toujou is from what race?',
    answer: "Nekomata",
    answers: ["Kitsune", "Human", "Kappa", "Nekomata"],
    questionId: "349275"
  },
  {
    question: `In "To Love-Ru", who is the first to hear of Yami's past from her?`,
    answer: "Rito",
    answers: ["Mikan", "Lala", "Haruna", "Rito"],
    questionId: "123853"
  },
  {
    question: `In "Little Witch Academia", what is Shiny Chariot's alias at Luna Nova Academy?`,
    answer: "Ursula Callistis",
    answers: [
      "Croix Meridies",
      "Miranda Holbrook",
      "Ursula Callistis",
      "Anne Finnelan"
    ],
    questionId: "857402"
  },
  {
    question: `In the "Re:Zero" manga series, which of the following Sin Archbishops eats Rem's existence?`,
    answer: "Ley Batenkaitos",
    answers: ["Roy Alphard", "Petelgeuse Romanee-Conti", "Louis Arneb"],
    questionId: "473685"
  },
  {
    question: `In "Puella Magi Madoka Magica", what is the first name of Madoka's younger brother?`,
    answer: "Tatsuya",
    answers: ["Montoya", "Tatsuya", "Tomohisa", "Minato"],
    questionId: "203961"
  },
  {
    question: 'Which animation studio produced "Sword Art Online"?',
    answer: "A-1 Pictures",
    answers: [
      "Production I.G",
      "Silver Link",
      "Kyoto Animation",
      "A-1 Pictures"
    ],
    questionId: "236749"
  },
  {
    question: "Which studio animated Afro Samurai?",
    answer: "Gonzo",
    answers: ["Gonzo", "Kyoto Animation", "xebec", "Production I.G"],
    questionId: "239836"
  },
  {
    question: "What studio animated Fullmetal Alchemist?",
    answer: "Bones",
    answers: ["Trigger", "Pierrot", "xebec", "Bones"],
    questionId: "230947"
  },
  {
    question: "What studio animated Ouran High School Host Club?",
    answer: "Bones",
    answers: ["Bones", "Production I.G", "Kyoto Animation", "xebec"],
    questionId: "958432"
  },
  {
    question:
      'Which Japanese music group was formed to produce theme music for the anime "Guilty Crown"?',
    answer: "Egoist",
    answers: ["Goose house", "Babymetal", "Egoist", "Garnidelia"],
    questionId: "129483"
  },
  {
    question:
      'In "Love Live: School Idol Project" what pseudonym does Kotori Minami use in her job as a maid?',
    answer: "Minalinsky",
    answers: ["Stanoytchev", "Minalinsky", "Kuznetsov", "Aqours"],
    questionId: "948532"
  },
  {
    question: "Who was the Author of the manga Monster Hunter Orage?",
    answer: "Hiro Mashima",
    answers: [
      "Hiro Mashima",
      "Shin Yamamoto",
      "Keiichi Hikami",
      "Hirohiko Araki"
    ],
    questionId: "748692"
  },
  {
    question:
      "What colour hair does the main character of the Yu-Gi-Oh! original anime series have?",
    answer: "Red, black and yellow",
    answers: [
      "Red, yellow and green",
      "Red, black and green",
      "Red, black and yellow",
      "Red, purple and blue"
    ],
    questionId: "123782"
  },
  {
    question:
      'Who was the Director of the 1988 Anime film "Grave of the Fireflies"?',
    answer: "Isao Takahata",
    answers: [
      "Hayao Miyazaki",
      "Isao Takahata",
      "Satoshi Kon",
      "Sunao Katabuchi"
    ],
    questionId: "875764"
  },
  {
    question:
      "In the series JoJo's Bizarre Adventure, which main character makes the greatest number of recurring appearances?",
    answer: "Jotaro Kujo",
    answers: ["Giorno Giovanna", "Joseph Joestar", "Josuke Higashikata"],
    questionId: "618520"
  },
  {
    question:
      "Which JoJo's Bizarre Adventure character possesses the Stand named Silver Chariot?",
    answer: "Jean Pierre Polnareff",
    answers: [
      "Jean Pierre Polnareff",
      "Noriaki Kakyoin",
      "Hol Horse",
      "Hermes Costello"
    ],
    questionId: "181625"
  },
  {
    question:
      'In the anime "My Hero Academia", which character is shown with the ability to manipulate gravity?',
    answer: "Uraraka",
    answers: ["Bakugo", "Deku", "Asui ", "Uraraka"],
    questionId: "109285"
  }
];

// export default (n = 5) =>
//   Promise.resolve(animeBank.sort(() => 0.5 - Math.random()).slice(0, n));
