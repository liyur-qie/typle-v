import * as WordListJSON from "@/api/response/WordLists.json"
import WordList from "@/types/WordList"

export default function myApi(): WordList[] {
  return JSON.parse(JSON.stringify(WordListJSON)).wordLists
}
