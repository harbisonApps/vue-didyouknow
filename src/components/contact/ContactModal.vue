<template>
    <div>
        <button @click="toggle" class="contactBtn">Contact Us</button>
        <div class="modal" :class="{ 'is-visible': !isActive }">
        <div class="modal-background"></div>

            <form>
                <header>Drop us a note and we will get back to you as soon a s possible.</header>
                <section>
                    <input v-model="name" required class="input" type="text" placeholder="name">
                    <br>
                    <input v-model="email" required class="input" type="text" placeholder="email">
                    <br>
                    <input v-model="phone" class="input" type="text" placeholder="phone">
                    <br>
                    <textarea v-model="message" required class="input" type="text" placeholder="message"/>
                    <br>
                </section>
            </form>
            <button @click="toggle" class="closeBtn close" aria-label="close">cancel</button>
            <button @click="send" class="addBtn">Send</button>
        </div>
    </div>
</template>
<script>
import { contactCreate } from '@/services/ContactService'
import swal from "sweetalert";
export default {
    name: 'contact-modal',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            isActive: false,
        }
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive;
        },
        send(){
          let data = {
              name: this.name, 
              email: this.email, 
              phone: this.phone,
              message: this.message,}
        contactCreate(data)
            .then(data => {
                this.$emit('contactCreate', data.contact)
                this.name = this.email = this.phone = this.message
                this.toggle();
                swal("Sent", "", "success");
            })
            .catch(err => {
              swal("You missed one", "", "warning")
              console.log(err)
            });
      }
    }
}
</script>
<style scoped>
    .is-visible{
    display: none
  }
  .contactBtn{
      width: 200px;
      font-size: 2rem;
      border: none;
      border-radius: 25px;
      color: white;
      background: rgba(25, 25, 112, 0.61);
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