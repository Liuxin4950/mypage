const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});
const emit = defineEmits(['delete']);
function handleDelete() {
    emit('delete');
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.url)), ...{ class: ("jump-link") }, target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("imgBox") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgSrc)), alt: ("图片"), });
    // @ts-ignore
    [url, imgSrc,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text") }, });
    (__VLS_ctx.text);
    // @ts-ignore
    [text,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleDelete) }, ...{ class: ("delete-button") }, });
    // @ts-ignore
    [handleDelete,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['box'];
        __VLS_styleScopedClasses['jump-link'];
        __VLS_styleScopedClasses['imgBox'];
        __VLS_styleScopedClasses['text'];
        __VLS_styleScopedClasses['delete-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                handleDelete: handleDelete,
            };
        },
        props: {
            imgSrc: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    emits: {},
});
;
