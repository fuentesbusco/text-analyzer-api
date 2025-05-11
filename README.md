# Text Analyzer API – Word, Character & Frequency Counter

A simple REST API built with NestJS that analyzes a block of text and returns:

- ✅ Total number of characters (with and without spaces)
- ✅ Total number of words (excluding punctuation)
- ✅ Word frequency count (excluding common stopwords)
- ✅ Optional language-based stopword filtering (supports EN, ES, FR, IT, DE, PT)
- ✅ Option to use basic or extended stopword lists

---

## 🚀 Usage

### Endpoint

`POST /analyze`

### Request Body

```
{
  "text": "Your text goes here.",
  "lang": "en",                    // Optional (default: "en")
  "extendedStopwords": true       // Optional (default: false)
}
```

### Sample Response

```
{
  "language": "en",
  "stopwordsVersion": "extended",
  "characters": {
    "withSpaces": 38,
    "withoutSpaces": 32
  },
  "wordCount": 7,
  "frequencies": [
    { "word": "text", "count": 2 },
    { "word": "analyze", "count": 1 },
    { "word": "goes", "count": 1 },
    { "word": "here", "count": 1 }
  ]
}
```

---

## 🛠 Tech Stack

- NestJS
- TypeScript
- class-validator
- class-transformer

---

## 📄 License

MIT
