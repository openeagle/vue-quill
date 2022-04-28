# @openeagle/vue-quill

基于 [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor) 改造且适用于 vue3 的 quill 富文本编辑器，用法与 [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor) 保持一致。


## 安装

```
npm install @zthy/vue-quill --save

# or
yarn add @zthy/vue-quill
```

## 使用

```vue
<template>
  <QuillEditor />
</template>
<script>
import { QuillEditor } from '@openeagle/vue-quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  components: {
    QuillEditor
  }
}
</script>
```


或

```tsx
import { defineComponent } from 'vue';
import { QuillEditor } from '@openeagle/vue-quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default defineComponent({
  render() {
    return (
      <QuillEditor />
    );
  },
});
```
