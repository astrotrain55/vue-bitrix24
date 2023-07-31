# vue-bitrix24

Библиотека vue-компонентов в стилистике Bitrix24

## Установка

```nodejs
npm i -S vue-bitrix24@latest bitrix24-library@latest
```

## Подключение
```js
// plugins/vue-bitrix24.js
import usePlugin from 'vue-bitrix24/Plugin';
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';

export default {
  install: (app) => usePlugin.install(app, [BxButton, BxInput]),
};

// или экспорт всех компонентов
import usePlugin from 'vue-bitrix24';
import 'vue-bitrix24/css';

export default usePlugin;
```
```js
// main.js
import { createApp } from 'vue';
import Bitrix24 from 'bitrix24-library';
import useBitrix24 from './plugins/vue-bitrix24';
import App from './App.vue';

Bitrix24.init().then((BX42) => {
  createApp(App)
    .provide('$BX24', BX24)
    .use(useBitrix24)
    .mount('#app');
});
```

## Компоненты

[Storybook](https://astrotrain55.github.io/vue-bitrix24/)

* bx-alert
* bx-button
* bx-checkbox
* bx-entity-selector
* bx-icon
* bx-input
* bx-input-date (based on [@vuepic/vue-datepicker](https://vue3datepicker.com), Vue 3 only)
* bx-input-file
* bx-link
* bx-progressbar
* bx-radio
* bx-select (based on [vue-select](https://vue-select.org), Vue 3 only)
* bx-textarea

### Vue 2
* bx-input-date `import BxInputDate from 'vue-bitrix24/2/BxInputDate'` (Based on [vue2-datepicker](https://mengxiong10.github.io/vue2-datepicker/))
* bx-select `import BxSelect from 'vue-bitrix24/2/BxSelect'` (Based on [vue-select](https://vue-select.org))

## Ссылки

* [bitrix24-library](https://www.npmjs.com/package/bitrix24-library)
* [bitrix24-create-app](https://www.npmjs.com/package/bitrix24-create-app)
