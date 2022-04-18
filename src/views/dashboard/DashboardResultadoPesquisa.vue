<template>
  <div v-if="dados">
    <div class="row justify-content-center">
      <div class="col-lg-8 p-3 mb-2 border-bottom border-light">
        <h3 class="lista-proposicao-header">
          {{ dados.titulo }}
        </h3>
        <span class="badge rounded-pill bg-primary">{{ dados.totalItens }}</span>
        <slot />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <ul class="lista-proposicao mb-5">
          <li
            v-for="(item, index) in dados.lista"
            :key="getKey(item, index)"
            class="lista-proposicao-item"
          >
            <dashboard-resultado-pesquisa-item
              :item="item"
              :acoes-permitidas="getAcoesPermitidas(item)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { DadosCard, Proposicao, Emenda, AcaoPermitida } from "../../model";

const DashboardResultadoPesquisaItem = defineAsyncComponent(
  () => import("./DashboardResultadoPesquisaItem.vue")
);

interface Props {
  dados?: DadosCard;
}
defineProps<Props>();

function getKey(item: Proposicao | Emenda, index: number) {
  if ("idIdentificacao" in item) {
    return (item as Proposicao).idIdentificacao + index;
  } else {
    return (item as Emenda).id;
  }
}

function getAcoesPermitidas(item: Proposicao | Emenda): AcaoPermitida[] {
  if ("idIdentificacao" in item) {
    return ["criarEmenda"];
  } else {
    return ["abrir", "excluir", "criarEmenda"];
  }
}
</script>

<style scoped src="../../assets/css/listaproposicao.css"></style>
