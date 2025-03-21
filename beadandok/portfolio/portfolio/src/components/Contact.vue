<template>
  <section id="contact" class="py-5 bg-dark text-white">
    <div class="container">
      <h2 class="text-center mb-4">Kapcsolatfelvétel</h2>
      <form @submit.prevent="submitForm" class="w-75 mx-auto p-5">
        <input v-model="name" placeholder="Név" required class="form-control mb-3"/>
        <input v-model="email" type="email" placeholder="Email cím" required class="form-control mb-3"/>
        <textarea v-model="message" placeholder="Üzenet" rows=4 required class="form-control mb-3"></textarea>
        <button type="submit" class="btn btn-primary w-100">Küldés</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    submitForm() {
      alert(`Üzenet elküldve!\nNév: ${this.name}\nEmail: ${this.email}\nÜzenet:${this.message}`);
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>
