<template>
    <div>
    <button @click="toggle" class="button createBtn">New Fact</button>
    <div class="modal" :class="{ 'is-visible': !isActive }">
      <div class="modal-background"></div>
      <form>
        <header>
          <h3>Add A fact</h3>
        </header>
        <section class="modal-card-body">
          <input v-model="name" required type="text" placeholder="name">
          <br>
          <input v-model="category" required type="text" placeholder="category">
          <br>
          <input v-model="description" required type="text" placeholder="description">
          <br>
          <textarea v-model="fullText" rows="7" type="text" required  placeholder="enter content"></textarea>
          <br>
          <input v-model="imageUrl" required type="text" placeholder="imageUrl">
          <br>
          <VueSuglify v-show="false" :slugify="name" :slug.sync="slug">
            <input disabled class="col" slot-scope="{inputBidding}" v-bind="inputBidding"
              type="text" placeholder="slug ...">
          </VueSuglify>
        </section>
      </form>
      <button @click="toggle" class="closeBtn close" aria-label="close">cancel</button>
      <button @click="create" class="addBtn">Add A Fact</button>
      <hr>
    </div>
  </div>
</template>
<script>
import { factCreate } from '@/services/FactService'
import swal from "sweetalert";
import VueSuglify from 'vue-suglify'
export default {
    name: 'create-fact',
    components: {VueSuglify},
    data(){
    return {
      name: '',
      category: '',
      description: '',
      fullText: '',
      imageUrl: '',
      slug: '',
      isActive: false,
    }
  },
  methods: {
      create(){
          let data = {
              name: this.name, 
              category: this.category, 
              description: this.description,
              fullText: this.fullText,
              imageUrl: this.imageUrl,
              slug: this.slug,}
        factCreate(data)
            .then(data => {
                this.$emit('factCreate', data.fact)
                this.name = this.category = this.description = this.fullText = this.imageUrl = this.slug = ''
                this.toggle();
                swal("Fact Created", "", "success");
            })
            .catch(err => {
              swal("All fields are required", "", "warning")
              console.log(err)
            });
      },

      toggle(){
      this.isActive = !this.isActive;
    },
  }
}
</script>
<style scoped>
.is-visible{
    display: none
  }
.createBtn{
    font-size: 1.5rem;
    background: white;
    color:  green;
    border: 1px solid grey;
    border-radius: 25px;
    cursor: pointer;
    padding: 7px;
  }
  .addBtn{
    margin: 10px;
    border: 1px solid grey;
    border-radius: 25px;
    color: green;
    background: transparent;
    padding: 7px;
    cursor: pointer;
  }
  .closeBtn{
    margin: 10px;
    border: 1px solid rgba(255, 0, 0, 0.651);
    border-radius: 25px;
    color: white;
    background:  rgba(255, 0, 0, 0.651);
    padding: 7px;
    cursor: pointer;
  }
</style>