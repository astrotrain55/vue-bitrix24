<template>
  <label class="bx-radio ui-ctl ui-ctl-radio">
    <input
      class="ui-ctl-element"
      type="radio"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import injectStyles from '../mixins/injectStyles';

export default defineComponent({
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
  mixins: [injectStyles],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    value: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-radio',
});
</script>

<style>
.ui-ctl-radio {
  cursor: pointer;
}

.bx-radio {
  width: 100%;
}
</style>
