<template lang="html">
    <div class="">
        <div class="card text-white bg-dark mb-3 pokka"  style="max-width: 20rem;">
        <div class="card-header"></div>
        <div class="card-body">
          <h4 class="card-title">{{article.userId[0].username}}</h4>
          <p class="card-text">{{article.content}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props : ['id'],
    data () {
        return {
            article : {}
        }
    },
    methods: {
        getDetailedArticle(id){
          console.log(this.id);
            axios.get('http://localhost:3000/articles/' + id)
            .then(resp=>{
              this.article = resp.data.data
              // console.log(resp);
            })
            .catch(err=>{
              console.log(err);
            })
        }
    },
    mounted () {
      this.getDetailedArticle(this.id)
    },
    watch: {
      id (newId) {
        this.getDetailedArticle(newId)
      }
    }
}
</script>

<style lang="css">
.pokka {
  margin: auto;
}
</style>
