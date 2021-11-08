<template>
  <div>
    <span>{{ props.label }}</span>
    <select  v-model="formData.value" >
      <option v-for="item in options" :key="item"  :value="item">{{item}}</option>
    </select>
  </div>
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
