<template>
  <div :class="[$style['bx-entity-selector'], { [$style['inline']]: props.inline }]">
    <div :class="$style['bx-entity-selector__button']">
      <span :class="$style['bx-entity-selector__items']">
        <span
          v-for="(item, key) in props.list"
          :key="key"
          :class="[
            $style['bx-entity-selector__item'],
            { [$style['hover-delete']]: data.hoverDelete[key] },
          ]"
        >
          <a
            v-if="props.clickable"
            :href="item[displayFieldLink]"
            target="_blank"
            :class="$style['bx-entity-selector__text']"
            @click="onClick($event, key, item, 'click')"
            @auxclick="onClick($event, key, item, 'auxclick')"
          >
            {{ item[displayField] }}
          </a>
          <span v-else :class="$style['bx-entity-selector__text']">
            {{ item[displayField] }}
          </span>
          <button
            :class="$style['bx-entity-selector__delete']"
            @mouseenter="data.hoverDelete[key] = true"
            @mouseleave="data.hoverDelete[key] = false"
            @click="$emit('delete', key, item)"
          ></button>
        </span>
      </span>
      <span :class="$style['bx-entity-selector__controls']">
        <button :class="$style['bx-entity-selector__add']" @click="$emit('add')">
          {{
            !props.list.length ? props.textAdd : props.multiple ? props.textMore : props.textChange
          }}
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, type PropType } from 'vue';
import { defaultProps } from './BxEntitySelector.props';

const props = defineProps({
  list: {
    type: Array as PropType<any[]>,
    default: () => defaultProps.list,
  },
  displayField: {
    type: String,
    default: defaultProps.displayField,
  },
  displayFieldLink: {
    type: String,
    default: defaultProps.displayFieldLink,
  },
  textAdd: {
    type: String,
    default: defaultProps.textAdd,
  },
  textMore: {
    type: String,
    default: defaultProps.textMore,
  },
  textChange: {
    type: String,
    default: defaultProps.textChange,
  },
  clickable: {
    type: Boolean,
    default: defaultProps.clickable,
  },
  multiple: {
    type: Boolean,
    default: defaultProps.multiple,
  },
  inline: {
    type: Boolean,
    default: defaultProps.inline,
  },
});

const emit = defineEmits(['add', 'click', 'auxclick', 'delete']);

const data = reactive({
  hoverDelete: [] as boolean[],
});

function onClick(e: MouseEvent, key: number, item: any, eventName: 'click' | 'auxclick') {
  if (props.clickable) {
    e.preventDefault();
    emit(eventName, key, item);
  }
}
</script>

<style module>
.bx-entity-selector {
  font-family: sans-serif;
}

.bx-entity-selector.inline {
  display: inline-block;
}

.bx-entity-selector__button {
  background-color: #fff;
  min-height: 33px;
  border: 1px solid #c6cdd3;
  padding: 5px 5px 0 5px;
}

.bx-entity-selector__item {
  background-color: #bcedfc;
  transition: background-color 0.2s linear;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  white-space: nowrap;
  height: 30px;
  position: relative;
  line-height: 28px;
  margin: 0 5px 5px 0;
}

.bx-entity-selector__item.hover-delete {
  background-color: #8be0fa;
}

.bx-entity-selector__text {
  padding: 0 0 0 10px;
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  color: #1f6ab5;
}

.bx-entity-selector__delete {
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: inherit;
  width: 25px;
  height: 30px;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: auto;
  white-space: nowrap;
  line-height: 30px;
}

.bx-entity-selector__delete::after {
  content: '';
  background-image: url('../assets/media.png');
  background-repeat: no-repeat;
  background-position: -2px -17px;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto auto 7px;
  opacity: 0.2;
}

.bx-entity-selector__add {
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: inherit;
  margin: 7px 7px 7px 18px;
  border-bottom: 1px solid transparent;
  color: #2067b0;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  font-size: 13px;
  line-height: 17px;
  vertical-align: top;
  position: relative;
  transition: border-bottom-color 0.2s linear;
}

.bx-entity-selector__add:hover {
  border-bottom: 1px solid;
}

.bx-entity-selector__add::before {
  content: '';
  background-image: url('../assets/add.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 8px;
  left: -14px;
  position: absolute;
  top: 5px;
  width: 8px;
}
</style>
