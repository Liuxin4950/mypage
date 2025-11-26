<template>
  <div id="app">
    <Header :title="appTitle" />
    <SearchBox />
    <div class="container">
      <TabContainer 
        :tabs="tabs" 
        :initial-active="0"
        @tab-change="onTabChange"
      />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TabContainer from './components/TabContainer.vue';
import SearchBox from './components/SearchBox.vue';
import { APP_CONFIG, DEFAULT_TABS } from './utils/constants';

export default {
  name: 'App',
  components: {
    Header,
    TabContainer,
    SearchBox
  },
  data() {
    return {
      appTitle: APP_CONFIG.TITLE,
      tabs: DEFAULT_TABS
    }
  },
  methods: {
    onTabChange(index) {
      console.log(`切换到标签页: ${index}`);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    padding: 15px;
  }
}
</style>