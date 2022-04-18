<template>
  <div class="card-dashboard">
    <div class="card-dashboard-body">
      <div class="list-group">
        <a
          v-for="proposicao in props.proposicoes"
          :key="proposicao.idIdentificacao"
          @click.prevent="_criarEmenda($event, proposicao)"
          href="#"
          class="list-group-item list-group-item-action"
          :class="{ 'prazo-aberto': isPrazoAbertoFake(props.proposicoes, proposicao) }"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h6 class="list-group-item-title">{{ proposicao.descricaoIdentificacao }}</h6>
            <menu-acoes :item="proposicao" />
          </div>
          <span class="list-group-item-data">00/00/0000</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Proposicao } from "../../model";
import { criarEmenda } from "../../utils/acoes";
import { isPrazoAbertoFake } from "../../utils/proposicoes";

const MenuAcoes = defineAsyncComponent(
  () => import("../../components/comuns/MenuAcoes.vue")
);

interface Props {
  proposicoes: Proposicao[];
}

const props = defineProps<Props>();

function _criarEmenda(ev: Event, proposicao: Proposicao) {
  const el = ev.target as HTMLElement;

  // Checa se o click foi no "corpo" da proposição
  if (!el.classList.contains('context-menu')) {
    criarEmenda(proposicao);
  }
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>
