<template>
  <div 
    class="shortcut-item"
    @contextmenu.prevent="showContextMenu"
    @click="openLink"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="shortcut-icon">
      <img :src="shortcut.icon" :alt="shortcut.title" v-if="shortcut.icon">
      <div v-else class="default-icon">{{ shortcut.title.charAt(0) }}</div>
    </div>
    <div class="shortcut-title">{{ shortcut.title }}</div>
    
    <!-- 右键菜单 -->
    <div 
      v-if="showMenu" 
      class="context-menu"
      :style="{ top: menuPosition.y + 'px', left: menuPosition.x + 'px' }"
    >
      <div class="menu-item" @click="editShortcut">修改</div>
      <div class="menu-item" @click="deleteShortcut">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortcutItem',
  props: {
    shortcut: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      menuPosition: { x: 0, y: 0 }
    }
  },
  methods: {
    openLink() {
      if (this.shortcut.url) {
        window.open(this.shortcut.url, '_blank');
      }
    },
    showContextMenu(event) {
      event.preventDefault();
      this.menuPosition = { x: event.clientX, y: event.clientY };
      this.showMenu = true;
    },
    editShortcut() {
      this.showMenu = false;
      this.$emit('edit', this.shortcut);
    },
    deleteShortcut() {
      this.showMenu = false;
      this.$emit('delete', this.shortcut.id);
    }
  },
  mounted() {
    const hideMenu = () => {
      this.showMenu = false;
    };
    document.addEventListener('click', hideMenu);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', hideMenu);
    });
  }
}
</script>

<style scoped>
.shortcut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 80px;
}

.shortcut-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  background: #f8f8f8;
}

.shortcut-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #42b983;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  overflow: hidden;
}

.shortcut-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.default-icon {
  font-size: 20px;
  color: white;
  font-weight: bold;
}

.shortcut-title {
  font-size: 14px;
  text-align: center;
  color: #333;
  max-width: 80px;
  word-wrap: break-word;
}

.context-menu {
  position: fixed;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  min-width: 100px;
}

.menu-item {
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 14px;
}

.menu-item:hover {
  background: #f0f0f0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>