<template>
    <div class="box">
      <a :href="url" class="jump-link" target="_blank">
        <div class="imgBox">
          <img :src="imgSrc" alt="图片">
        </div>
        <div class="text">{{ text }}</div>
      </a>
      <button @click.stop="handleDelete" class="delete-button">删除</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    imgSrc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  });
  
  const emit = defineEmits(['delete']);
  
  function handleDelete() {
    emit('delete');
  }
  </script>
  
  <style scoped>
  .box {
    width: 4rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .imgBox {
    padding: 0.6rem;
    border-radius: 20%;
    background-color: white;
    border: 2px solid #aaa;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .text {
    font-weight: bolder;
    text-align: center;
  }
  .delete-button {
    position: absolute;
    top: 0;
    right: 0.2rem;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 0.2rem;
    font-size: 0.8rem;
  }
  .jump-link {
    text-decoration: none;
    color: inherit;
  }
  </style>
  