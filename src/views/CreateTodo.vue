<template>
  <section>
    <form class="create-todos">
      <p>Enter title to your task:</p>
      <input
        type="text"
        v-model="title"
      >
      <p>Add todo to your task:</p>
      <input
        type="text"
        v-model="todoItem"
      >
      <uiButton
        @customerClick="addTodo()"
      >Add todo to task
      </uiButton>
    </form>

    <TodoItem
      v-for="(todo, index) in allTodo"
      :key="index"
      :todo="todo"
      :index="index"
    >
    </TodoItem>

  </section>
</template>

<script>
  import uiButton from "../components/ui/uiButton";
  import TodoItem from "../components/todo/TodoItem";

  export default {
    name: "CreateTodo",
    components: {
      uiButton, TodoItem
    },
    data() {
      return {
        title: '',
        body: [],
        todoItem: ''
      }
    },
    methods: {
      addTodo() {
        const todo = {
          todo: this.todoItem,
          id: Date.now()
        }

        this.body.push(todo)
        this.todoItem = ''

        const task = {
          title: this.title,
          body: this.body,
          id: Date.now()
        }
        this.$store.dispatch('create', task)
      }
    },
    computed: {
      allTodo() {
        return this.$store.getters.get
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    .create-todos {
      flex-direction: column;
      display: flex;
      width: 30%;
      margin: 0 auto;

      input {
        min-width: 180px;
        border-radius: 6px;
        background-color: transparent;
        border: 1px solid #6cadff;
        height: 30px;
        padding: 0 10px;

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>