<template>
  <Page>
    <PageContainer>
      <main class="bg-white p-16 pb-12">
        <PageTitle>記録</PageTitle>
        <PageDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</PageDescription>
        <section v-for="(wordList, index) in wordLists" :key="index" class="mt-12">
          <h2 class="text-2xl">{{ wordList.name }}</h2>
          <v-table class="mt-4">
            <thead>
              <tr>
                <th>No.</th>
                <th>Time</th>
                <th>Typo</th>
                <th>Length</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in wordList.records">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ record.time }} seconds</td>
                <td>未実装</td>
                <td>{{ record.length }} words</td>
                <td>{{ record.date }}</td>
                <td>
                  <v-btn size="small" @click="deleteRecord(index)">Delete</v-btn>
                </td>
              </tr>
              <p v-if="wordList.records.length === 0" class="text-sm mt-4">まだ記録がありません。</p>
            </tbody>
          </v-table>
        </section>
      </main>
    </PageContainer>
  </Page>
</template>
<script setup lang="ts">
import Page from '@/components/Pages/Page.vue';
import PageContainer from '@/components/Pages/PageContainer.vue';
import getWordLists from '@/api/getWordLists';
import PageDescription from "@/components/Pages/PageDescription.vue";
import PageTitle from '@/components/Pages/PageTitle.vue';
import { WordList } from '@/models/screen/WordList';
import { ref } from 'vue';

const wordLists = ref<WordList[]>(getWordLists())

function deleteRecord(recordIndex: number) {
  console.log("delete record", recordIndex)
}
</script>