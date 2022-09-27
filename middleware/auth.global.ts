import {useStore} from "vuex";
export default defineNuxtRouteMiddleware(( to, from )=>{
    const store = useStore();
    if (!store.state.user) {
      console.log("in middleware");
      navigateTo("/login");
      console.log("routed");
    }
}
)
  