<template lang="html">
  <div id="wrapper">
    <h3>{{ title }}</h3>
    <ul>
      <form class="add-todo" @submit="addTodo($event)">
        <input
          v-model="newTodo.text"
          type="text"
          placeholder="Enter new goal"
        />
        <input
          :disabled="newTodo.text.length <= 2 || toDosFromThisList.length >= 3"
          type="submit"
          value="+"
          @keyup.enter="submit"
        />
      </form>

      <li v-for="todo in toDosFromThisList" :key="todo._id">
        <p>{{ todo.title.text }}</p>
        <button class="button" @click="deleteTodo(todo._id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoAPI from "@/services/ToDoAPI.js";
export default {
  props: {
    title: { type: String, default: "" }
  },
  data() {
    return {
      newTodo: {
        toDoListTitle: this.title.toString(),
        text: ""
      },
      todos: []
    };
  },
  computed: {
    toDosFromThisList: function() {
      let title = this.title;
      return this.todos.filter(function(todo) {
        if (todo.title.toDoListTitle === title) {
          return todo;
        }
      });
    }
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    async addTodo(evt) {
      evt.preventDefault();
      const response = await ToDoAPI.addTodo(this.newTodo);
      this.todos.push(response.data);
      this.newTodo.text = "";
    },
    deleteTodo(todoID) {
      ToDoAPI.deleteTodo(todoID);
      this.todos = this.todos.filter(function(obj) {
        return obj._id !== todoID;
      });
    },
    async loadTodos() {
      const response = await ToDoAPI.getToDos();
      this.todos = response.data;
    }
  }
};
</script>

<style lang="css">
* {
  font-size: 17px;
  padding: 2px;
  color: white;
}
h3 {
  padding: 0px;
  margin: 6px;
}
p {
  margin: auto;
  padding: auto;
  border: none;
  outline: none;
  float: left;
  font-size: 100%;
  width: auto;
  border-radius: 3px;
}
ul,
li {
  list-style: none;
  clear: both;
  border: 1px;
  text-align: left;
  padding-left: 6px;
  height: auto;
  margin: auto;
  padding: auto;
}

#wrapper {
  width: auto;
  margin: auto;
  text-align: center;
  background-color: #0187ca;
  padding: auto;
  border-radius: 3px;
  min-height: 180px;
  height: auto;
}
.add-todo {
  clear: both;
  margin-top: 5px;
}
input[type="text"] {
  margin: 1px;
  padding-left: 6px;
  border: none;
  outline: none;
  float: left;
  background-color: #00a8ff;
  color: white;
  font-size: 100%;
  width: 90%;
  border-radius: 3px;
}
::placeholder {
  color: rgba(255, 255, 255, 0.589);
  text-align: left;
  padding: 0px;
}
input[type="submit"] {
  margin: 1px;
  border: none;
  outline: none;
  float: right;
  background-color: #01417c;
  color: white;
  border-radius: 2px;
  font-size: 90%;
  cursor: pointer;
  width: 25px;
  height: 25px;

  font-size: 18px;
}
button {
  margin: 1px;
  border: none;
  outline: none;
  float: right;
  background-color: #b04b48;
  color: white;
  border-radius: 3px;
  font-size: 90%;
  cursor: pointer;
  width: 25px;
  height: 25px;
}
input[type="submit"]:disabled {
  background-color: #11111100;
  cursor: default;
}
</style>
