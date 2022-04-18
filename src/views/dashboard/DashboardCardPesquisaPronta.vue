<template>
  <div
    class="col-sm-12 col-md-6 col-lg-4 offset-lg-2 d-flex align-items-stretch"
    @click="emitirEventoCardClick"
    ref="root"
  >
    <a
      @click.prevent
      class="card-dashboard"
      :class="{
        'card-dashboard--ativo':
          dashboardStore.cardAtivo?.tipo?.toString() === config.tipo,
      }"
    >
      <div class="card-dashboard-body">
        <div class="card-dashboard-header">
          <span class="card-dashboard-title">{{ config.totalItens }}</span>
          <svg class="bi card-dashboard-icon">
            <use :xlink:href="'#' + config.icone" />
          </svg>
        </div>
        <h2 class="card-dashboard-subtitle">{{ config.titulo }}</h2>
        <span class="card-dashboard-text">{{ config.subtitulo }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ConfigCard } from "../../model";
import { useDashboardStore } from "../../stores/dashboardStore";

const dashboardStore = useDashboardStore();

interface Props {
  config: ConfigCard;
}
const props = defineProps<Props>();
const root = ref<HTMLElement>();
const config = { ...props.config };

function emitirEventoCardClick() {
  root.value?.dispatchEvent(
    new CustomEvent("card-click", {
      bubbles: true,
      detail: {
        tipo: config.tipo,
        titulo: config.titulo,
      },
    })
  );
}
</script>

<style scoped src="../../assets/css/carddashboard.css"></style>
