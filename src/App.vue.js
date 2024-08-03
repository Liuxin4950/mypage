import { ref, watch } from 'vue';
import Search from "./components/search.vue";
import Times from "./components/time.vue";
import JumpBox from "./components/jumpBox.vue";
import TVimg from "./assets/icon/TV.svg";
import tj from './assets/icon/tj.svg';
import Modal from './components/modal.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const showModal = ref(false);
// 控制添加面板的显示
const showAddContainer = ref(false);
// 输入框的绑定
const newJumpBox = ref({ url: '', imgSrc: TVimg, text: '' });
// 从本地存储加载 JumpBox 列表
const loadJumpBoxItems = () => {
    const savedItems = localStorage.getItem('jumpBoxItems');
    return savedItems ? JSON.parse(savedItems) : [];
};
const jumpBoxItems = ref(loadJumpBoxItems());
// 保存 JumpBox 列表到本地存储
const saveJumpBoxItems = () => {
    localStorage.setItem('jumpBoxItems', JSON.stringify(jumpBoxItems.value));
};
// 点击添加按钮
function handleAddClick() {
    showAddContainer.value = !showAddContainer.value;
}
// 添加 JumpBox 组件到列表中
function addJumpBox() {
    if (newJumpBox.value.url && newJumpBox.value.text) {
        jumpBoxItems.value.push({ ...newJumpBox.value });
        newJumpBox.value = { url: '', imgSrc: TVimg, text: '' }; // 重置输入框
        showAddContainer.value = false;
        saveJumpBoxItems(); // 保存到本地存储
    }
    else {
        showModal.value = true;
    }
}
// 删除 JumpBox 组件
function deleteJumpBox(index) {
    jumpBoxItems.value.splice(index, 1);
    saveJumpBoxItems(); // 保存到本地存储
}
// 监控 jumpBoxItems 变化并保存到本地存储
watch(jumpBoxItems, saveJumpBoxItems, { deep: true });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("air") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-box") }, });
    // @ts-ignore
    [Times,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Times, new Times({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Times, __VLS_1));
    // @ts-ignore
    [Search,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Search, new Search({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Search, __VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("TV-Container") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.jumpBoxItems))) {
        // @ts-ignore
        [JumpBox,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(JumpBox, new JumpBox({ ...{ 'onDelete': {} }, url: ((item.url)), imgSrc: ((item.imgSrc)), text: ((item.text)), }));
        const __VLS_11 = __VLS_10({ ...{ 'onDelete': {} }, url: ((item.url)), imgSrc: ((item.imgSrc)), text: ((item.text)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ ...{ 'onDelete': {} }, url: ((item.url)), imgSrc: ((item.imgSrc)), text: ((item.text)), }));
        let __VLS_15;
        const __VLS_16 = {
            onDelete: (...[$event]) => {
                __VLS_ctx.deleteJumpBox(index);
                // @ts-ignore
                [jumpBoxItems, deleteJumpBox,];
            }
        };
        const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(JumpBox, __VLS_11));
        let __VLS_12;
        let __VLS_13;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleAddClick) }, ...{ class: ("box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("imgBox") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.tj)), alt: ("图片"), });
    // @ts-ignore
    [handleAddClick, tj,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.showAddContainer) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("addContainer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("f fb") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w2") }, });
        // @ts-ignore
        [showAddContainer,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.handleAddClick) }, ...{ class: ("i4") }, src: ("./assets/icon/gb.svg"), alt: (""), });
        // @ts-ignore
        [handleAddClick,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("addContainer-input f fd fa") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("输入 URL"), });
        (__VLS_ctx.newJumpBox.url);
        // @ts-ignore
        [newJumpBox,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("输入文本"), });
        (__VLS_ctx.newJumpBox.text);
        // @ts-ignore
        [newJumpBox,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addJumpBox) }, ...{ class: ("b1") }, });
        // @ts-ignore
        [addJumpBox,];
        if (__VLS_ctx.showModal) {
            // @ts-ignore
            [Modal,];
            // @ts-ignore
            const __VLS_17 = __VLS_asFunctionalComponent(Modal, new Modal({ ...{ 'onClose': {} }, message: ("输入框不能为空"), }));
            const __VLS_18 = __VLS_17({ ...{ 'onClose': {} }, message: ("输入框不能为空"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ ...{ 'onClose': {} }, message: ("输入框不能为空"), }));
            let __VLS_22;
            const __VLS_23 = {
                onClose: (...[$event]) => {
                    if (!((__VLS_ctx.showAddContainer)))
                        return;
                    if (!((__VLS_ctx.showModal)))
                        return;
                    __VLS_ctx.showModal = false;
                    // @ts-ignore
                    [showModal, showModal,];
                }
            };
            const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Modal, __VLS_18));
            let __VLS_19;
            let __VLS_20;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['air'];
        __VLS_styleScopedClasses['search-box'];
        __VLS_styleScopedClasses['TV-Container'];
        __VLS_styleScopedClasses['box'];
        __VLS_styleScopedClasses['imgBox'];
        __VLS_styleScopedClasses['text'];
        __VLS_styleScopedClasses['addContainer'];
        __VLS_styleScopedClasses['f'];
        __VLS_styleScopedClasses['fb'];
        __VLS_styleScopedClasses['w2'];
        __VLS_styleScopedClasses['i4'];
        __VLS_styleScopedClasses['addContainer-input'];
        __VLS_styleScopedClasses['f'];
        __VLS_styleScopedClasses['fd'];
        __VLS_styleScopedClasses['fa'];
        __VLS_styleScopedClasses['b1'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Search: Search,
                Times: Times,
                JumpBox: JumpBox,
                tj: tj,
                Modal: Modal,
                showModal: showModal,
                showAddContainer: showAddContainer,
                newJumpBox: newJumpBox,
                jumpBoxItems: jumpBoxItems,
                handleAddClick: handleAddClick,
                addJumpBox: addJumpBox,
                deleteJumpBox: deleteJumpBox,
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
