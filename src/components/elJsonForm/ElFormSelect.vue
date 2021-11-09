<template>
 <el-form
    :model="formData"
  >
  <el-form-item :label="label">
    <el-select  v-model="formData.value" >
      <el-option v-for="item in options" :key="item"  :value="item">{{item}}</el-option>
    </el-select>
  </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import {
  ref, watch, PropType,
} from 'vue';

const props = defineProps({
  label: { type: String, default: '' },
  options: { type: Array as PropType<Array<string | number>>, required: true },
  modelValue: { type: [String, Number] },
});

const emit = defineEmits(['update:modelValue']);

const formData = ref({ value: props.modelValue });

watch(formData.value, (newValue) => {
  emit('update:modelValue', newValue.value);
});

</script>
