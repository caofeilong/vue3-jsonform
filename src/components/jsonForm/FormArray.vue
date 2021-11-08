<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <div v-for="(item,index) in formData" :key="formKeys[index]">
    <json-form
     :schema="properties"
     v-model="formData[index]">
    </json-form>
    <button @click="remove(index)">remove</button>
    <button @click="insertAfter(index)">insert after</button>
    <hr>
    </div>
    <button @click="append">append</button>
  </fieldset>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import JsonForm from '../JsonForm.vue';
import { Schema } from './schema';

const props = defineProps({
  properties: { type: Object as PropType<Schema>, required: true },
  label: { type: String, default: '' },
  modelValue: { type: Array as PropType<Array<{[k:string]:any}>>, default: () => ([{}]) },
});

function genCompId() {
  const expectLength = 16;
  let randomStr = Math.random()
    .toString(36)
    .substr(2);
  while (randomStr.length < expectLength) {
    randomStr += Math.random()
      .toString(36)
      .substr(2);
  }
  return randomStr.substr(0, expectLength);
}

const emit = defineEmits(['update:modelValue']);

const formData = ref(props.modelValue);
const keyArray:Array<string> = [];
if (props.modelValue.length > 0) {
  props.modelValue.forEach(() => {
    keyArray.push(genCompId());
  });
}
const formKeys = ref(keyArray);
function append() {
  formData.value.push({});
  formKeys.value.push(genCompId());
}

function remove(index:number) {
  formKeys.value.splice(index, 1);
  formData.value.splice(index, 1);
}
function insertAfter(index:number) {
  formKeys.value.splice(index + 1, 0, genCompId());
  formData.value.splice(index + 1, 0, {});
}

watch(formData.value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
