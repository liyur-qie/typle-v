<template>
  <AppContainer class="flex justify-center">
    <main class="w-11/12 bg-white p-16 pb-12">
      <PageTitle>単語リスト</PageTitle>
      <PageDescription>編集する単語リストを選択し、編集ページに移動します。</PageDescription>
      <section class="mt-12">
        <v-table class="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Length</th>
              <th>Records</th>
              <th>Create At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(wordList, index) in wordLists" :key="index">
              <td>{{ wordList.name }}</td>
              <td>{{ wordList.words.length }} words</td>
              <td>{{ wordList.records.length }} records</td>
              <td>未実装</td>
              <td>未実装</td>
              <td>
                <RouterLink :to="'/edit/' + wordList.name">
                  <v-btn size="small">edit</v-btn>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </v-table>
      </section>
    </main>
  </AppContainer>
</template>
<script setup lang="ts">
import getWordLists from '@/api/getWordLists';
import AppContainer from '@/components/AppContainer/AppContainer.vue';
import PageDescription from "@/components/Pages/PageDescription.vue";
import PageTitle from '@/components/Pages/PageTitle.vue';
import { WordList } from '@/models/screen/WordList';
import { ref } from 'vue';

const wordLists = ref<WordList[]>(getWordLists())
</script>