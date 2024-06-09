export const i18n = {
  legacy: false,
  locale: "ja",
  fallbackLocale: "en",
  messages: {
    ja: {
      create: {
        pageTitle: "作成",
        pageDescription:
          "このページでは単語リストを新規作成することができます。",
        table: {
          word: "単語",
          length: "文字数",
          actions: "操作",
        },
        tableData: {
          length: "文字",
          actions: {
            moveUp: "↑",
            moveDown: "↓",
            delete: "×",
            add: "追加",
          },
        },
        createButton: "作成",
        cancelButton: "キャンセル",
      },
      edit: {
        pageTitle: "編集",
        pageDescription: "このページでは単語リストを編集することができます。",
        table: {
          name: "リスト名",
          length: "単語数",
          records: "記録数",
          createdAt: "未実装",
          updatedAt: "未実装",
          actions: "操作",
        },
        tableData: {
          length: "単語",
          records: "レコード",
          createdAt: "未実装",
          updatedAt: "未実装",
          actions: {
            edit: "編集",
          },
        },
        updateButton: "更新",
        cancelButton: "キャンセル",
      },
      editWordList: {
        pageTitle: "単語リスト",
        pageDescription: "編集する単語リストを選択し、編集ページに移動します。",
        table: {
          word: "単語",
          length: "文字数",
          actions: "操作",
        },
        tableData: {
          length: "文字",
          actions: {
            moveUp: "↑",
            moveDown: "↓",
            delete: "×",
            add: "追加",
          },
        },
        updateButton: "更新",
        cancelButton: "キャンセル",
      },
      play: {
        records: {
          title: "記録",
          table: {
            no: "No.",
            time: "所要時間",
            length: "単語数",
            date: "練習日時",
          },
          tableData: {
            time: "秒",
            length: "単語",
          },
        },
        wordLists: {
          title: "単語リスト",
          table: {
            name: "リスト名",
            length: "単語数",
            actions: "操作",
          },
          tableData: {
            length: "単語",
            select: "選択",
            selected: "選択済み",
          },
        },
      },
      records: {
        pageTitle: "記録",
        PageDescription: "各単語リストの記録を確認することができます。",
        table: {
          no: "No.",
          time: "所要時間",
          typo: "ミス数",
          length: "単語数",
          date: "練習日時",
          actions: "操作",
        },
        tableData: {
          time: "秒",
          typo: "未実装",
          length: "単語",
          actions: {
            delete: "削除",
          },
        },
      },
      ui: {
        navbarList: {
          home: "ホーム",
          play: "遊ぶ",
          records: "記録",
          create: "作成",
          edit: "編集"  
        },
        navList: {
          nav: {
            headerTitle: "ナビ",
            home: "ホーム",
            play: "遊ぶ",
            records: "記録",
            create: "作成",
            edit: "編集"
          },
          lang: {
            headerTitle: "言語"
          }
        }
      },
    },
    en: {
      create: {
        pageTitle: "Create",
        pageDescription: "You can create your own word list in this page.",
        table: {
          word: "Word",
          length: "Length",
          actions: "Actions",
        },
        tableData: {
          length: "characters",
          actions: {
            moveUp: "↑",
            moveDown: "↓",
            delete: "×",
            add: "Add",
          },
        },
        createButton: "Create",
        cancelButton: "Cancel",
      },
      edit: {
        pageTitle: "Edit",
        pageDescription: "You can edit your word list in this page.",
        table: {
          name: "Name",
          length: "Words",
          records: "Records",
          createdAt: "未実装",
          updatedAt: "未実装",
          actions: "Actions",
        },
        tableData: {
          length: "length",
          records: "records",
          createdAt: "未実装",
          updatedAt: "未実装",
          actions: {
            edit: "edit",
          },
        },
        updateButton: "update",
        cancelButton: "cancel",
      },
      editWordList: {
        pageTitle: "Word lists",
        pageDescription:
          "Select a word list that you want to edit and go to the edit page.",
        table: {
          word: "Words",
          length: "Length",
          actions: "Actions",
        },
        tableData: {
          length: "characters",
          actions: {
            moveUp: "↑",
            moveDown: "↓",
            delete: "×",
            add: "Add",
          },
        },
        updateButton: "Update",
        cancelButton: "Cancel",
      },
      play: {
        records: {
          title: "Records",
          table: {
            no: "No.",
            time: "Time",
            length: "Length",
            date: "Date",
          },
          tableData: {
            time: "seconds",
            length: "words",
          },
        },
        wordLists: {
          title: "Word lists",
          table: {
            name: "Name",
            length: "Length",
            actions: "Actions",
          },
          tableData: {
            length: "words",
            select: "play",
            selected: "selected",
          },
        },
      },
      records: {
        pageTitle: "Records",
        PageDescription: "You can check the results of your practicing.",
        table: {
          no: "No.",
          time: "Time",
          typo: "Typo",
          length: "Length",
          date: "Date",
          actions: "Actions",
        },
        tableData: {
          time: "seconds",
          typo: "未実装",
          length: "words",
          actions: {
            delete: "delete",
          },
        },
      },
      ui: {
        navbarList: {
          home: "Home",
          play: "Play",
          records: "Records",
          create: "Create",
          edit: "Edit"  
        },
        navList: {
          nav: {
            headerTitle: "Launguages",
            home: "Home",
            play: "Play",
            records: "Records",
            create: "Create",
            edit: "Edit"
          },
          lang: {
            headerTitle: "Launguages"
          }
        }
      }
    },
  },
}
