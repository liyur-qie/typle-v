<template>
  <Page>
    <PageContainer>
      <main class="bg-white pb-12">
        <section id="playArea">
          <div
            id="wordDisplay"
            class="bg-gray-900 text-white flex justify-center items-center text-4xl h-28"
          >
            {{ wordExpectedToInput }}
          </div>
          <input
            id="wordInputField"
            v-model="wordInputField"
            type="text"
            class="bg-gray-800 text-white text-center w-full text-2xl font-light h-28 outline-none"
            placeholder="Type the word above here"
          />
        </section>
        <div class="mx-auto mt-8 px-6">
          <section id="wordList">
            <h1 class="text-xl my-3">選択中: {{ selectedWordList.name }}</h1>
            <v-chip
              v-for="(word, index) in selectedWordList.words"
              :key="index"
              class="text-sm mr-2 py-1 px-2 bg-gray-200"
            >
              {{ word.input }}
            </v-chip>
          </section>
          <section class="mt-8 flex justify-between">
            <section id="rankings" class="w-6/12">
              <h2 class="text-2xl">
                {{ $t("play.records.title") }}
              </h2>
              <v-table>
                <thead>
                  <tr>
                    <th>{{ $t("play.records.table.no") }}</th>
                    <th>{{ $t("play.records.table.time") }}</th>
                    <th>{{ $t("play.records.table.length") }}</th>
                    <th>{{ $t("play.records.table.date") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(record, index) in selectedWordList.records"
                    :key="index"
                  >
                    <td class="text-center">
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ record.time }} {{ $t("play.records.tableData.time") }}
                    </td>
                    <td>
                      {{ record.length }}
                      {{ $t("play.records.tableData.length") }}
                    </td>
                    <td>{{ record.date }}</td>
                  </tr>
                  <p
                    v-if="selectedWordList.records.length === 0"
                    class="text-sm mt-4"
                  >
                    まだ記録がありません。
                  </p>
                </tbody>
              </v-table>
            </section>
            <section id="selectWordList" class="w-5/12">
              <h2 class="text-2xl">
                {{ $t("play.wordLists.title") }}
              </h2>
              <v-table>
                <thead>
                  <tr>
                    <th>{{ $t("play.wordLists.table.name") }}</th>
                    <th>{{ $t("play.wordLists.table.length") }}</th>
                    <th>{{ $t("play.wordLists.table.actions") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(wordList, index) in wordLists" :key="index">
                    <td :key="index">
                      <span>{{ wordList.name }}</span>
                    </td>
                    <td :key="index">
                      <span
                        >{{ wordList.words.length }}
                        {{ $t("play.wordLists.tableData.length") }}</span
                      >
                    </td>
                    <td :key="index">
                      <template v-if="wordListIndex === index">
                        <v-btn disabled>
                          {{ $t("play.wordLists.tableData.selected") }}
                        </v-btn>
                      </template>
                      <template v-else>
                        <v-btn @click="selectWordList(index)">
                          {{ $t("play.wordLists.tableData.select") }}
                        </v-btn>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </section>
          </section>
        </div>
      </main>
      <aside class="hidden ml-8 flex-auto">
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
    </PageContainer>
  </Page>
</template>
<script setup lang="ts">
import Page from "@/components/Pages/Page.vue";
import PageContainer from "@/components/Pages/PageContainer.vue";
import { WordList } from "@/models/screen/WordList";
import { ref, computed, watch, inject, Ref } from "vue";
import SidePanel from "@/components/SidePanel/SidePanel.vue";
import { WordListRecord } from "@/types/WordList";

const injectedWordLists = inject<Ref<WordList[]>>("wordLists")!;
const wordLists = injectedWordLists;

const wordListIndex = ref(0);
const selectedWordList = computed<WordList>(
  () => wordLists.value[wordListIndex.value],
);

function selectWordList(newWordListIndex: number) {
  wordListIndex.value = newWordListIndex;
  wordIndex.value = 0;
  gameState.value = "stand_by";
}

const wordIndex = ref(0);
const wordInputField = ref("");
const wordExpectedToInput = computed(() => {
  if (wordIndex.value === selectedWordList.value.words.length) return "";
  return selectedWordList.value.words[wordIndex.value].input;
});

type GameState = "stand_by" | "playing" | "accomplished";
const gameState = ref<GameState>("stand_by");

watch(wordInputField, () => {
  if (wordIndex.value === selectedWordList.value.words.length) {
    gameState.value = "accomplished";
    const newRecord: WordListRecord = {
      time: 3,
      length: selectedWordList.value.words.length,
      date: new Date().toLocaleString(),
    };
    selectedWordList.value.records.push(newRecord);
    wordInputField.value = "Accomplished!";
    return;
  }

  if (wordInputField.value === wordExpectedToInput.value) {
    wordIndex.value++;
    wordInputField.value = "";
  }
});
</script>
