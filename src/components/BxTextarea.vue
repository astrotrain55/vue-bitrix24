<template>
  <div
    class="ui-ctl ui-ctl-textarea"
    :class="{
      'ui-ctl-no-resize': resize === 'no',
      'ui-ctl-resize-y': resize === 'y',
      'ui-ctl-resize-x': resize === 'x',
    }"
  >
    <textarea
      class="ui-ctl-element"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import injectStyles from '../mixins/injectStyles';

export const props = {
  resizes: ['', 'no', 'y', 'x'],
};

export default defineComponent({
  mixins: [injectStyles],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    resize: {
      type: String,
      default: '',
      validator(value) {
        return typeof value === 'string' && props.resizes.includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-textarea',
});
</script>
