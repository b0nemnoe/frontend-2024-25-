<template>
  <section id="languages" class="py-5">
    <div class="container">
      <h1 class="mb-4">Programozási nyelvek</h1>
      <div class="row">
        <div v-for="lang in languages" :key="lang.id" class="col-md-6 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body d-flex align-items-center">
              <v-icon :name="lang.icon" scale="2" class="text-primary"></v-icon>
              <h3>&nbsp;{{ lang.title }} </h3>

            </div>
            <p class="p-3"> {{ lang.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Languages",
  data() {
    return {
      languages: [
        { id: 1, title: "C#", description: ".NET keretrendszerben készítek backend alkalmazásokat és API-kat.", icon: "vi-file-type-csharp2" },
        { id: 2, title: "Vue.js", description: "Frontend alkalmazások fejlesztése modern JavaScript könyvtárakkal.", icon: "vi-file-type-vue" },
        { id: 3, title: "Java", description: "Konzolos alkalmazások fejlesztése.", icon: "vi-file-type-java" },
        { id: 4, title: "Python", description: "Konzolos alkalmazások fejlesztése.", icon: "vi-file-type-python" }
      ]
    };
  }
};
</script>