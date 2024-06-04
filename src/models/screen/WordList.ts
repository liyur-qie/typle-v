import type { WordListRecord, WordListWord, WordListInfo, WordList as WordListType } from '@/types/WordList'

export class WordList implements WordListType {
  // 単語リスト名
  name = ''
  // 単語リスト詳細説明
  description = ''
  // 単語リスト
  words: WordListWord[] = []
  // ランキング情報
  records: WordListRecord[] = []
  // 単語リスト情報
  info: WordListInfo = {
    createdAt: '',
    createdBy: '',
    updatedAt: ''
  }
}