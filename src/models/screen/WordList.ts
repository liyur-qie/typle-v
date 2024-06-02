import type { RankingRecord, WordListWord, WordListInfo, WordList as WordListType } from "@/types/WordList";

export class WordList implements WordListType {
  // 単語リスト名
  name: string = ""
  // 単語リスト詳細説明
  description: string = ""
  // 単語リスト
  words: WordListWord[] = []
  // ランキング情報
  records: RankingRecord[] = []
  // 単語リスト情報
  info: WordListInfo = {
    createdAt: ""
  }
}