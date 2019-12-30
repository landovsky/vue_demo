import Vuex, { Store } from "vuex"
import Vue from "vue"

Vue.use(Vuex)

export interface Task {
  id: number;
  name: string;
  completed?: boolean;
}

export interface State {
  lastId: number;
  tasks: Task[];
}

const store = new Vuex.Store({
  state: {
    lastId: 2,
    tasks: [
      { id: 1, name: "eggss", completed: false },
      { id: 2, name: "lettuce", completed: true }
    ]
  } as State,
  mutations: {
    incrementId (state) {
      state.lastId++
    },
    markComplete (store, task: Task) {
      store.tasks = [...store.tasks.filter(t => t.id !== task.id), { ...task, completed: true }]
    },
    markIncomplete (store, task: Task) {
      store.tasks = [...store.tasks.filter(t => t.id !== task.id), { ...task, completed: false }]
    },
    clearCompleted (store) {
      store.tasks = store.tasks.filter(task => !task.completed);
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