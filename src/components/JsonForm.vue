<script lang="ts">
import {
  h, defineComponent, PropType, ref,
} from 'vue';
import FormArray from './jsonForm/FormArray.vue';
import FormInput from './jsonForm/FormInput.vue';
import FormObject from './jsonForm/FormObject.vue';
import FormSelect from './jsonForm/FormSelect.vue';
import { Schema, SchemaType } from './jsonForm/schema';

const compMap:{[k in SchemaType]?: any} = {
  text: FormInput,
  num: FormInput,
  object: FormObject,
  array: FormArray,
  select: FormSelect,
};
const includeTypeProps:Array<SchemaType> = ['text', 'num'];
export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    schema: {
      required: true,
      type: Array as PropType<Schema>,
    },
    modelValue: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const formData = ref(props.modelValue);
    return {
      formData,
    };
  },
  render() {
    const children = this.schema.map((item) => {
      const {
        type, label, field, properties, options,
      } = item;
      const renderComp = compMap[item.type];
      const baseProps:{[k:string]:any} = {
        label,
        key: field,
        properties,
        options,
        modelValue: this.formData[field],
        'onUpdate:modelValue': (value: string) => {
          this.formData[field] = value;
          this.$emit('update:modelValue', this.formData);
        },
      };
      if (includeTypeProps.includes(type)) {
        baseProps.type = type;
      }
      return h(renderComp, baseProps);
    });
    return h('div', children);
  },
});
</script>
