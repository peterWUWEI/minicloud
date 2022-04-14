export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
}

export const state = () => ({
  sidebar: false,
});

export const mutations = {
  toggleSidebar(state) {
      state.sidebar = !state.sidebar;
  },
};
