<template lang="html">
  
          <router-link :to="{name:'detailedArticle',params:{id:article._id}}" class="list-group-item list-group-item-action" :id="id">
            {{article.content}} <button type="button" class="btn btn-warning disabled" v-if="status" @click='removeArticle'>Delete</button>
        </router-link>
        
    
  
</template>

<script>
export default {
    props : ['article','status'],
    data(){
        return{
            id : this.article._id
        }
    },
    methods : {
      removeArticle () {
        this.$http.delete(`/articles/${this.id}`)
        .then(resp=>{
          document.getElementById(this.id).remove()
          // alert('berhasil delete');
        })
        .catch(err=>{
          console.log(err);
        })
      }
    }
}
</script>

<style lang="css">
</style>
