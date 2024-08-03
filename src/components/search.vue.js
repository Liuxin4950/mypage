import { ref } from 'vue';
import { useSearchStore } from '../Store.js';
import Modal from './modal.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchStore = useSearchStore();
const selectedEngine = ref(searchStore.selectedEngine);
const query = ref(searchStore.query);
const showModal = ref(false);
const search = () => {
    if (!query.value) {
        showModal.value = true;
        return;
    }
    searchStore.setSelectedEngine(selectedEngine.value);
    searchStore.setQuery(query.value);
    searchStore.search();
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.selectedEngine)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("google"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("search-icon") }, src: ("../assets/icon/google.png"), alt: (""), });
    // @ts-ignore
    [selectedEngine,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("bing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("duckduckgo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.search) }, type: ("text"), value: ((__VLS_ctx.query)), placeholder: ("输入搜索内容"), });
    // @ts-ignore
    [search, query,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.search) }, ...{ class: ("search-but") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("search-icon") }, src: ("../assets/icon/search.png"), alt: (""), });
    // @ts-ignore
    [search,];
    if (__VLS_ctx.showModal) {
        // @ts-ignore
        [Modal,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Modal, new Modal({ ...{ 'onClose': {} }, message: ("搜索框不能为空"), }));
        const __VLS_1 = __VLS_0({ ...{ 'onClose': {} }, message: ("搜索框不能为空"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ ...{ 'onClose': {} }, message: ("搜索框不能为空"), }));
        let __VLS_5;
        const __VLS_6 = {
            onClose: (...[$event]) => {
                if (!((__VLS_ctx.showModal)))
                    return;
                __VLS_ctx.showModal = false;
                // @ts-ignore
                [showModal, showModal,];
            }
        };
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Modal, __VLS_1));
        let __VLS_2;
        let __VLS_3;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['search-container'];
        __VLS_styleScopedClasses['search-box'];
        __VLS_styleScopedClasses['search-icon'];
        __VLS_styleScopedClasses['search-but'];
        __VLS_styleScopedClasses['search-icon'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Modal: Modal,
                selectedEngine: selectedEngine,
                query: query,
                showModal: showModal,
                search: search,
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
