


npm run dev

```
<script setup lang="ts">
import { ref } from 'vue';
import JsonForm from './components/JsonForm.vue';
import { Schema } from './components/jsonForm/schema';

const schema:Schema = [
  { field: 'username', type: 'text', label: '姓名' },
  { field: 'age', type: 'num', label: '年龄' },
  {
    field: 'sex', type: 'select', label: '性别', options: ['男', '女'],
  },
  {
    field: 'friend',
    type: 'object',
    label: '朋友',
    properties: [
      { field: 'username', type: 'text', label: '姓名' },
      { field: 'age', type: 'num', label: '年龄' },
      {
        field: 'sex', type: 'select', label: '性别', options: ['男', '女'],
      },
    ],
  },
  {
    field: 'friends',
    type: 'array',
    label: '朋友们',
    properties: [
      { field: 'username', type: 'text', label: '姓名' },
      { field: 'age', type: 'num', label: '年龄' },
      {
        field: 'sex', type: 'select', label: '性别', options: ['男', '女'],
      },
    ],
  },
];

const formData = ref({});
</script>

<template>
  <h1>JSON FORM</h1>
  <json-form
    :schema="schema"
    v-model="formData"
  />
  formdata:{{formData}}
</template>

```