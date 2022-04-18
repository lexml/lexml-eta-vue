<template>
  <header-area />
  <div class="bs-eta">
    <router-view />
  </div>
  <footer-area v-if="false" />
  <icones-svg />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from './stores/appStore';
import acoes from './utils/acoes';

acoes.configModulo(useRouter());

const HeaderArea = defineAsyncComponent(
  () => import("./components/layout/HeaderArea.vue")
);
const FooterArea = defineAsyncComponent(
  () => import("./components/layout/FooterArea.vue")
);
const IconesSvg = defineAsyncComponent(
  () => import("./components/comuns/IconesSvg.vue")
);

const appStore = useAppStore();
appStore.lerEmendas();
</script>
<style lang="scss">
@import "./assets/css/main.css";
@import "./assets/css/bs-eta.css";
</style>
