<template>
  <nav class="flex justify-center items-center h-16 bg-white">
    <div class="flex justify-between w-4/5">
      <h1 class="text-xl">Typle</h1>
      <ul class="flex">
        <li v-for="navItem in navItems">
          <router-link
            :to="'/' + navItem"
            class="text-sm py-3 px-6 hover:bg-gray-100"
          >{{ navItem }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <main class="mx-auto mt-12 bg-white w-4/5">
    <router-view />
  </main>
</template>
<script setup lang="ts">
const navItems = ["home", "play", "Rankings", "Create", "Edit", "About"]

type RankingRecord = {
  time: number | Date,
  length: number,
  date: string | Date
}
const rankingRecords: RankingRecord[] = [
  { time: 4, length: 3, date: new Date().toLocaleString() },
  { time: 5, length: 3, date: new Date().toLocaleString() },
  { time: 6, length: 3, date: new Date().toLocaleString() },
]

type WordListWord = {
  wordDisplayed: string,
  wordExpectedToInput: string,
  annotation?: string,
}

type WordListInfo = {
  createdAt: string | Date,
  createdBy?: string,
  updatedAt?: string | Date,
  
}

type WordList = {
  name: string,
  description?: string
  words: WordListWord[],
  rankingRecords: RankingRecord[],
  info: WordListInfo
}
const wordLists: WordList[] = [
  {
    name: "Example 1",
    description: "This is an example word list",
    words: [
      {
        wordDisplayed: "hoge",
        wordExpectedToInput: "hoge",
      },
      {
        wordDisplayed: "foo",
        wordExpectedToInput: "foo",
      },
      {
        wordDisplayed: "bar",
        wordExpectedToInput: "bar",
      },
    ],
    rankingRecords: rankingRecords,
    info: {
      createdAt: new Date().toLocaleString(),
    }
  }
]
</script>