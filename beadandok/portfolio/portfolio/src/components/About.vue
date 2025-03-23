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
          <p class="lead">Üdvözöllek a portfólió oldalamon!</p>
          <p>Fejlesztőként tanulok, és szenvedélyem a programozás. Leginkább web technológiákkal foglalkozom.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter {
  opacity: 0;
}

.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-effect:hover {
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
