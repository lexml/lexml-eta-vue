<template>
    <div class="col-lg-3 col-sm-12 d-flex align-items-stretch">
        <div
            class="card-dashboard card-search"
            :class="{ 'card-dashboard--ativo': dashboardStore.cardAtivo?.tipo === 'Parametrizada' }"
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
                        v-model="dados.sigla"
                        class="form-control"
                        placeholder="Sigla"
                        aria-label="Sigla"
                    />
                    <input
                        type="search"
                        v-model="dados.numero"
                        class="form-control"
                        placeholder="Número"
                        aria-label="Número"
                    />
                    <input
                        type="search"
                        v-model="dados.ano"
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
                ou
                <acoes-permitidas :acoes-permitidas="['abrir']" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs, computed, defineAsyncComponent } from 'vue';
import { useDashboardStore } from "../../stores/dashboardStore";
const dashboardStore = useDashboardStore();

const AcoesPermitidas = defineAsyncComponent(
    () => import("../../components/comuns/AcoesPermitidas.vue")
);

interface Dados {
    sigla?: string;
    numero?: string;
    ano?: number;
}
interface Props {
    dados?: Dados;
}

const props = withDefaults(defineProps<Props>(), {
    dados: () => ({
        sigla: 'MPV',
        ano: new Date().getFullYear()
    })
});

const { dados } = toRefs(props);

const isDisabled = computed(() => !dados.value?.sigla || !dados.value?.ano);

const emit = defineEmits(['pesquisar']);

function emitirEventoCardClick() {
    emit('pesquisar', { ...dados.value });
}
</script>

<style scoped src="../../assets/css/carddashboard.css">
</style>
