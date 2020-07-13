<template>
  <!-- <h1>This is the home page</h1> -->
  <Companies :companies="companies" />
</template>

<script>
import Companies from '../components/Companies.vue';
import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  components: {
    Companies,
  },
  data() {
    return {
      companies: [],
    };
  },
  created() {
    const getCompanies = CompanyService.getAll();
    // eslint-disable-next-line
    getCompanies.then((response) => this.companies = response)
  },
};
</script>
