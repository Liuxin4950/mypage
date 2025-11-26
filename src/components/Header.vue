<template>
  <header class="app-header">
    <h1>{{ title }}</h1>
    <div class="header-actions">
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Tab老年版本1.0'
    }
  }
}
</script>

<style scoped>
.app-header {
  text-align: center;
  padding: 20px;
  background-color: #42b983;
  color: white;
  margin-bottom: 20px;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  margin: 0;
  font-size: 1.5rem;
  flex: 1;
}

.header-actions {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 15px;
    font-size: 1.3rem;
  }
  
  .header-actions {
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
}
</style>