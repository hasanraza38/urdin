import { urduToRomanMap, wordPriorityMap } from "./map.js";


export function translate(text: string): string {
  for (const [urduWord, romanWord] of Object.entries(wordPriorityMap)) {
    text = text.replace(new RegExp(urduWord, "g"), romanWord);
  }

  return text
    .split("")
    .map((char) => urduToRomanMap[char] || char)
    .join("");
}
