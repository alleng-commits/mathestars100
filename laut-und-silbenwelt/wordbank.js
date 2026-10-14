/* Didaktische Vorprüfung, keine Validierung mit Erstklässlern. Medienpfade sind Platzhalter. */
const WORD_BANK = [
  {
    "id": "apfel",
    "word": "Apfel",
    "initial": "A",
    "syllables": [
      "Ap",
      "fel"
    ],
    "image": "media/images/apfel.svg",
    "audio": "media/audio/apfel.mp3",
    "fallbackEmoji": "🍎",
    "reviewStatus": "core",
    "reviewNote": "Sehr gut erkennbare Frucht; Ap-fel hat zwei Sprechsilben.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Bildbenennung und Silbenzählen",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "auto",
    "word": "Auto",
    "initial": "Au",
    "syllables": [
      "Au",
      "to"
    ],
    "image": "media/images/auto.svg",
    "audio": "media/audio/auto.mp3",
    "fallbackEmoji": "🚗",
    "reviewStatus": "review",
    "reviewNote": "Au ist ein Diphthong /aʊ/ und kein einzelner A-Laut; Auto kann auch Wagen heißen.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Silben gut; Anlaut Au nur explizit als Lautverbindung",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "ball",
    "word": "Ball",
    "initial": "B",
    "syllables": [
      "Ball"
    ],
    "image": "media/images/ball.svg",
    "audio": "media/audio/ball.mp3",
    "fallbackEmoji": "⚽",
    "reviewStatus": "review",
    "reviewNote": "Fußball statt Ball möglich, insbesondere beim Fußball-Emoji; dabei wechseln auch Silbenzahl und Anlaut.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Nur nach expliziter Audio-Benennung oder mit neutralem Spielball",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "bett",
    "word": "Bett",
    "initial": "B",
    "syllables": [
      "Bett"
    ],
    "image": "media/images/bett.svg",
    "audio": "media/audio/bett.mp3",
    "fallbackEmoji": "🛏️",
    "reviewStatus": "core",
    "reviewNote": "Gutes konkretes Motiv, meist eindeutig benennbar.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "bus",
    "word": "Bus",
    "initial": "B",
    "syllables": [
      "Bus"
    ],
    "image": "media/images/bus.svg",
    "audio": "media/audio/bus.mp3",
    "fallbackEmoji": "🚌",
    "reviewStatus": "core",
    "reviewNote": "Typisches, meist eindeutig benennbares Fahrzeug.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "dose",
    "word": "Dose",
    "initial": "D",
    "syllables": [
      "Do",
      "se"
    ],
    "image": "media/images/dose.svg",
    "audio": "media/audio/dose.mp3",
    "fallbackEmoji": "🥫",
    "reviewStatus": "review",
    "reviewNote": "Konservendose oder Büchse möglich; Benennungsvarianten verändern Silbenzahl und Anlaut.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Nur nach Bildtest",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "esel",
    "word": "Esel",
    "initial": "E",
    "syllables": [
      "E",
      "sel"
    ],
    "image": "media/images/esel.svg",
    "audio": "media/audio/esel.mp3",
    "fallbackEmoji": "🫏",
    "reviewStatus": "core",
    "reviewNote": "Gutes Tiermotiv; vokalischer Anlaut E, nicht Buchstabenname mit Laut verwechseln.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "fisch",
    "word": "Fisch",
    "initial": "F",
    "syllables": [
      "Fisch"
    ],
    "image": "media/images/fisch.svg",
    "audio": "media/audio/fisch.mp3",
    "fallbackEmoji": "🐟",
    "reviewStatus": "review",
    "reviewNote": "Mögliche alternative Benennung durch Tierart; stark stilisierte Fischbilder können unklar sein.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Neutrale ganze Fischillustration prüfen",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "gabel",
    "word": "Gabel",
    "initial": "G",
    "syllables": [
      "Ga",
      "bel"
    ],
    "image": "media/images/gabel.svg",
    "audio": "media/audio/gabel.mp3",
    "fallbackEmoji": "🍴",
    "reviewStatus": "core",
    "reviewNote": "Gut erkennbares Alltagsobjekt.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "haus",
    "word": "Haus",
    "initial": "H",
    "syllables": [
      "Haus"
    ],
    "image": "media/images/haus.svg",
    "audio": "media/audio/haus.mp3",
    "fallbackEmoji": "🏠",
    "reviewStatus": "core",
    "reviewNote": "Meist eindeutiges Motiv.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "hose",
    "word": "Hose",
    "initial": "H",
    "syllables": [
      "Ho",
      "se"
    ],
    "image": "media/images/hose.svg",
    "audio": "media/audio/hose.mp3",
    "fallbackEmoji": "👖",
    "reviewStatus": "core",
    "reviewNote": "Gut erkennbare Kleidungsform.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "hund",
    "word": "Hund",
    "initial": "H",
    "syllables": [
      "Hund"
    ],
    "image": "media/images/hund.svg",
    "audio": "media/audio/hund.mp3",
    "fallbackEmoji": "🐕",
    "reviewStatus": "core",
    "reviewNote": "Typisches Tiermotiv; mögliche Rassenbenennung meist vermeidbar.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "kanne",
    "word": "Kanne",
    "initial": "K",
    "syllables": [
      "Kan",
      "ne"
    ],
    "image": "media/images/kanne.svg",
    "audio": "media/audio/kanne.mp3",
    "fallbackEmoji": "🫖",
    "reviewStatus": "review",
    "reviewNote": "Teekanne statt Kanne; zusätzlich kann die Darstellung wie ein Wasserkocher aussehen.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Bildtest vor Freigabe",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "katze",
    "word": "Katze",
    "initial": "K",
    "syllables": [
      "Kat",
      "ze"
    ],
    "image": "media/images/katze.svg",
    "audio": "media/audio/katze.mp3",
    "fallbackEmoji": "🐈",
    "reviewStatus": "core",
    "reviewNote": "Typisches Motiv, meist eindeutig.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "lampe",
    "word": "Lampe",
    "initial": "L",
    "syllables": [
      "Lam",
      "pe"
    ],
    "image": "media/images/lampe.svg",
    "audio": "media/audio/lampe.mp3",
    "fallbackEmoji": "💡",
    "reviewStatus": "review",
    "reviewNote": "Das aktuelle Emoji stellt eine Glühbirne dar; Lampe vs Glühbirne ergibt andere Laute und Silben.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Eigenes Bild einer ganzen Lampe nötig",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "maus",
    "word": "Maus",
    "initial": "M",
    "syllables": [
      "Maus"
    ],
    "image": "media/images/maus.svg",
    "audio": "media/audio/maus.mp3",
    "fallbackEmoji": "🐭",
    "reviewStatus": "core",
    "reviewNote": "Tiermotiv klar; nicht als Computermaus zeichnen.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "mond",
    "word": "Mond",
    "initial": "M",
    "syllables": [
      "Mond"
    ],
    "image": "media/images/mond.svg",
    "audio": "media/audio/mond.mp3",
    "fallbackEmoji": "🌙",
    "reviewStatus": "core",
    "reviewNote": "Halbmond gut erkennbar; Sichel statt Mond als Alternativwort denkbar.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "nase",
    "word": "Nase",
    "initial": "N",
    "syllables": [
      "Na",
      "se"
    ],
    "image": "media/images/nase.svg",
    "audio": "media/audio/nase.mp3",
    "fallbackEmoji": "👃",
    "reviewStatus": "core",
    "reviewNote": "Körperteil gut erkennbar; idealerweise ohne ganzes Gesicht.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "rose",
    "word": "Rose",
    "initial": "R",
    "syllables": [
      "Ro",
      "se"
    ],
    "image": "media/images/rose.svg",
    "audio": "media/audio/rose.mp3",
    "fallbackEmoji": "🌹",
    "reviewStatus": "review",
    "reviewNote": "Blume statt Rose häufig möglich; Blume hat anderen Anlaut, aber gleiche Silbenzahl.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Typische Rosenblüte, Bildtest",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "sonne",
    "word": "Sonne",
    "initial": "S",
    "syllables": [
      "Son",
      "ne"
    ],
    "image": "media/images/sonne.svg",
    "audio": "media/audio/sonne.mp3",
    "fallbackEmoji": "☀️",
    "reviewStatus": "review",
    "reviewNote": "Sonne beginnt im Standarddeutschen mit /z/, nicht /s/; Bild oft eindeutig, aber Anlautunterricht muss das unterscheiden.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Silbenzählen gut; S-Zuordnung bewusst erst später",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "tasse",
    "word": "Tasse",
    "initial": "T",
    "syllables": [
      "Tas",
      "se"
    ],
    "image": "media/images/tasse.svg",
    "audio": "media/audio/tasse.mp3",
    "fallbackEmoji": "☕",
    "reviewStatus": "review",
    "reviewNote": "Becher statt Tasse möglich; aktuelles Emoji enthält Kaffee als zweites Benennungsziel.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Leere Tasse mit Henkel testen",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "tiger",
    "word": "Tiger",
    "initial": "T",
    "syllables": [
      "Ti",
      "ger"
    ],
    "image": "media/images/tiger.svg",
    "audio": "media/audio/tiger.mp3",
    "fallbackEmoji": "🐯",
    "reviewStatus": "core",
    "reviewNote": "Typische Streifenzeichnung gut erkennbar.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Geeignet",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "uhr",
    "word": "Uhr",
    "initial": "U",
    "syllables": [
      "Uhr"
    ],
    "image": "media/images/uhr.svg",
    "audio": "media/audio/uhr.mp3",
    "fallbackEmoji": "⏰",
    "reviewStatus": "review",
    "reviewNote": "Aktuelles Emoji ist ein Wecker; Wecker unterscheidet sich in Anlaut und Silben.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Analoges Uhr-Bild ohne Weckerglocken",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "zug",
    "word": "Zug",
    "initial": "Z",
    "syllables": [
      "Zug"
    ],
    "image": "media/images/zug.svg",
    "audio": "media/audio/zug.mp3",
    "fallbackEmoji": "🚆",
    "reviewStatus": "review",
    "reviewNote": "Z entspricht am Wortanfang /ts/, also einer Affrikate, nicht einem einfachen Laut; Bild selbst gut erkennbar.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 1,
    "didacticRecommendation": "Silbenzählen gut; Graphem Z gesondert",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "banane",
    "word": "Banane",
    "initial": "B",
    "syllables": [
      "Ba",
      "na",
      "ne"
    ],
    "image": "media/images/banane.svg",
    "audio": "media/audio/banane.mp3",
    "fallbackEmoji": "🍌",
    "reviewStatus": "core",
    "reviewNote": "Meist eindeutiges Objekt, gut dreisilbig.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 2,
    "didacticRecommendation": "Geeignet, Stufe 2",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "tomate",
    "word": "Tomate",
    "initial": "T",
    "syllables": [
      "To",
      "ma",
      "te"
    ],
    "image": "media/images/tomate.svg",
    "audio": "media/audio/tomate.mp3",
    "fallbackEmoji": "🍅",
    "reviewStatus": "core",
    "reviewNote": "Klares Motiv, dreisilbig; regional vereinzelt Paradeiser.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 2,
    "didacticRecommendation": "Geeignet, Stufe 2",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "rakete",
    "word": "Rakete",
    "initial": "R",
    "syllables": [
      "Ra",
      "ke",
      "te"
    ],
    "image": "media/images/rakete.svg",
    "audio": "media/audio/rakete.mp3",
    "fallbackEmoji": "🚀",
    "reviewStatus": "core",
    "reviewNote": "Klares Motiv, dreisilbig; eventuelle Verwechslung mit Raumschiff kontrollieren.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 2,
    "didacticRecommendation": "Geeignet, Stufe 2",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "kamera",
    "word": "Kamera",
    "initial": "K",
    "syllables": [
      "Ka",
      "me",
      "ra"
    ],
    "image": "media/images/kamera.svg",
    "audio": "media/audio/kamera.mp3",
    "fallbackEmoji": "📷",
    "reviewStatus": "review",
    "reviewNote": "Fotoapparat/Fotokamera möglich; Wortlängen und Silbenzahl können abweichen.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 2,
    "didacticRecommendation": "Nur bei vorgegebenem Zielwort",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  },
  {
    "id": "krokodil",
    "word": "Krokodil",
    "initial": "K",
    "syllables": [
      "Kro",
      "ko",
      "dil"
    ],
    "image": "media/images/krokodil.svg",
    "audio": "media/audio/krokodil.mp3",
    "fallbackEmoji": "🐊",
    "reviewStatus": "review",
    "reviewNote": "Konsonantenverbindung /kr/ erschwert das Bestimmen eines einzelnen Anlauts; nicht dasselbe wie einfaches K.",
    "uses": [
      "initial",
      "syllables"
    ],
    "startLevel": 3,
    "didacticRecommendation": "Für Silbenzählen später; Bildtest",
    "reviewedFor": [
      "bildbenennung_vorpruefung",
      "anlaut_vorpruefung",
      "silben_vorpruefung"
    ],
    "teacherValidated": false
  }
];
