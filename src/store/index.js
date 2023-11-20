import { createStore } from "vuex";
import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
const store = createStore({
    state,
    mutations,
    getters,
    actions
})

export default store;