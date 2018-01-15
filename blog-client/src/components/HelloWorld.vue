<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <!-- <postBlog v-model="newArticle"/> -->
    <loginvuetify v-if="!loggedin" @loggedInStatus="checkToken" id='login'></loginvuetify>
    <div class="" v-else>
      <h3>Post new Blog</h3>
      <div class="form-group" >
        <textarea class="form-control" id="exampleTextarea" rows="3" v-model="newArticle"></textarea>
      </div>  
      <br>
      <button type="button" class="btn btn-primary" @click='postBlog'>Post</button>
      <br><br>
      <button type="button" class="btn btn-primary" @click="loggedOut">Log Out</button>
    </div>
    <div class="container">
      <div class="list-group">
          <listArticle v-for="a in articles" :article="a" :status="loggedin"/>
      </div>
    </div>
    
    

      <br>
      <router-view></router-view>
    
    
        
  </div>
</template>

<script>
import listArticle from '@/components/listArticle'
import postBlog from '@/components/postBlog'
import loginvuetify from '@/components/loginvuetify'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Blog-tdd Client',
      articles : [],
      newArticle : '',
      loggedin : false
    }
  },
  components: {
      listArticle : listArticle,
      loginvuetify : loginvuetify
  },
  methods:{
    onload () {
      this.$http.get('/articles')
      .then(resp=>{
        this.articles = resp.data.data
      })
      .catch(err=>{
        console.log(err);
      })
    },
    postBlog () {
      console.log('HAHAHAHA')
      let token = localStorage.getItem('token')
      this.$http.post('/articles',{
        content : this.newArticle
      }, {
        headers: {
          token
        }
      })
      .then(resp=>{
        console.log('dapet resp ', resp);
        this.articles.push(resp.data.data)
        this.newArticle = ''
      })
      .catch(err=>{
        console.log(err);
      })
    },
    loggedOut () {
      localStorage.removeItem('token')
      this.checkToken()
    },
    checkToken () {
      if (localStorage.getItem('token')) {
        this.loggedin = true
      } else {
        this.loggedin = false
      }
    }
  },
  mounted : function(){
      this.onload()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
