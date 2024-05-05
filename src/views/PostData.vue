<template>
  <div class="Claim-form-Container px-6 mt-6">
    <div class="mb-6">
      <label for="large-input" class="block mb-2 text-[12px] text-white font-custom">Please Enter Your Mobile Number</label>
      <input v-model="getNumber" placeholder="03115014142" type="number" id="large-input" class="placeholder-gray-400 block bg-inherit w-full bg-none py-3 px-2 text-black border border-white rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
                    
    <div class="block mb-6">
      <label for="product" class="block mb-2 text-white text-[12px] font-custom">Select Product</label>
      <select required v-model="getProduct" id="product" class="border border-gray-300 text-sm font-bold rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-[#7F1D53] dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected value="Haafiz Silver 3.15">Haafiz Silver 3.15</option>
        <option value="Haafiz Gold 4.40">Haafiz Gold 4.40</option>
        <option value="Haafiz Platinum 5.98">Haafiz Platinum 5.98</option>
        <option value="Haafiz Plus Silver 4.40">Haafiz Plus Silver 4.40</option>
        <option value="Haafiz Plus Gold 6.20">Haafiz Plus Gold 6.20</option>
        <option value="Haafiz Plus Gold 8.80">Haafiz Plus Gold 8.80</option>
      </select>
    </div>
      
    <button type="submit" @click="submitForm" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const getNumber = ref('');
const getProduct = ref('');

const submitForm = async () => {
  try {
    if (!getNumber.value || !getProduct.value) {
      throw new Error('Please fill in all the fields.');
    }

    const response = await axios.post(`http://crm.hellodoctor.com.pk/api/CRM/Subscribe?msisdn=${getNumber.value}&package=${getProduct.value}`);
    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false, 
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          const textarea = document.getElementById('postBody');
          textarea.value = response.data.body;
        }
      });

      toast.fire({
        icon: 'success',
        title: 'Post Successful!'
      });
    } else if (response.status === 500) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Internal server error. Please try again later.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
};
</script>
