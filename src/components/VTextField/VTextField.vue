<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue';

const props = withDefaults(defineProps<{
    label?: string,
    type?: string,
    class?: string,
    placeholder?: string,
    iconRight?: string,
    disabled?: boolean,
    readonly?: boolean,
    modelValue: String,
}>(), {
    type: "text",
    iconRight: "",
    disabled: false,
    readonly: false,
    // modelValue(props) {
    //     return props.modelValue || ''
    // },
});

const emit = defineEmits(['update:modelValue'])
const updateValue = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
};

</script>

<template>
    <div class="border border-gray-300 w-full rounded-md focus-within:border-primary-500 mb-4">
        <div class="relative px-4 py-2">
            <input :value="modelValue" :type="props.type" @input="updateValue" :name="props.label" placeholder=" "
                class="block w-full z-2 appearance-none focus:outline-none bg-transparent" />
            <label :for="props.label"
                class="absolute top-1/2 left-6 transform -translate-y-1/2 z-1 duration-300 bg-white">{{ props.label }}</label>
        </div>
    </div>
</template>

<style scoped lang="postcss">
input:focus-within~label,
input:not(:placeholder-shown)~label, .select label {
    @apply text-gray-400 font-bold transform text-xs px-2.5 -translate-y-7 left-2;
    /* -translate-x-5 */
}

input:focus-within~label {
    @apply text-primary-500 font-bold;
}
</style>