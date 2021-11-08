<template>
  <div>
    <input
      v-model="formData.todo"
      type="text"
    > <button
      class="btn-color"
      @click="add"
    >
      Add
    </button>
    <ul>
      <li
        v-for="(todo,i) in todoList"
        :key="todo"
      >
        {{ todo }} <button @click="remove(i)">
          remote
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const todoList = ref<string[]>([]);
const btnColor = ref<string>('#fff');
const formData = ref<{todo:string}>({ todo: '' });
function add() {
  if (formData.value.todo) {
    todoList.value.push(formData.value.todo);
    formData.value.todo = '';
  }
}

function remove(index:number) {
  todoList.value.splice(index, 1);
}
watch(formData.value, (newValue) => {
  if (newValue.todo.length > 3) {
    btnColor.value = 'blue';
  }
  if (newValue.todo.length > 5) {
    btnColor.value = 'red';
  }
});

</script>
<style>
.btn-color{
   color: v-bind(btnColor)
}
</style>
