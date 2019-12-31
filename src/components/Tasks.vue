<template>
  <TasksView
    :props="{
      incompleteTasks,
      completeTasks,
      handleNewTask,
      completeTasksPresent,
      clearComplete,
      markTaskIncomplete,
      markTaskComplete
    }"
  />
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";
import { Task } from "@/services/Store";
import TasksView from "@/components/TasksView.vue";

export default {
  name: "Tasks",
  components: {
    TasksView
  },
  data: function() {
    return { newName: "" as string };
  },
  computed: {
    ...mapState(["lastId"]),
    ...mapGetters(["incompleteTasks", "completeTasks"]),
    completeTasksPresent: function(): boolean {
      return this.completeTasks.length > 0;
    }
  },
  methods: {
    handleNewTask: function(event: any) {
      this.$store.dispatch("createTask", { name: event.target.value });
      this.newName = "";
    },
    markTaskComplete: function(task: Task) {
      this.$store.commit("markComplete", task);
    },
    markTaskIncomplete: function(task: Task) {
      this.$store.commit("markIncomplete", task);
    },
    clearComplete: function() {
      this.$store.commit("clearCompleted");
    }
  }
};
</script>
