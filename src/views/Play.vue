<template>
  <AppContainer class="flex justify-between">
    <main class="w-9/12 bg-white pb-12">
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
      <div class="mx-auto mt-8 px-6">
        <section id="wordList">
          <h1 class="text-xl my-3">Selected: {{ wordList.name }}</h1>
          <v-chip
            v-for="(word, index) in wordLists[0].words"
            :key="index"
            class="text-sm mr-2 py-1 px-2 bg-gray-200"
          >
            {{ word.wordDisplayed }}
          </v-chip>
        </section>
        <section class="mt-12 flex justify-between">
          <section id="rankings" class="w-6/12">
            <h2 class="text-2xl">ランキング</h2>
            <v-table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Time</th>
                  <th>Length</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(record, index) in wordList.records">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>{{ record.time }} seconds</td>
                  <td>{{ record.length }} words</td>
                  <td>{{ record.date }}</td>
                </tr>
              </tbody>
            </v-table>
          </section>
          <section id="selectWordList" class="w-5/12">
            <h2 class="text-2xl">単語リスト</h2>
            <v-table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Length</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(wordList, index) in wordLists">
                  <td :key="index">
                    <span>{{ wordList.name }}</span>
                  </td>
                  <td :key="index">
                    <span>{{ wordList.words.length }} words</span>
                  </td>
                  <td :key="index">
                    <v-btn>PLAY</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </section>
        </section>
      </div>
    </main>
    <aside class="ml-8 flex-auto">
      <SidePanel class="mb-8">
        <h1 class="text-xl">Sidepanel</h1>
        <p>dfadf</p>
      </SidePanel>
      <SidePanel class="mb-8">
        <h1 class="text-xl">Sidepanel</h1>
        <p>dfadf</p>
      </SidePanel>
      <SidePanel class="mb-8">
        <h1 class="text-xl">Sidepanel</h1>
        <p>dfadf</p>
      </SidePanel>
    </aside>
  </AppContainer>
</template>
<script setup lang="ts">
import getWordList from '@/api/getWordList';
import { WordList } from '@/models/screen/WordList';
import { ref, computed } from 'vue';
import AppContainer from "@/components/AppContainer/AppContainer.vue"
import SidePanel from "@/components/SidePanel/SidePanel.vue"

const wordLists = ref<WordList[]>(getWordList())
const wordListIndex = ref(0)
const wordList = computed(() => wordLists.value[wordListIndex.value])


</script>