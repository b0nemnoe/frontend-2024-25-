<template>
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center mb-4">
          <transition name="fade">
            <img
              src="../assets/profilkep.JPG"
              alt="Profilkép"
              class="rounded-5 shadow-sm hover-effect"
              width="200"
            />
          </transition>
        </div>
        <div class="col-md-8">
          <h1>Németh Noel</h1>
          <i>Junior fejlesztő</i>
          <p class="lead">Üdvözöllek a portfólió oldalamon!</p>
          <p>
            Fejlesztőként tanulok, és szenvedélyem a programozás. Leginkább web technológiákkal
            foglalkozom.
          </p>

          <div class="icon-container">
            <div v-for="link in links" :key="link.id" class="icon-item">
              <a :href="link.url" target="_blank">
                <v-icon
                    :name="link.name"
                    scale="2"
                    class="text-primary link">
                </v-icon>
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
  name: 'About',
  data() {
    return {
      links: [
        { id:1, name: "bi-instagram", url: 'https://www.instagram.com/nemeth.noel.0727/' },
        { id:2, name:"bi-facebook", url: 'https://www.facebook.com/noel.nemeth.0727/' },
        { id:3, name: "bi-github", url: 'https://github.com/b0nemnoe'}
      ],
    }
  },
}
</script>

<style scoped>

h1{
  margin: 0;
}

.icon-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-item a:hover .link {
  transform: scale(1.2);
  transition: transform 0.3s ease, color 0.3s ease;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}

.hover-effect,
v-icon {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hover-effect:hover,
v-icon:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

h1 {
  animation: slideInLeft 1s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
