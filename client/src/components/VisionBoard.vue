<template>
  <div class="VisionBoard">
    <h1>{{ title }}</h1>
    <div class="grid-container">
      <div v-for="board in boards" :key="board._id">
        <div class="grid-item">
          <ToDoList :title="board" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";
export default {
  name: "visionBoard",
  components: { ToDoList },
  data() {
    return {
      title: "Vision Board",
      boards: [
        "Spiritual",
        "Adventure",
        "Contribution",
        "Personal development",
        "Career / Business",
        "Leisure",
        "Family / Friends / Partner",
        "Environment",
        "Health / Fitness"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: auto;
  margin: auto;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
h1 {
  text-align: center;
}
.VisionBoard {
  max-width: 1200px;
  margin: auto;
}
</style>