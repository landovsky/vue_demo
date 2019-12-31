<template>
  <div>
    <div class="taskList">
      <input
        :value="props.newTaskName"
        v-on:keyup.enter="props.handleNewTask"
        placeholder="type task..."
      />
      <TaskItem
        v-for="task in props.incompleteTasks"
        :clickHandler="props.markTaskComplete"
        :key="task.id"
        :task="task"
      />
    </div>
    <div v-if="props.completeTasksPresent" class="taskList">
      <h3>Completed tasks</h3>
      <a href="" @click.prevent="props.clearComplete">
        Clear completed tasks
      </a>
      <TaskItem
        v-for="task in props.completeTasks"
        :clickHandler="props.markTaskIncomplete"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TaskItem from "@/components/TaskItem.vue";
import { Task } from "@/services/Store";
import { RecordPropsDefinition } from "vue/types/options";

export default {
  name: "TasksView",
  components: {
    TaskItem
  },
  props: ["props"]
};
</script>

<style lang="scss" scoped>
.taskList {
  padding: 20px;
  width: 200px;
  margin: auto;

  a {
    text-decoration: underline;
    font-size: 12px;
  }
}

input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  height: 30px;
  border-bottom: 1px solid gray;
  width: 170px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
}
</style>
