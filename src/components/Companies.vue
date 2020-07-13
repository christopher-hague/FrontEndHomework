<template>
  <div>
    <h1>Companies</h1>
    <div>
      <ol v-for="company in companies" v-bind:key="company.id">
        <Company v-bind:company="company" />
      </ol>
    </div>
  </div>
</template>

<script>

import Company from './Company.vue';

export default {
  components: {
    Company,
  },
  props: {
    companies: {
      default() {
        return [];
      },
    },
  },
};
</script>
