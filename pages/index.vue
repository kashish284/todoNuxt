<template>
    <main>
      <h1>Task Board</h1>
      <p>Create a list of tasks</p>
      <div class="create-new">
        <input 
          type="text" 
          v-model="newTask" 
          placeholder="Add a new task" 
          @keypress.enter=" addTask()" />
        <button @click="addTask()" >Add</button>
      </div>
      <div class="tasks">
        <Task
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task"/>
      </div>
       <button color="primary" @click="signOut()"> Sign Out </button>
  </main>
   
  </template>
  <script>

  import Task from "~/components/Task.vue";
  import {useStore} from 'vuex'
  export default {
    setup(){
        const store = useStore();
        newTask= ref('');
        id=ref('');
   
      function signOut() {
        this.$fire.auth.signOut();
        window.location = "/login";
      };
      function addTask () {
        if(newTask){
          this.$fire.firestore.collection("todos").add(
            {
              
            }).then((res)=>{
               this.$fire.firestore.collection("todos").doc(res.id).set(
                {
                  task:newTask,
                  id:res.id
                }
               
               ).then(()=>{
                console.log(res.id)
                store.commit('ADD_TASK',newTask )
                newTask="";
               })
        })  
        }
    }
        return {addTask,signOut}
        
      
      
    
},
  mounted(){
      this.$fire.firestore.collection("todos").get().then(res=>{
        res.forEach(x=>{
          store.commit('ADD_TASK',x.data().task);
        })
      })
  },
  
  }
  </script>