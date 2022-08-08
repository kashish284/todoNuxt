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
      <v-btn @click=" addTask()" >Add</v-btn>
    </div>
    <div class="tasks">
      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task"/>
    </div>
     <v-btn color="primary" @click="signOut()"> Sign Out </v-btn>
</main>
 
</template>
<script>


import Task from "~/components/Task.vue";
export default {
  middleware: "auth",
  data (){
    return {
      newTask: '',
      id:''
    }
  },
 
  methods: {
     signOut() {
      this.$fire.auth.signOut();
      window.location = "/login";
    },
    addTask () {
      if(this.newTask){
        this.$fire.firestore.collection("todos").add(
          {
            
          }).then((res)=>{
             this.$fire.firestore.collection("todos").doc(res.id).set(
              {
                task:this.newTask,
                id:res.id
               
               
              }
             
             ).then(()=>{
              console.log(res.id)
              this.$store.commit('ADD_TASK',this.newTask )
              this.newTask="";
             })
      })
        
      }
      
    },
    
  },
mounted(){
    this.$fire.firestore.collection("todos").get().then(res=>{
      res.forEach(x=>{
        this.$store.commit('ADD_TASK',x.data().task);
      })
    })
},

}
</script>