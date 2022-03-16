<template>
    <header-area />
    <router-view />
    <footer-area v-if="false" />
    <icones-svg />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const HeaderArea = defineAsyncComponent(
    () => import("./components/layout/HeaderArea.vue")
);
const FooterArea = defineAsyncComponent(
    () => import("./components/layout/FooterArea.vue")
);
const IconesSvg = defineAsyncComponent(
    () => import("./components/comuns/IconesSvg.vue")
);

</script>

<style lang="scss" src="./assets/css/main.css">
// body {
//     box-sizing: border-box;
// }

// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }

// nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
