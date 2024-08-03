<script setup lang="ts">
import { ref, watch } from 'vue';
import Search from "./components/search.vue";
import Times from "./components/time.vue";
import JumpBox from "./components/jumpBox.vue";
import TVimg from "./assets/icon/TV.svg";
import tj from './assets/icon/tj.svg';
import Modal from './components/modal.vue';

const showModal = ref(false)
// 控制添加面板的显示
const showAddContainer = ref(false);

// 输入框的绑定
const newJumpBox = ref({ url: '', imgSrc: TVimg, text: '' });

// 从本地存储加载 JumpBox 列表
const loadJumpBoxItems = () => {
  const savedItems = localStorage.getItem('jumpBoxItems');
  return savedItems ? JSON.parse(savedItems) : [];
};

const jumpBoxItems = ref(loadJumpBoxItems());

// 保存 JumpBox 列表到本地存储
const saveJumpBoxItems = () => {
  localStorage.setItem('jumpBoxItems', JSON.stringify(jumpBoxItems.value));
};

// 点击添加按钮
function handleAddClick() {
  showAddContainer.value = !showAddContainer.value;
}

// 添加 JumpBox 组件到列表中
function addJumpBox() {
  if (newJumpBox.value.url && newJumpBox.value.text) {
    jumpBoxItems.value.push({ ...newJumpBox.value });
    newJumpBox.value = { url: '', imgSrc: TVimg, text: '' }; // 重置输入框
    showAddContainer.value = false;
    saveJumpBoxItems(); // 保存到本地存储
  }else{
    showModal.value = true
  }
}

// 删除 JumpBox 组件
function deleteJumpBox(index: number) {
  jumpBoxItems.value.splice(index, 1);
  saveJumpBoxItems(); // 保存到本地存储
}

// 监控 jumpBoxItems 变化并保存到本地存储
watch(jumpBoxItems, saveJumpBoxItems, { deep: true });
</script>

<template>
  <div class="air">
    <div class="search-box">
      <Times />
      <Search />
      <div class="TV-Container">
        <template v-for="(item, index) in jumpBoxItems" :key="index">
          <JumpBox
            :url="item.url"
            :imgSrc="item.imgSrc"
            :text="item.text"
            @delete="deleteJumpBox(index)"
          />
        </template>
        <div class="box" @click="handleAddClick">
          <div class="imgBox">
            <img :src="tj" alt="图片">
          </div>
          <div class="text">添加</div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="addContainer" v-if="showAddContainer">
      <div class="f fb">
        <div class="w2">添加卡片</div>
        <img @click="handleAddClick" class="i4" src="./assets/icon/gb.svg" alt="">
      </div>
      <div class="addContainer-input f fd fa">
        <input v-model="newJumpBox.url" placeholder="输入 URL" />
        <input v-model="newJumpBox.text" placeholder="输入文本" />
        <button class="b1" @click="addJumpBox">确认添加</button>
        <Modal v-if="showModal" message="输入框不能为空" @close="showModal = false" />
      
      </div>
      <div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.addContainer {
  width: 70%;
  height: 50%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, .9);
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(25%) translateY(50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.air {
  width: 100%;
  border: 2px solid #000;
  height: 100vh;
  background: url('./assets/biz.avif') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.TV-Container {
  margin-top: 1rem;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

input {
  margin: 0.5rem;
  padding: 0.5rem;
  width: 80%;
}
@media (min-width: 1024px) {
    
    /* 在这里添加媒体查询的样式 */
    .TV-Container {
      width: 40%;
    }
  }
</style>
