 <!-- <template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template> -->
 <template>
     <div>
      home test 
      <form @submit.prevent="postdata">
      name:<input type="" v-model="name">
      <br>
      address:<input type="" v-model="address">
      <button type="submit">POST</button>
      </form>
     </div>
</template>

<script>
export default {
  middleware: "auth",
  data(){
    return{
      name:"",
      address:""
    }
  },
  methods:{
    postdata(){
      try{
        this.$fire.firestore.collection("myRoom").doc("123admin").set(
          {
            name:this.name,
            address:this.address
          }
        )
      }
      catch(err){
        console.log(err)
      }
    }
  }
};
</script> 
 


