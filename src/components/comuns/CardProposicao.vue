<template>
  <div>
    <span class="card-proposicao-dados">
      <span class="card-proposicao-numero">{{ proposicao.descricaoIdentificacao }}</span>
      <!-- <span class="card-proposicao-autor">(Autor da proposição)</span> -->
      <!-- <span class="card-proposicao-data">Data 14/03/2021</span> -->
      <!-- <span class="card-proposicao-total-emendas">9 emendas</span> -->
    </span>
    <span class="card-proposicao-text">{{ proposicao.ementa }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Proposicao } from "../../model";

interface Props {
  proposicao: Proposicao;
}

const props = defineProps<Props>();
const proposicao = ref(props.proposicao);
</script>

<style scoped src="../../assets/css/listaproposicao.css">
</style>
