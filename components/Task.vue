<template>
	<div :class="`task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.content }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
   
	props: ['task','id'],
	setup(){
		function toggleDone() {
			this.$store.commit('TOGGLE_TASK', this.task);
		}
		function removeTask() {
            console.log(this.task);
            this.$fire.firestore.collection("todos").doc(task.id).delete().then(()=>{
                this.$store.commit('REMOVE_TASK', this.task);
            })
			
		}
        return {toggleDone,removeTask}
	}
    
}
</script>

<style>
</style>