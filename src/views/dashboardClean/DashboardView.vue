<template>
    <div class="container">
        <div v-if="loading">
            <span>Carregando...</span>
        </div>
        <div v-else>
            <parametros-pesquisa-proposicao
                :parametros="_parametrosPesquisaProposicao"
                @pesquisar="salvarParametrosPesquisa"
            />

            <!-- VISÃO MOBILE -->
            <div class="d-md-none">
                <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="minhas-emendas-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#minhasEmendas"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            Minhas emendas
                            <span
                                class="badge bg-secondary"
                            >{{ minhasEmendas.length }}</span>
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="medidas-provisorias-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#medidasProvisorias"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            Medidas provisórias recentes
                            <span
                                class="badge bg-secondary"
                            >{{ proposicoesRecentes.length }}</span>
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="minhasEmendas"
                        role="tabpanel"
                        aria-labelledby="minhas-emendas-tab"
                    >
                        <dashboard-card-minhas-emendas :emendas="minhasEmendas" />
                    </div>
                    <div
                        class="tab-pane fade"
                        id="medidasProvisorias"
                        role="tabpanel"
                        aria-labelledby="medidas-provisorias-tab"
                    >
                        <lista-proposicoes :proposicoes="proposicoesRecentes" />
                    </div>
                </div>
            </div>

            <!-- VISÃO DESKTOP -->
            <div class="d-none d-md-block">
                <div class="row">
                    <div class="col-lg-4 offset-lg-2 col-md-6">
                        <h5>
                            Minhas emendas
                            <span class="badge bg-primary">{{ minhasEmendas.length }}</span>
                        </h5>
                        <dashboard-card-minhas-emendas :emendas="minhasEmendas" />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5>
                            Medidas provisórias recentes
                            <span
                                class="badge bg-primary"
                            >{{ proposicoesRecentes.length }}</span>
                        </h5>
                        <lista-proposicoes :proposicoes="proposicoesRecentes" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue";
import { Emenda, Proposicao, IParametrosPesquisaProposicao } from "@/model";
import {
    ordenarProposicoesMaisRecentePrimeiro
} from "../../utils/proposicoes";
import proposicaoService from '../../servicos/proposicaoService';
import { useAppStore } from "../../stores/appStore";

const ParametrosPesquisaProposicao = defineAsyncComponent(
    () => import("../../components/comuns/ParametrosPesquisaProposicao.vue")
);
const DashboardCardMinhasEmendas = defineAsyncComponent(
    () => import("./DashboardCardMinhasEmendas.vue")
);
const ListaProposicoes = defineAsyncComponent(
    () => import("../../components/comuns/ListaProposicoes.vue")
);

const loading = ref(false);
const proposicoesRecentes = ref<Proposicao[]>([]);
const minhasEmendas = ref<Emenda[]>([]);
const _parametrosPesquisaProposicao = ref<IParametrosPesquisaProposicao>({
    sigla: 'MPV',
});

const appStore = useAppStore();

onMounted(() => {
    loading.value = true;
    proposicaoService.buscarProposicoes('MPV', undefined, new Date().getFullYear())
        .then((resProposicoes) => {
            proposicoesRecentes.value = ordenarProposicoesMaisRecentePrimeiro(resProposicoes);
        }).finally(() => loading.value = false);

    minhasEmendas.value = appStore.lerEmendas();

    if (window.history.state.parametrosPesquisaProposicao) {
        _parametrosPesquisaProposicao.value = window.history.state.parametrosPesquisaProposicao;
    }
});

function salvarParametrosPesquisa(parametrosPesquisa: IParametrosPesquisaProposicao) {
    // dashboardStore.setParametrosPesquisaProposicao(parametrosPesquisa);
    // TODO: salvar estado da página
    window.history.replaceState({
        parametrosPesquisaProposicao: parametrosPesquisa
    }, '', window.location.href);
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>
