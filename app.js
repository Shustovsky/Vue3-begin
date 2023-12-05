const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeNote(index, event) {
      this.notes.splice(index, 1)
      console.log(event)
    },
    // inputKeyPress(event){
    //   if (event.key === 'Enter'){
    //     this.addNewNote()
    //   }
    // }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      console.log(value)
    },
    // !!!!!!!!!Не работает почему то((((
    notes(value) {
      console.log('notes', value)
    }
  }
}

const app = Vue.createApp(App)
app.mount('#root')