<template>
  <div>
    <h1>View Companies</h1>
    <ol v-for="company in companies" v-bind:key="company.id">
      <ViewCompany v-bind:company="company" />
    </ol>
  </div>
</template>

<script>

import ViewCompany from './ViewCompany.vue';

export default {
  name: 'viewcompanies',
  components: {
    ViewCompany,
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
