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
                <v-icon
                    name="bi-github"
                    scale="2"
                    class="text-primary icon">
                </v-icon>
                <v-icon
                    name="oi-logo-github"
                    scale="2"
                    animation="wrench"
                    class="text-secondary icon">
                </v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .icon:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease, color 0.3s ease;
  }
</style>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 1, title: "🛒💳Webshop", description: "https://github.com/b0nemnoe/bolt-ajax" },
        { id: 2, title: "💈✂️Barbershop", description: "https://github.com/b0nemnoe/idopontFoglalas" },
        { id: 3, title: "🗡💯CodeWars Points", description: "https://github.com/b0nemnoe/codewarsProject"},
        { id: 4, title: "🖊📚VasváriApp", description: "https://vasvariapp.hu/"}
      ]
    };
  }
};
</script>
