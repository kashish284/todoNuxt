export const state = () => ({
    tasks:[],
    user: false,
  });
  
  export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      if (authUser) {
        const { uid, email, displayName } = authUser;
        state.user = { uid, email, displayName };
      } else {
        state.user = false;
      }
    },
    ADD_TASK(state, task) {
        //console.log(taskid);
		state.tasks = [{ content: task, done: false}, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	}
  };