import * as WordListJSON from "@/api/WordLists.json"

export default function myApi() {
  return JSON.parse(JSON.stringify(WordListJSON)).wordLists
}