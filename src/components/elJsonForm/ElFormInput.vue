<template>
 <el-form
    :model="formData"
  >
    <el-form-item :label="label">
      <el-input  v-model="formData.value" :type="typeMap[type]" />
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import {
  PropType, ref, watch,
} from 'vue';
import { SchemaType } from '../schema';

type TypeMap ={
  [K in SchemaType]? : string
}
const props = defineProps({
  type: { type: String as PropType<SchemaType>, required: true },
  label: { type: String, default: '' },
  modelValue: { type: [String, Number] },
});

const emit = defineEmits(['update:modelValue']);

const typeMap:TypeMap = {
  text: 'text',
  num: 'number',
};
const formData = ref({ value: props.modelValue });

watch(formData.value, (newValue) => {
  emit('update:modelValue', newValue.value);
});

</script>
