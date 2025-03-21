<template>
  <Navbar />
  <About />
  <Projects />
  <Progs />
  <Contact />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Progs from "./components/Progs.vue";

export default {
  components: { Navbar, About, Projects, Contact, Progs }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
body {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
section {
  scroll-margin-top:70px;
}
</style>
