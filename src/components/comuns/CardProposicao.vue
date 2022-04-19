<template>
  <div>
    <span class="card-proposicao-dados">
      <span class="card-proposicao-numero">{{ identificacaoProposicao }}</span>
      <!-- <span class="card-proposicao-autor">(Autor da proposição)</span> -->
      <!-- <span class="card-proposicao-data">Data 14/03/2021</span> -->
      <!-- <span class="card-proposicao-total-emendas">9 emendas</span> -->
    </span>
    <span class="card-proposicao-text">{{ proposicao.ementa }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ProposicaoBasica } from "../../model";

interface Props {
  proposicao: ProposicaoBasica;
}

const props = defineProps<Props>();
const proposicao = ref(props.proposicao);
const identificacaoProposicao = computed(
  () =>
    `${proposicao.value.sigla} ${getNumero(proposicao.value.numero)}/${
      proposicao.value.ano
    }`
);

function getNumero(value: string): string {
  const numero = Number(value);
  return isNaN(numero) ? value : numero.toString();
}
</script>

<style scoped src="../../assets/css/listaproposicao.css"></style>
