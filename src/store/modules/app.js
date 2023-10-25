// import router from "@/router";
export const namespaced = true;

const getDefaultState = () => {
  return {
    toDOList:[
      {
        id:'7bc41720-7131-11ee-b962-0242ac120002',
        title:'Do the assessment',
        description:'I have to fill some forms and questions for work',
        date:'25-10-2023',
        status:false,
      },
      {
        id:"7bc41bee-7131-11ee-b962-0242ac120002",
        title:'complete task they wanted',
        description:'I have to create todolist app with some features...',
        date:'25-10-2023',
        status:false,
      },
      {
        id:"7bc4204e-7131-11ee-b962-0242ac120002",
        title:'send them github link',
        description:'I have to upload my code on github and send them link',
        date:'25-10-2023',
        status:false,
      },
    ],
    

  }
}

// initial state
export const state = getDefaultState()

export const getters = {
  getToDoList(state) {
    return state.toDOList;
  },

};
export const mutations = {

  SET_TODOLIST(state, payload) {
    state.toDOList = payload;
  },
  ADD_TODOLIST(state, todo){
    state.toDOList.push(todo)
  },

  RESET_STATE(state) {
    Object.assign(state, getDefaultState());
  },
};

export const actions = {
  setToDoList({ commit, state }, payload) {
    commit("SET_TODOLIST", payload);
  },
  addToDoList({ commit, state }, payload) {
    commit("ADD_TODOLIST", payload);
  },

  resetState({ commit }) {
    commit('RESET_STATE')
  },
};
