<template>
    <div
        class="col-lg-3 col-sm-12 d-flex align-items-stretch"
        @click="emitirEventoCardClick"
        ref="root"
    >
        <a
            @click.prevent
            class="card-dashboard"
            :class="{ 'card-dashboard--ativo': dashboardStore.cardAtivo?.tipo?.toString() === dados.tipo }"
        >
            <div class="card-dashboard-body">
                <div class="card-dashboard-header">
                    <span class="card-dashboard-title">{{ dados.totalItens }}</span>
                    <svg class="bi card-dashboard-icon">
                        <use :xlink:href="'#' + dados.icone" />
                    </svg>
                </div>
                <h2 class="card-dashboard-subtitle">{{ dados.titulo }}</h2>
                <span class="card-dashboard-text">{{ dados.subtitulo }}</span>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TipoCard } from '../../model';
import { useDashboardStore } from "../../stores/dashboardStore";
// import { storeToRefs } from 'pinia';

const dashboardStore = useDashboardStore();
// const { cardAtivo } = storeToRefs(dashboardStore);

interface Dados {
    titulo: string;
    subtitulo?: string;
    icone: string;
    totalItens: number;
    tipo: TipoCard;
}
interface Props {
    dados: Dados;
}
const props = defineProps<Props>();
const root = ref<HTMLElement>();
const dados = { ...props.dados };

function emitirEventoCardClick() {
    root.value?.dispatchEvent(new CustomEvent('card-click', {
        bubbles: true,
        detail: {
            tipo: dados.tipo,
            titulo: dados.titulo,
        },
    }));
}
</script>

<style scoped src='../../assets/css/carddashboard.css'>
</style>
