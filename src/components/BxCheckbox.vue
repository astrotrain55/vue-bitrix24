<template>
  <label class="ui-ctl ui-ctl-checkbox" :class="$style['bx-checkbox']">
    <input
      class="ui-ctl-element"
      type="checkbox"
      :checked="isChecked"
      :value="props.value"
      :disabled="props.disabled"
      @change="updateInput"
    />
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defaultProps } from './BxCheckbox.props';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => defaultProps.modelValue,
  },
  value: {
    type: [Boolean, String, Array, Object],
    default: defaultProps.value,
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
  },
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue.includes(props.value));

function updateInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const isChecked = input.checked;
  const newValue = [...props.modelValue];

  if (isChecked) {
    newValue.push(props.value);
  } else {
    newValue.splice(newValue.indexOf(props.value), 1);
  }

  emit('update:modelValue', newValue);
}
</script>

<style module>
.bx-checkbox {
  cursor: pointer;
  width: 100%;
}
</style>
