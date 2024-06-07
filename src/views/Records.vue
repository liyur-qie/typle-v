<template>
  <Page>
    <PageContainer>
      <main class="bg-white p-16 pb-12">
        <PageTitle>{{ $t('records.pageTitle') }}</PageTitle>
        <PageDescription>{{ $t('records.PageDescription') }}</PageDescription>
        <section
          v-for="(wordList, index) in wordLists"
          :key="index"
          class="mt-12"
        >
          <h2 class="text-2xl">
            {{ wordList.name }}
          </h2>
          <v-table class="mt-4">
            <thead>
              <tr>
                <th>No.</th>
                <th>{{ $t('records.table.time') }}</th>
                <th>{{ $t('records.table.typo') }}</th>
                <th>{{ $t('records.table.length') }}</th>
                <th>{{ $t('records.table.date') }}</th>
                <th>{{ $t('records.table.actions') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(record, i) in wordList.records"
                :key="i"
              >
                <td class="text-center">
                  {{ index + 1 }}
                </td>
                <td>{{ record.time }} {{ $t('records.tableData.time') }}</td>
                <td>未実装</td>
                <td>{{ record.length }} {{ $t('records.tableData.length') }}</td>
                <td>{{ record.date }}</td>
                <td>
                  <v-btn
                    size="small"
                    @click="deleteRecord(index)"
                  >
                    {{ $t('records.tableData.actions.delete') }}
                  </v-btn>
                </td>
              </tr>
              <p
                v-if="wordList.records.length === 0"
                class="text-sm mt-4"
              >
                まだ記録がありません。
              </p>
            </tbody>
          </v-table>
        </section>
      </main>
    </PageContainer>
  </Page>
</template>
<script setup lang="ts">
import Page from '@/components/Pages/Page.vue'
import PageContainer from '@/components/Pages/PageContainer.vue'
import PageDescription from "@/components/Pages/PageDescription.vue"
import PageTitle from '@/components/Pages/PageTitle.vue'
import { WordList } from '@/models/screen/WordList'
import { Ref, inject } from 'vue'

const injectedWordLists = inject<Ref<WordList[]>>('wordLists')!
const wordLists = injectedWordLists

function deleteRecord(recordIndex: number) {
  console.log("delete record", recordIndex)
}
</script>