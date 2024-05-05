<template>
  <div>
    <h1>Packages</h1>
    <ul>
      <li v-for="card in packages" :key="card.id">
        <h2>{{ card.name }}</h2>
        <p>{{ card.description }}</p>
        <p>Price: {{ card.price }} PKR</p>
        <p>Education Continuation: {{ card.education_continuation }}</p>
        <p>Income Continuation: {{ card.income_continuation }}</p>
        <p>Accidental Death Sum Assured: {{ card.accidental_death }}</p>
        <p>mHealth Subscription: {{ card.mHealth_subscription }}</p>
        <p>Major Medical Illness: {{ card.major_medical_illness }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const packages = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://hifazatprogram.efulife.com/v1/public/api/v1/packages');
    packages.value = response.data.data; // Assign response data array to packages
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
/* Add your styles here if needed */
</style>
