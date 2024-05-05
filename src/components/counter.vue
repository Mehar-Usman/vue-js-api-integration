<template>
    <div class="flex flex-col items-center justify-center">
        <p class="mt-3 text-xl"> Count:{{counter.count}}</p>
        <p class="mt-3 text-xl">Double Count: {{counter.doubleCount}}</p>
        <div class="flex gap-3 mt-3">
            <button @click="counter.increment()" class="p-3 bg-blue-500 text-white text-xl rounded" >Increment ++</button>
            <button @click="counter.decrement()" class="p-3 bg-blue-500 text-white text-xl rounded" >Decrement --</button>
        </div>
    </div>
</template>

<script setup>
import {useCounterStore} from '../store/counter'
const counter = useCounterStore()
</script>

<style lang="scss" scoped>

</style>