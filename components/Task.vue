<template>
	<div :class="`task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.content }}</div>
		<div class="buttons">
			<v-btn @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</v-btn>
			<v-btn @click="removeTask" class="delete">Delete</v-btn>
		</div>
	</div>
</template>

<script>
export default {
   
	props: ['task','id'],
	methods: {
		toggleDone() {
			this.$store.commit('TOGGLE_TASK', this.task);
		},
		removeTask() {
            console.log(this.task);
            this.$fire.firestore.collection("todos").doc(task.id).delete().then(()=>{
                this.$store.commit('REMOVE_TASK', this.task);
            })
			
		}
	}
    
}
</script>

<style>
</style>