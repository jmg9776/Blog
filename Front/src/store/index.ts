import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            hamButtonClick: false
        };
    },
    mutations: {
        TOGGLE_HAM_BUTTON(state) {
            state.hamButtonClick = !state.hamButtonClick;
        }
    },
    actions: {
        toggleHamButton({ commit }) {
            commit('TOGGLE_HAM_BUTTON');
        }
    }
});