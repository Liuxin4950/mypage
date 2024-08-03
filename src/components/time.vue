<template>
    <div class="current-time">{{ formattedTime }}</div>
    <div class="current-date">
        <div>{{ gregorianDate }}</div>
        <div>{{ weekDay }}</div>
        <div>{{ lunarDate }}</div>
    </div>
   
  </template>
  
<script setup>
  import { ref, onMounted, computed } from 'vue';
  import { Lunar } from 'lunar-javascript';
  
  const time = ref(new Date());
  
  const updateTime = () => {
      time.value = new Date();
  };
  //设置当天的时间
  const formattedTime = computed(() => {
      const hours = time.value.getHours().toString().padStart(2, '0');
      const minutes = time.value.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
  });
  //判断星期几      
  const weekDay = computed(() => {
      const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return days[time.value.getDay()];
  });
  //判断公历
  const gregorianDate = computed(() => {
      const month = (time.value.getMonth() + 1).toString().padStart(2, '0');
      const day = time.value.getDate().toString().padStart(2, '0');
      return `${month}月${day}日`;
  });
  //判断旧历
  const lunarDate = computed(() => {
      const lunar = Lunar.fromDate(time.value);
      return `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}日`;
  });
  
  onMounted(() => {
      updateTime();
      setInterval(updateTime, 60000); // 每分钟更新一次时间
  });
</script>
  
  <style scoped lang="scss">
  .current-time {
      font-size: 4rem;
      text-align: center;
      line-height: 30px;
      margin-bottom: 2rem;
  }
  .current-date{
    display: flex;
    div{
        padding: 0 5px;
        font-family: Arial;
        font-size: 1.1rem;
        // font-weight: bold;
    }
  }

  
  </style>
  