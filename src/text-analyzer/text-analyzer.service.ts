import { Injectable } from '@nestjs/common';
import { getStopwords } from './stopwords';

@Injectable()
export class TextAnalyzerService {
  countCharacters(text: string) {
    return {
      withSpaces: text.length,
      withoutSpaces: text.replace(/\s/g, '').length,
    };
  }

  countWords(text: string) {
    const words =
      text
        .trim()
        .toLowerCase()
        .match(/\b\w+\b/g) || [];
    return words.length;
  }

  wordFrequency(text: string, lang: string, extended: boolean = false) {
    const words =
      text
        .trim()
        .toLowerCase()
        .match(/\b\w+\b/g) || [];
    const frequencies: Record<string, number> = {};
    const stop = getStopwords(lang, extended);

    for (const word of words) {
      if (stop.has(word)) continue;
      frequencies[word] = (frequencies[word] || 0) + 1;
    }

    return Object.entries(frequencies)
      .sort((a, b) => b[1] - a[1])
      .map(([word, count]) => ({ word, count }));
  }

  analyze(text: string, lang: string = 'en', extended: boolean = false) {
    const appliedLang = ['en', 'es', 'fr', 'it', 'de', 'pt'].includes(lang)
      ? lang
      : 'en';

    return {
      language: appliedLang,
      stopwordsVersion: extended ? 'extended' : 'basic',
      characters: this.countCharacters(text),
      wordCount: this.countWords(text),
      frequencies: this.wordFrequency(text, appliedLang, extended),
    };
  }
}
