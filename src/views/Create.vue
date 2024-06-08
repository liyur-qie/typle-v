<template>
  <Page>
    <PageContainer>
      <main class="bg-white p-16 pb-12">
        <section>
          <PageTitle>{{ $t("create.pageTitle") }}</PageTitle>
          <PageDescription>{{ $t("create.pageDescription") }}</PageDescription>
        </section>
        <section class="mt-8">
          <v-text-field
            v-model="wordListName"
            label="単語リスト名"
            variant="underlined"
          />
          <v-table>
            <thead>
              <tr>
                <th>No.</th>
                <th class="w-4/12">
                  {{ $t("create.table.word") }}
                </th>
                <th>{{ $t("create.table.length") }}</th>
                <th>{{ $t("create.table.actions") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(word, index) in wordListWords" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <v-text-field
                    v-model="wordListWords[index]"
                    variant="underlined"
                  />
                </td>
                <td>{{ word.length }} {{ $t("create.tableData.length") }}</td>
                <td>
                  <v-btn class="mr-2" @click="moveWordUp(index)">
                    {{ $t("create.tableData.actions.moveUp") }}
                  </v-btn>
                  <v-btn class="mr-2" @click="moveWordDown(index)">
                    {{ $t("create.tableData.actions.moveDown") }}
                  </v-btn>
                  <v-btn @click="deleteWord(index)">
                    {{ $t("create.tableData.actions.delete") }}
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td>{{ wordListWords.length + 1 }}</td>
                <td>
                  <v-text-field
                    v-model="newWord"
                    label="新規単語を入力"
                    variant="underlined"
                  />
                </td>
                <td>
                  {{ newWord.length }} {{ $t("create.tableData.length") }}
                </td>
                <td>
                  <v-btn @click="addNewWord">
                    {{ $t("create.tableData.actions.add") }}
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </section>
        <section class="mt-8">
          <v-btn elevation="2" class="mr-2" @click="addWordList">
            {{ $t("create.createButton") }}
          </v-btn>
          <v-btn elevation="2">
            {{ $t("create.cancelButton") }}
          </v-btn>
        </section>
      </main>
    </PageContainer>
  </Page>
</template>
<script setup lang="ts">
import Page from "@/components/Pages/Page.vue"
import PageContainer from "@/components/Pages/PageContainer.vue"
import PageDescription from "@/components/Pages/PageDescription.vue"
import PageTitle from "@/components/Pages/PageTitle.vue"
import { WordList } from "@/models/screen/WordList"
import { Ref, inject, ref } from "vue"

const wordListName = ref("Example 3")
const wordListWords = ref<string[]>(["vue", "react", "svelte"])
const newWord = ref("")

const injectedWordLists = inject<Ref<WordList[]>>("wordLists")!
const wordLists = injectedWordLists

function addNewWord() {
  wordListWords.value.push(newWord.value)
  newWord.value = ""
}

function moveWordUp(index: number) {
  if (index === 0) return
  const swapWord = wordListWords.value[index - 1]
  const moveWord = wordListWords.value[index]
  wordListWords.value[index] = swapWord
  wordListWords.value[index - 1] = moveWord
}

function moveWordDown(index: number) {
  if (index === wordListWords.value.length - 1) return
  const swapWord = wordListWords.value[index + 1]
  const moveWord = wordListWords.value[index]
  wordListWords.value[index] = swapWord
  wordListWords.value[index + 1] = moveWord
}

function deleteWord(index: number) {
  wordListWords.value.splice(index, 1)
}

function addWordList() {
  const newWordList = new WordList()
  newWordList.name = wordListName.value
  newWordList.words = wordListWords.value.map((word) => ({
    display: word,
    input: word,
  }))
  newWordList.info.createdAt = new Date().toLocaleString()
  wordLists.value.push(newWordList)
}
</script>
