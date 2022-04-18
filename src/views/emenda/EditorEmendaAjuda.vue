<template>
  <div v-if="itensMenu?.length">
    <!-- <p>
      O dispositivo
      <strong>"{{ textoRotuloDispositivo }}"</strong> está selecionado.
    </p> -->
    <p>O que você pode fazer com o dispositivo selecionado:</p>
    <ul>
      <li>
        Sugerir uma nova redação para o dispositivo. Para isso basta alterar o texto do
        dispositivo selecionado.
      </li>
      <li>
        Adicionar um novo dispositivo após dispositivo atual. Para isso vá para o final do
        texto e pressione a tecla
        <span class="menu-acoes badge">enter</span>.
      </li>
    </ul>

    <p>
      Além disso, clicando no menu de ações
      <span class="menu-acoes badge">⋮</span> que fica à esquerda do dispositivo
      selecionado você também pode:
    </p>
    <ul>
      <li v-for="(itemMenu, index) in itensMenu" :key="index">
        {{ itemMenu }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  itensMenu: string[];
  textoRotuloDispositivo: string;
}
const props = defineProps<Props>();
const itensMenu = computed(() => props.itensMenu);
// const textoRotuloDispositivo = computed(() => props.textoRotuloDispositivo);
</script>

<style lang="scss">
.menu-acoes {
  background-color: lightgray;
  color: black;
}
</style>
