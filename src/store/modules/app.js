// import router from "@/router";
import {formatDate} from "@/helper/helper"
export const namespaced = true;

const getDefaultState = () => {
  return {
    toDOList:[],
    filterName:'all',
   }
}

// initial state
export const state = getDefaultState()

export const getters = {
  getToDoList(state) {
    return state.toDOList;
  },
  getFilteredList(state) {
    if(state.filterName == 'all'){
      return state.toDOList;
    }else if(state.filterName == 'completed'){
      return state.toDOList.filter((todo) => todo.status == true);
    }else if(state.filterName == 'unfinished'){
      return state.toDOList.filter((todo) => todo.status == false);
    }else if(state.filterName == 'expired'){
      let today = new Date();
      return state.toDOList.filter((todo) => formatDate(todo.date) < formatDate(today));
    }
  },
};
export const mutations = {

  SET_TODOLIST(state, payload) {
    state.toDOList = payload;
  },
  SET_FILTER_NAME(state, payload) {
    state.filterName = payload;
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
  setFilterName({ commit, state }, payload) {
    commit("SET_FILTER_NAME", payload);
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
    items[index].status = payload.status ? payload.status : '' ;
    commit('SET_TODOLIST',items)
  },
  resetState({ commit }) {
    commit('RESET_STATE')
  },
};
