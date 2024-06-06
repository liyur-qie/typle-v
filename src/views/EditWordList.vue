<template>
  <Page>
    <PageContainer>
      <main class="bg-white p-16 pb-12">
        <section>
          <PageTitle>{{ $t('editWordList.pageTitle') }}</PageTitle>
          <PageDescription>{{ $t('editWordList.pageDescription') }}</PageDescription>
        </section>
        <section class="mt-8">
          <v-text-field v-model="wordListName" label="単語リスト名" variant="underlined"></v-text-field>
          <v-table>
            <thead>
              <tr>
                <th>No.</th>
                <th class="w-4/12">{{ $t('editWordList.table.word') }}</th>
                <th>{{ $t('editWordList.table.length') }}</th>
                <th>{{ $t('editWordList.table.actions') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(word, index) in wordListWords" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <v-text-field v-model="wordListWords[index]" variant="underlined"></v-text-field>
                </td>
                <td>{{ word.length }} {{ $t('editWordList.tableData.length') }}</td>
                <td>
                  <v-btn @click="moveWordUp(index)" class="mr-2">{{ $t('editWordList.tableData.actions.moveUp') }}</v-btn>
                  <v-btn @click="moveWordDown(index)" class="mr-2">{{ $t('editWordList.tableData.actions.moveDown') }}</v-btn>
                  <v-btn @click="deleteWord(index)">{{ $t('editWordList.tableData.actions.delete') }}</v-btn>
                </td>
              </tr>
              <tr>
                <td>{{ wordListWords.length + 1 }}</td>
                <td>
                  <v-text-field v-model="newWord" label="新規単語を入力" variant="underlined"></v-text-field>
                </td>
                <td>{{ newWord.length }} {{ $t('editWordList.tableData.length') }}</td>
                <td>
                  <v-btn @click="addNewWord">Add</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </section>
        <section class="mt-8">
          <v-btn @click="updateWordList" elevation="2" class="mr-2">{{ $t('editWordList.updateButton') }}</v-btn>
          <RouterLink to="/edit">
            <v-btn elevation="2">{{ $t('editWordList.cancelButton') }}</v-btn>
          </RouterLink>
        </section>
      </main>

    </PageContainer>
  </Page>
</template>
<script setup lang="ts">
import Page from '@/components/Pages/Page.vue';
import PageContainer from '@/components/Pages/PageContainer.vue';
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