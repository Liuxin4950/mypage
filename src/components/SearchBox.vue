<template>
  <div class="search-box">
    <div class="search-input-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="搜索网站或输入网址..."
        class="search-input"
        @keyup.enter="performSearch"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <button class="search-button" @click="performSearch">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="#666" stroke-width="2"/>
          <path d="M21 21L16.65 16.65" stroke="#666" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      searchQuery: '',
      isFocused: false
    }
  },
  methods: {
    performSearch() {
      if (this.searchQuery.trim()) {
        let url = this.searchQuery.trim();
        
        // 检查是否是有效的URL格式，如果不是则添加https://
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          if (url.includes('.') && !url.includes(' ')) {
            url = 'https://' + url;
          } else {
            // 如果不是URL格式，则执行搜索引擎搜索
            url = `https://www.google.com/search?q=${encodeURIComponent(this.searchQuery)}`;
          }
        }
        
        window.open(url, '_blank');
      }
    }
  }
}
</script>

<style scoped>
.search-box {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  animation: slideInDown 0.5s ease;
}

.search-input-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.search-input {
  width: 100%;
  padding: 15px 60px 15px 20px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.search-input:focus {
  border-color: #42b983;
  box-shadow: 0 2px 15px rgba(66, 185, 131, 0.2);
  transform: translateY(-2px);
}

.search-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: #42b983;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.search-button:hover {
  background: #359c6d;
  transform: translateY(-50%) scale(1.05);
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .search-box {
    margin: 15px 0;
  }
  
  .search-input {
    padding: 12px 50px 12px 15px;
    font-size: 14px;
  }
  
  .search-button {
    width: 35px;
    height: 35px;
  }
}
</style>