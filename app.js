const TodoItem = {
  props: ['todo', 'index'],
  template: `<li>{{ index + 1 }}. {{ todo.text }}</li>`
}

const App = {
  components:{
    TodoItem
  },
  data() {
    return {
      counter: 0,
      myTitle: 'Счётчик:',
      boolean: true,
      message: 'Привет, Vue.js!',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    toggleBoolean() {
      this.boolean = !this.boolean
    },
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(App).mount('#root')