<template>
  <section id="projects" class="py-5">
    <div class="container">
      <h1 class="mb-4">Projektjeim</h1>
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h3>{{ project.title }}</h3>
              <a :href="project.description" target="_blank" class="d-flex align-items-center">
                <v-icon name="bi-github" scale="2" class="text-primary"></v-icon>
                <v-icon name="oi-logo-github" scale="2" animation="wrench" class="text-secondary"></v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 1, title: "🛒💳Webshop", description: "https://github.com/b0nemnoe/bolt-ajax" },
        { id: 2, title: "💈✂️Barbershop", description: "https://github.com/b0nemnoe/idopontFoglalas" }
      ]
    };
  }
};
</script>
