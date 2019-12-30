import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

export interface Task {
  id: number;
  name: string;
  completed?: boolean;
}

export interface StoreProps {
  lastId: number,
  tasks: Task[]
}

const store = new Vuex.Store({
  state: {
    lastId: 2,
    tasks: [
      { id: 1, name: "eggss", completed: false },
      { id: 2, name: "lettuce", completed: true }
    ]
  } as StoreProps,
  mutations: {
    incrementId (state) {
      state.lastId++
    },
    markComplete ({tasks}, task: Task) {
      const updatedTask: Task = { ...task, completed: true };
      tasks = [...tasks.filter(t => t.id !== task.id), updatedTask]
    },
    markIncomplete ({tasks}, task) {
      tasks = [...tasks.filter(t => t.id !== task.id), { ...task, completed: false }]
    },
    clearCompleted ({tasks}) {
      tasks = store.getters.incompleteTasks;
    },
    addTask ({tasks, lastId}, task) {
      tasks.push({ ...task, id: lastId, completed: false });
    }
  },
  actions: {
    createTask ({commit, state}, task: Task) {
      commit("incrementId");
      commit("addTask", { ...task, id: state.lastId, completed: false });
    }
  },
  getters: {
    incompleteTasks: ({tasks}): Task[] => {
      return tasks.filter(task => !task.completed);
    },
    completeTasks: ({tasks}): Task[] => {
      return tasks.filter(task => task.completed);
    }
  }
})

export default store;