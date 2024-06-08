<template>
  <Page>
    <PageContainer>
      <main class="bg-white p-16 pb-12">
        <PageTitle>{{ $t("edit.pageTitle") }}</PageTitle>
        <PageDescription>{{ $t("edit.pageDescription") }}</PageDescription>
        <section class="mt-12">
          <v-table class="mt-4">
            <thead>
              <tr>
                <th>{{ $t("edit.table.name") }}</th>
                <th>{{ $t("edit.table.length") }}</th>
                <th>{{ $t("edit.table.records") }}</th>
                <th>{{ $t("edit.table.createdAt") }}</th>
                <th>{{ $t("edit.table.updatedAt") }}</th>
                <th>{{ $t("edit.table.actions") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(wordList, index) in wordLists" :key="index">
                <td>{{ wordList.name }}</td>
                <td>
                  {{ wordList.words.length }} {{ $t("edit.tableData.length") }}
                </td>
                <td>
                  {{ wordList.records.length }}
                  {{ $t("edit.tableData.records") }}
                </td>
                <td>{{ $t("edit.tableData.createdAt") }}</td>
                <td>{{ $t("edit.tableData.updatedAt") }}</td>
                <td>
                  <RouterLink :to="'/edit/' + wordList.name">
                    <v-btn>{{ $t("edit.tableData.actions.edit") }}</v-btn>
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </v-table>
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
import { Ref, inject } from "vue"

const injectedWordLists = inject<Ref<WordList[]>>("wordLists")!
const wordLists = injectedWordLists
</script>
