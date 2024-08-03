<template>
    <transition name="fade">
        <div v-if="isVisible" class="modal-overlay">
            <div class="modal-content">
                <p>{{ message }}</p>
                <button @click="close">确定</button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['message'])
const emit = defineEmits(['close'])

const isVisible = ref(true)

// 在 1 秒后开始消失
watch(isVisible, (newValue) => {
    if (!newValue) {
        setTimeout(() => {
            emit('close')
        }, 1000) // 1 秒后触发 close 事件
    }
})

const close = () => {
    isVisible.value = false
}
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: #fff;
    padding: 15px 30px;
    border-radius: 10px;
    text-align: center;
    /* transform: translateY(40%); */
}

.modal-content p {
    margin-bottom: 10px;
    font-weight: bolder;
}

.modal-content button {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>