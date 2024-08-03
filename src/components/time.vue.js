import { ref, onMounted, computed } from 'vue';
import { Lunar } from 'lunar-javascript';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("current-time") }, });
    (__VLS_ctx.formattedTime);
    // @ts-ignore
    [formattedTime,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("current-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.gregorianDate);
    // @ts-ignore
    [gregorianDate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.weekDay);
    // @ts-ignore
    [weekDay,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.lunarDate);
    // @ts-ignore
    [lunarDate,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['current-time'];
        __VLS_styleScopedClasses['current-date'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                formattedTime: formattedTime,
                weekDay: weekDay,
                gregorianDate: gregorianDate,
                lunarDate: lunarDate,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
