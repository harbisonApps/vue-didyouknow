<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ContactModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactModal from '@/components/contact/ContactModal.vue'

export default {
  name: 'Home',
  components: {
    ContactModal
  }
}
</script>
