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
      <transition name="slide" mode="out-in">
        <div 
          :key="activeTab"
          class="tab-pane"
        >
          <h2>{{ tabs[activeTab].title }}</h2>
          <p>{{ tabs[activeTab].content }}</p>
          
          <!-- 快捷方式区域 -->
          <div class="shortcuts-container" v-if="tabs[activeTab].shortcuts && tabs[activeTab].shortcuts.length > 0">
            <h3>常用网站</h3>
            <div class="shortcuts-grid">
              <ShortcutItem
                v-for="(shortcut, idx) in tabs[activeTab].shortcuts"
                :key="shortcut.id"
                :shortcut="shortcut"
                :index="idx"
                @edit="editShortcut"
                @delete="deleteShortcut"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ShortcutItem from './ShortcutItem.vue';

export default {
  name: 'TabContainer',
  components: {
    ShortcutItem
  },
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
    },
    editShortcut(shortcut) {
      // 暂时只打印信息，实际项目中可以打开编辑对话框
      console.log('编辑快捷方式:', shortcut);
    },
    deleteShortcut(id) {
      // 从当前标签页中删除快捷方式
      const currentTab = this.tabs[this.activeTab];
      if (currentTab.shortcuts) {
        currentTab.shortcuts = currentTab.shortcuts.filter(s => s.id !== id);
      }
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
  min-height: 400px;
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
  margin-bottom: 25px;
}

/* 切换动画 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 快捷方式容器 */
.shortcuts-container {
  margin-top: 20px;
}

.shortcuts-container h3 {
  color: #42b983;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 15px;
  max-width: 800px;
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
  
  .shortcuts-grid {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 10px;
  }
}
</style>