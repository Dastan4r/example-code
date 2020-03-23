<template>
  <button
    class="button-primary"
    @click.prevent="$emit('customerClick', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'uiButton'
  }
</script>

<style lang="scss" scoped>
  .button-primary {
    padding: 5px 10px;
    border: 1px solid #fff;
    background-color: #69abff;
    border-radius: 6px;
    font-size: 20px;
    color: #fff;
    transition: all 0.3s linear;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #69abff;
      border-color: #69abff;
    }
  }
</style>