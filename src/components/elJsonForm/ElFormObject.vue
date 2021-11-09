<template>
  <el-card style="margin-bottom:10px;">
      <template #header>
      <span >{{ label }}</span>
    </template>
    <json-form :schema="properties" v-model="formData"></json-form>
  </el-card>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import JsonForm from '../ElJsonForm.vue';
import { Schema } from '../schema';

const props = defineProps({
  properties: { type: Object as PropType<Schema>, required: true },
  label: { type: String, default: '' },
  modelValue: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:modelValue']);

const formData = ref(props.modelValue);

watch(formData.value, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
