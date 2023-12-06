Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3</h1>',
    title: 'Title',
    person: {
      firstName: 'Sanya',
      lastName: 'Shustovsky',
      age: 30
    },
    items: [1, 2]
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    log(item) {
      console.log(item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2)
    }
  }
}).mount('#root')