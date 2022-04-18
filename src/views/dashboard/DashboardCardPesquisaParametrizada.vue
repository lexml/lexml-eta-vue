<template>
  <div class="col-lg-3 col-sm-12 d-flex align-items-stretch">
    <div
      class="card-dashboard card-search"
      :class="{
        'card-dashboard--ativo': dashboardStore.cardAtivo?.tipo === 'Parametrizada',
      }"
    >
      <div class="card-dashboard-body">
        <div class="card-dashboard-header">
          <h2 class="card-dashboard-pesquisa-title">
            Pesquisa
          </h2>
          <svg class="bi card-dashboard-icon">
            <use xlink:href="#search" />
          </svg>
        </div>
        <div @keyup.enter="emitirEventoCardClick">
          <input
            type="search"
            v-model="config.sigla"
            class="form-control"
            placeholder="Sigla"
            aria-label="Sigla"
          />
          <input
            type="search"
            v-model="config.numero"
            class="form-control"
            placeholder="Número"
            aria-label="Número"
          />
          <input
            type="search"
            v-model="config.ano"
            class="form-control"
            placeholder="Ano"
            aria-label="Ano"
          />
        </div>
        <button
          type="button"
          :disabled="isDisabled"
          @click="emitirEventoCardClick"
          class="btn btn-primary"
        >
          Pesquisar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from "vue";
import { useDashboardStore } from "../../stores/dashboardStore";
import { ParametrosPesquisaProposicao } from "../../model";
const dashboardStore = useDashboardStore();

interface Props {
  config?: ParametrosPesquisaProposicao;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({
    sigla: "MPV",
    ano: new Date().getFullYear(),
  }),
});

const { config } = toRefs(props);

const isDisabled = computed(() => !config.value?.sigla || !config.value?.ano);

function emitirEventoCardClick(evt: Event) {
  evt.target?.dispatchEvent(
    new CustomEvent("card-click", {
      bubbles: true,
      detail: {
        tipo: "Parametrizada",
        titulo: "Teste",
        parametros: config.value,
      },
    })
  );
}
</script>

<style scoped src="../../assets/css/carddashboard.css"></style>
