<template>
  <div>
    <form @submit="submitUpdate">
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text">
      </div>

      <div>
        <label for="numberOfEmployees">Number of Employees</label>
        <input id="numberOfEmployees" v-model="numberOfEmployees" type="text">
      </div>

      <div>
        <label for="domain">Domain</label>
        <input id="domain" v-model="domain" type="text">
      </div>

      <div>
        <label for="subscriptionsPerEmployee">Subscriptions Per Employee</label>
        <input id="subscriptionsPerEmployee" v-model="subscriptionsPerEmployee" type="text">
      </div>

    </form>
  </div>
</template>

<script>

import CompanyService from '../services/CompanyService.vue'

export default {
  data() {
    return {
      name: '',
      numberOfEmployees: '',
      domain: '',
      subscriptionsPerEmployee: '',
    };
  },
  methods: {
    submitUpdate() {
      const updatedCompanyInfo = {
        name: this.name,
        numberOfEmployees: this.numberOfEmployees,
        domain: this.name,
        subscriptionsPerEmployee: this.subscriptionsPerEmployee,
      };
      // emit the data back up to the parent so it can update accordingly
      this.$emit('updateCompany', updatedCompanyInfo);
    },
  },
};
</script>
