export type RankingRecord = {
  time: number | Date,
  length: number,
  date: string | Date
}

export type WordListWord = {
  wordDisplayed: string,
  wordExpectedToInput?: string,
  annotation?: string,
}

export type WordListInfo = {
  createdAt: string | Date,
  createdBy?: string,
  updatedAt?: string | Date,
  
}

export type WordList = {
  name: string,
  description: string,
  words: WordListWord[],
  records: RankingRecord[],
  info: WordListInfo
}


export default WordList