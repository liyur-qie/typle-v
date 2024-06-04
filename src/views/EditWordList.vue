<template>
  <AppContainer class="flex justify-center">
    <main class="w-11/12 bg-white p-16 pb-12">
      <section>
        <PageTitle>編集</PageTitle>
        <PageDescription>このページでは単語リストを編集することができます。</PageDescription>
      </section>
      <section class="mt-8">
        <v-text-field v-model="wordListName" label="単語リスト名" variant="underlined"></v-text-field>
        <v-table>
          <thead>
            <tr>
              <th>No.</th>
              <th class="w-4/12">Word</th>
              <th>Length</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(word, index) in wordListWords" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <v-text-field v-model="wordListWords[index]" variant="underlined"></v-text-field>
              </td>
              <td>{{ word.length }} characters</td>
              <td>
                <v-btn @click="moveWordUp(index)" class="mr-2">UP</v-btn>
                <v-btn @click="moveWordDown(index)" class="mr-2">DOWN</v-btn>
                <v-btn @click="deleteWord(index)">DELETE</v-btn>
              </td>
            </tr>
            <tr>
              <td>{{ wordListWords.length + 1 }}</td>
              <td>
                <v-text-field v-model="newWord" label="新規単語を入力" variant="underlined"></v-text-field>
              </td>
              <td>{{ newWord.length }} characters</td>
              <td>
                <v-btn @click="addNewWord">Add</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </section>
      <section class="mt-8">
        <v-btn @click="updateWordList" elevation="2" class="mr-2">Update</v-btn>
        <RouterLink to="/edit">
          <v-btn elevation="2">Cancel</v-btn>
        </RouterLink>
      </section>
    </main>
  </AppContainer>
</template>
<script setup lang="ts">
import AppContainer from '@/components/AppContainer/AppContainer.vue';
import PageDescription from '@/components/Pages/PageDescription.vue';
import PageTitle from '@/components/Pages/PageTitle.vue';
import { WordList } from '@/models/screen/WordList';
import { ref } from 'vue';


const wordListName = ref("Example 3")
const wordListWords = ref<string[]>(["vue", "react", "svelte"])
const newWord = ref("")

function addNewWord() {
  wordListWords.value.push(newWord.value)
  newWord.value = ""
}

function moveWordUp(index: number){
  if(index === 0) return
  const swapWord = wordListWords.value[index - 1]
  const moveWord = wordListWords.value[index]
  wordListWords.value[index] = swapWord
  wordListWords.value[index - 1] = moveWord
}

function moveWordDown(index: number){
  if(index === wordListWords.value.length - 1) return
  const swapWord = wordListWords.value[index + 1]
  const moveWord = wordListWords.value[index]
  wordListWords.value[index] = swapWord
  wordListWords.value[index + 1] = moveWord

}

function deleteWord(index: number){
  wordListWords.value.splice(index, 1)
}

function updateWordList(){
  const newWordList = new WordList()
  newWordList.name = wordListName.value
  newWordList.words = wordListWords.value.map(word => ({
    display: word,
    input: word
  }))
  newWordList.info.updatedAt = new Date().toLocaleString()
}
</script>