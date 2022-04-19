<template>
  <div class="card-proposicao">
    <span class="card-proposicao-sigla">{{ getProposicaoBasicaFromObjeto(item).sigla }}</span>
    <div class="card-proposicao-body">
      <card-emenda v-if="isEmendaEmDisco(item)" :emenda="getEmendaFromObjeto(item)" />
      <card-proposicao :proposicao="getProposicaoBasicaFromObjeto(item)" />
      <acoes-permitidas-vue :item="item" :acoes-permitidas="acoesPermitidas" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Proposicao, EmendaEmDisco, AcaoPermitida } from "../../model";
import { getProposicaoBasicaFromObjeto, isEmendaEmDisco } from "../../utils/typeUtils";

import CardEmenda from "../../components/comuns/CardEmenda.vue";
import CardProposicao from "../../components/comuns/CardProposicao.vue";
import AcoesPermitidasVue from "../../components/comuns/AcoesPermitidas.vue";

interface Props {
  item: Proposicao | EmendaEmDisco;
  acoesPermitidas: Array<AcaoPermitida>;
}

const props = defineProps<Props>();
const item = ref(props.item);
const acoesPermitidas = ref(props.acoesPermitidas);

function getEmendaFromObjeto(objeto: Proposicao | EmendaEmDisco) {
  return objeto as EmendaEmDisco;
}
</script>

<style scoped src="../../assets/css/listaproposicao.css">
</style>
