<template>
  <el-card style="margin-bottom:10px;">
    <template #header>
      <span >{{ label }}</span>
    </template>
    <div v-for="(item,index) in formData" :key="formKeys[index]">
    <json-form
     :schema="properties"
     v-model="formData[index]">
    </json-form>
    <el-button @click="remove(index)">remove</el-button>
    <el-button @click="insertAfter(index)">insert after</el-button>
    <hr>
    </div>
    <el-button @click="append">append</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import JsonForm from '../ElJsonForm.vue';
import { Schema } from '../schema';

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
