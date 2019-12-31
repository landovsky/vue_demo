<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.png" />
    <Tasks />
  </div>
</template>

<script lang="ts">
import Tasks from "@/components/Tasks.vue";

export default {
  name: "home",
  components: {
    Tasks
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 100px;
}
</style>
