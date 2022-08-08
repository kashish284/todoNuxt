<template>
  <div>
    <v-container>
      <h1>
        Welcome <span v-if="currentUser">{{ currentUser.displayName }}</span>
      </h1>
      <v-card elevcation="2" class="pa-5">
        <SignIn />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SignIn from "../components/SignIn.vue";
export default {
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    signOut() {
      console.log("Signed Out");
      this.$fire.auth.signOut();
     
      this.$router.push('/login');
    },
  },
  components: { SignIn },
};
</script>

<style></style>