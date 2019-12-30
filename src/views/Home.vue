<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="taskList">
      <input
        v-model="newName"
        v-on:keyup.enter="handleNewTask"
        placeholder="type task..."
      />
      <TaskItem
        v-for="task in incompleteTasks"
        :clickHandler="markTaskComplete"
        :key="task.id"
        :task="task"
      />
    </div>
    <div v-if="completeTasksPresent" class="taskList">
      <h3>Completed tasks</h3>
      <a href="" @click.prevent="clearComplete">
        Clear completed tasks
      </a>
      <TaskItem
        v-for="task in completeTasks"
        :clickHandler="markTaskIncomplete"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import TaskItem from "@/components/TaskItem.vue";
import { mapState, mapGetters } from "vuex";
import { Task } from "@/services/Store";

export default {
  name: "home",
  components: {
    TaskItem
  },
  data: () => {
    return {
      newName: "" as string
    };
  },
  computed: {
    ...mapState(["lastId", "tasks"]),
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
      console.log("clearing complete");
      this.$store.commit("clearCompleted");
    }
  }
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
  height: 30px;
  border: 1px solid gray;
  width: 170px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 15px;
}
</style>
