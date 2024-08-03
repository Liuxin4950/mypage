<template>
    <div class="search-container">
        <div class="search-box">
            <select v-model="selectedEngine">
                <option value="google">Google
                    <img class="search-icon" src="../assets/icon/google.png" alt="">
                </option>
                <option value="bing">Bing</option>
                <option value="duckduckgo">DuckDuckGo</option>
            </select>
            <input type="text" v-model="query" @keyup.enter="search" placeholder="输入搜索内容" />
            <button class="search-but" @click="search">
                <img class="search-icon" src="../assets/icon/search.png" alt="">
            </button>

        </div>


        <!-- 显示自定义弹窗 -->
        <Modal v-if="showModal" message="搜索框不能为空" @close="showModal = false" />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../Store.js'
import Modal from './modal.vue'

const searchStore = useSearchStore()

const selectedEngine = ref(searchStore.selectedEngine)
const query = ref(searchStore.query)
const showModal = ref(false)

const search = () => {
    if (!query.value) {

        showModal.value = true
        return
    }

    searchStore.setSelectedEngine(selectedEngine.value)
    searchStore.setQuery(query.value)
    searchStore.search()
}
</script>


<style scoped>
* {
    border: none;
    outline: none;
    font-size: 14px;
}

.search-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.search-box {
    width: 70%;
    border: 1px solid #999;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #aaa;
    background-color: rgba(255, 255, 255, .9);
    display: flex;
    align-items: center;
    overflow: hidden;
    /* padding: 2px; */



}

select {
    width: 20%;
    height: 50px;
    background: none;
    /* width: 90px; */
    padding: 10px;
    font-size: 16px;
}

input {
    width: calc(80% - 50px);
    height: 50px;
    padding: 10px;
    font-size: 15px;
    background: none;

}

.search-but {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background: none;
}



/* .search-but:hover,
.select:hover {
    background-color: #f0f0f0;
} */

.search-icon {
    width: 30px;
    height: 30px;
}
@media (min-width: 1024px) {
    
  /* 在这里添加媒体查询的样式 */
  .search-box {
    width: 40%;
  }
}
</style>