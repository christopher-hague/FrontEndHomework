<template>
  <div>
    <ol v-for="(val, i) in company" v-bind:key="i">
      <ol v-if="i === 'id' || i === 'name'">
        {{ i }}: {{ val }}
      </ol>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      default() {
        return {};
      },
    },
  },
};
</script>
