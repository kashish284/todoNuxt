<template>
    <div id="firebaseui-auth-container"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      const firebaseui = require("firebaseui");
      require("firebaseui/dist/firebaseui.css");
      console.log(this.$router);
      let that = this;
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(this.$fire.auth);
  
      const config = {
        signInOptions: [
          this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
          this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: "/",
        callbacks: {
          signInSuccessWithAuthResult() {
            console.log("Successfully signed in");
           
            that.$router.push({path:'/'});
          },
        },
      };
      ui.start("#firebaseui-auth-container", config);
    },
  };
  </script>