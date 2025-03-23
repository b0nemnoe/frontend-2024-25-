<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center">
        <a class="navbar-brand m-1" href="#">Németh</a>
        <a class="navbar-brand text-secondary" href="#">Noel</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#about">Rólam</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projektek</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Kapcsolat</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
