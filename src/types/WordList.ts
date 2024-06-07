export type WordListRecord = {
  time: number | Date;
  length: number;
  date: string | Date;
};

export type WordListWord = {
  display?: string;
  input: string;
  annotation?: string;
};

export type WordListInfo = {
  createdAt: string | Date;
  createdBy?: string;
  updatedAt?: string | Date;
};

export type WordList = {
  name: string;
  description: string;
  words: WordListWord[];
  records: WordListRecord[];
  info: WordListInfo;
};

export default WordList;
