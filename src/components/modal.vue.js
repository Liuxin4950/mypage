import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps(['message']);
const emit = defineEmits(['close']);
const isVisible = ref(true);
// 在 1 秒后开始消失
watch(isVisible, (newValue) => {
    if (!newValue) {
        setTimeout(() => {
            emit('close');
        }, 1000); // 1 秒后触发 close 事件
    }
});
const close = () => {
    isVisible.value = false;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['message'],
    emits: {},
});
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
    // @ts-ignore
    const __VLS_0 = {}
        .transition;
    ({}.transition);
    ({}.transition);
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("fade"), }));
    const __VLS_2 = __VLS_1({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("fade"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.isVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.message);
        // @ts-ignore
        [isVisible, message,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, });
        // @ts-ignore
        [close,];
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-overlay'];
        __VLS_styleScopedClasses['modal-content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
                $emit: emit,
                isVisible: isVisible,
                close: close,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            $emit: emit,
        };
    },
});
;
