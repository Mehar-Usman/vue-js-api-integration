<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="postData.title" required>
        <button type="submit">Submit</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const postData = ref({
    title: ''
  });
  const successMessage = ref('');
  
  async function submitForm() {
    try {
      const response = await axios.post('http://localhost:3000/posts', postData.value);
      console.log('Post successful:', response.data);
      successMessage.value = 'Data posted successfully!';
      // You can also reset the form fields if needed
      postData.value.title = '';
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error
    }
  }
  </script>
  