<template lang="html">
    <div class="container">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model='username'>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="InputPassword1" placeholder="Password" @keyup.enter='login' v-model='password'>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            username : '',
            password : ''
        }
    },
    methods :{
        login(){
            axios.post('http://localhost:3000/users/login',{
                username: this.username,
                password: this.password
            })
            .then(resp=>{
                console.log(resp);
                let token = resp.data.token
                localStorage.setItem('token',token)
                this.$router.push('/profile')
            })
            .catch(err=>{
                console.log(resp);
            })
        }
    }
}
</script>

<style lang="css">
</style>
