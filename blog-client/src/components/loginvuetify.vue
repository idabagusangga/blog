<template lang="html">
  <div class="">
    <v-form v-model="valid">
      <v-text-field
        label="Username"
        v-model="username"
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        @keyup.enter='login'
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return{
      username : '',
      password : '',
      loggedin : false
    }
  },
  methods :{
      login () {
          this.$http.post('/users/login',{
              username: this.username,
              password: this.password
          })
          .then(resp=>{
              console.log(resp);
              let token = resp.data.token
              localStorage.setItem('token',token)
              this.loggedin = true
              this.$emit('loggedInStatus',this.loggedin)
              
          })
          .catch(err=>{
              console.log(resp);
          })
      }
  // }
  // watch : {
  //   loggedin () {
  //     this.$emit('loggedInStatus',this.loggedin)
  //   }
  }
}
</script>

<style lang="css">
</style>
