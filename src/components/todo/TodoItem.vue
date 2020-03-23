<template>
  <div>
    <p>{{this.todo.body[index].todo}}</p>
  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      todo: Object,
      index: Number
    }
  }
</script>

<style scoped>

</style>