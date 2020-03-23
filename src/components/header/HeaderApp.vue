<template>
  <header class="header-app">
    <h1>Todo Application</h1>

    <div class="header-app-navigation">
      <uiButton
        @customerClick="goToCreateTodo()"
      >
        Create Task
      </uiButton>
      <uiButton
        @customerClick="goToMainPage()"
      >Back</uiButton>
    </div>

  </header>
</template>

<script>
  import uiButton from "../ui/uiButton";

  export default {
    name: "Header",
    components: {
      uiButton
    },
    methods: {
      goToMainPage () {
        this.$router.push('/')
      },
      goToCreateTodo () {
        this.$router.push('/create')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-app {
    width: 100%;
    padding: 20px 0;
    position: sticky;
    top: 0;
    background-color: #6cadff;
    display: flex;
    justify-content: space-around;

    &-navigation {
      button {
        &:first-child {
          margin-right: 20px;
        }
      }
    }

    h1 {
      color: #fff;
      margin: 0;
    }
  }
</style>
