<script setup lang="ts">
import { computed, withDefaults, defineProps, defineEmits } from 'vue';

type ButtonType = "button" | "submit" | "reset" | undefined;

const props = withDefaults(defineProps<{
  text: string,
  type?: ButtonType,
  to?: string,
  target?: string,
  block?: boolean,
  rounded?: boolean,
  outlined?: boolean,
  shadow?: boolean,
  disabled?: boolean,
  loading?: boolean,
}>(), {
  type: "button",
  to: undefined,
  target: undefined,
  block: false,
  rounded: true,
  outlined: false,
  shadow: false,
  disabled: false,
  loading: false,
});

const emit = defineEmits(['click'])
const onClick = () => {
  if(!props.disabled && !props.loading){
    emit('click')
  }  
};

const classObject = computed(() => ({
  'w-full': props.block,
  'rounded-lg': props.rounded,
  'bg-primary text-white border border-primary hover:bg-primary-600': !props.outlined && !props.disabled,
  'bg-gray-100 text-gray-600 border border-none': props.outlined && !props.disabled,
  'shadow-lg shadow-primary/50': props.shadow && !props.disabled,
  'bg-gray-200 hover:bg-gray-300 text-gray-400 border border-gray-300': props.disabled,
  'base-spinner cursor-wait': props.loading,
}))

</script>

<template>
  <component
    :is="props.to ? 'router-link' : 'button'"
    :to="props.to"
    :type="props.type"
    :class="[classObject, 'flex items-center justify-center font-semibold px-6 py-3 leading-none transition ease-in duration-150']"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot name="icon"></slot>
    {{ text }}
  </component>
</template>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}

</style>