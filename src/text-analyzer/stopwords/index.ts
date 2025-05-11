// stopwords/index.ts
import { stopwords as baseStopwords } from './stopwords';
import { stopwords as extendedStopwords } from './stopwords.extended';

export function getStopwords(
  lang: string,
  extended: boolean = false,
): Set<string> {
  const source = extended ? extendedStopwords : baseStopwords;
  return new Set(source[lang as keyof typeof source] || []);
}
