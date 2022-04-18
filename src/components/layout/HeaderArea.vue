<template>
  <header class="header">
    <div class="container-fluid">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <div class="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
          <h1 class="header-title">
            <router-link
              to="/"
              class="nav-link px-2 link-secondary text-white fw-bold"
            >
              Editor de textos legislativos
            </router-link>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--etl-green);
    color: white;
}

.header-title {
    margin: 0;
    font-size: 24px;
}
</style>
