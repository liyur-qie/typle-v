<template>
<section id="playArea">
      <div
        id="wordDisplay"
        class="bg-gray-900 text-white flex justify-center items-center text-4xl h-28"
      >Hello, World</div>
      <input
        type="text"
        id="wordInputField"
        class="bg-gray-800 text-white text-center w-full text-2xl font-light h-28 outline-none"
        placeholder="Type the word above here"
        />
    </section>
    <div class="w-4/5 mx-auto">
      <section id="wordList" class="mt-6">
        <h1 class="text-xl my-3">Selected: {{ wordList.name }}</h1>
        <span
          v-for="(word, index) in wordLists[0].words"
          :key="index"
          class="text-sm mr-2 py-1 px-2 bg-gray-200"
        >
          {{ word.wordDisplayed }}
        </span>
      </section>
      <section id="rankings" class="mt-6">
        <table>
          <tr>
            <td class="text-sm text-gray-700">No.</td>
            <td class="text-sm text-gray-700">Time</td>
            <td class="text-sm text-gray-700">Words</td>
            <td class="text-sm text-gray-700">Date</td>
          </tr>
          <tr v-for="(record, index) in wordList">
            <td>{{ index + 1 }}</td>
            <td>{{ record.time }} seconds</td>
            <td>{{ record.length }} words</td>
            <td>{{ record.date }}</td>
          </tr>
        </table>
      </section>
      <section id="selectWordList">
        <table>
          <tr>
            <td>
              <span>Name</span>
            </td>
            <td>
              <span>Length</span>
            </td>
            <td>
              <span>Action</span>
            </td>
          </tr>
          <tr v-for="(wordList, index) in wordLists">
            <td :key="index">
              <span>{{ wordList.name }}</span>
            </td>
            <td :key="index">
              <span>{{ wordList.words.length }} words</span>
            </td>
            <td :key="index">
              <button>PLAY</button>
            </td>
          </tr>
        </table>
      </section>
    </div>
</template>
<script setup lang="ts">
import { WordList } from '@/models/screen/WordList';
import { ref, computed } from 'vue';

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
    rankingRecords: [
      { time: 4, length: 3, date: new Date().toLocaleString() },
      { time: 5, length: 3, date: new Date().toLocaleString() },
      { time: 6, length: 3, date: new Date().toLocaleString() },
    ],
    info: {
      createdAt: new Date().toLocaleString(),
    }
  }
]

const wordListIndex = ref(0)
const wordList = computed(() => wordLists[wordListIndex.value])

</script>