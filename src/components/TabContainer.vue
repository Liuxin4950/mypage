<template>
  <div class="tab-container">
    <ul class="tab-nav">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
        class="tab-item"
      >
        {{ tab.title }}
      </li>
    </ul>
    
    <div class="tab-content">
      <div 
        v-for="(tab, index) in tabs" 
        :key="`content-${index}`"
        v-show="activeTab === index"
        class="tab-pane"
      >
        <h2>{{ tab.title }}</h2>
        <p>{{ tab.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContainer',
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => []
    },
    initialActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeTab: this.initialActive
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      // 触发自定义事件，通知父组件
      this.$emit('tab-change', index);
    }
  }
}
</script>

<style scoped>
.tab-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.tab-nav {
  display: flex;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}

.tab-item {
  flex: 1;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  border-bottom: 3px solid transparent;
}

.tab-item:hover {
  background-color: #e8e8e8;
}

.tab-item.active {
  background-color: white;
  color: #42b983;
  border-bottom: 3px solid #42b983;
}

.tab-content {
  padding: 30px;
}

.tab-pane h2 {
  color: #42b983;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.tab-pane p {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #666;
}

@media (max-width: 768px) {
  .tab-item {
    padding: 12px 10px;
    font-size: 1rem;
  }
  
  .tab-content {
    padding: 20px;
  }
  
  .tab-pane h2 {
    font-size: 1.3rem;
  }
  
  .tab-pane p {
    font-size: 1rem;
  }
}
</style>