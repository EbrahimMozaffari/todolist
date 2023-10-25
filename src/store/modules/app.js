// import router from "@/router";
export const namespaced = true;

const getDefaultState = () => {
  return {
    toDOList:[
      // {
      //   id:'7bc41720-7131-11ee-b962-0242ac120002',
      //   title:'Do the assessment',
      //   description:'I have to fill some forms and questions for work',
      //   date:Wed Oct 12 2023 16:17:00 GMT+0100 (British Summer Time),
      //   status:false,
      // },
      // {
      //   id:"7bc41bee-7131-11ee-b962-0242ac120002",
      //   title:'complete task they wanted',
      //   description:'I have to create todolist app with some features...',
      //   date:Wed Oct 18 2023 16:17:00 GMT+0100 (British Summer Time),
      //   status:false,
      // },
      // {
      //   id:"7bc4204e-7131-11ee-b962-0242ac120002",
      //   title:'send them github link',
      //   description:'I have to upload my code on github and send them link',
      //   date:Wed Oct 15 2023 16:17:00 GMT+0100 (British Summer Time),
      //   status:false,
      // },
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
  deleteFromToDoList({ commit, state }, payload) {
    let items = [...state.toDOList]
    const index = items.findIndex((i) => {
      return i.id == payload;
    })
    items.splice(index, 1);
    commit('SET_TODOLIST',items)
    // const index = state.toDOList.findIndex((i) => {
    //   return i.id == payload;
    // })
    // state.toDOList.splice(index, 1);
  },
  editToDoList({ commit, state }, payload) {
    let items = [...state.toDOList]
    const index = items.findIndex((i) => {
      return i.id == payload.id;
    })
    items[index].title = payload.title
    items[index].description = payload.description
    items[index].date = payload.date
    commit('SET_TODOLIST',items)
  },
  resetState({ commit }) {
    commit('RESET_STATE')
  },
};
