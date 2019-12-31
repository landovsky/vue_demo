<template>
  <div class="task" v-on:click="clickHandler(task)">
    {{ task.name }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RecordPropsDefinition } from "vue/types/options";
import { Task } from "@/services/Store";

interface TaskItemProps {
  clickHandler: (task: Task) => void;
  task: Task;
}

export default Vue.extend({
  name: "TaskItem",
  props: {
    clickHandler: Function,
    task: {}
  } as RecordPropsDefinition<TaskItemProps>
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.task {
  margin: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(235, 176, 176);
  }
}
</style>
