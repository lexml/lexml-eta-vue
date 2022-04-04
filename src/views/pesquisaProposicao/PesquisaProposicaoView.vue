<template>
    <div class="container">
        <!-- TODO: USAR v-model -->
        <parametros-pesquisa-proposicao :parametros="parametros" @pesquisar="pesquisar" />
        <div class="row">
            <div v-if="loading">
                <span>Carregando...</span>
            </div>
            <div v-else class="col-lg-8 offset-lg-2">
                <h6>
                    Resultado da pesquisa
                    <span class="badge bg-primary">{{ proposicoes.length }}</span>
                </h6>
                <lista-proposicoes :proposicoes="proposicoes" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Proposicao } from "@/model";
import {
    defineAsyncComponent,
    ref,
    watch,
    onMounted
} from "vue";
import { useRoute } from "vue-router";
import {
    ordenarProposicoesMaisRecentePrimeiro
} from "../../utils/proposicoes";

import proposicaoService from '../../servicos/proposicaoService';

const ParametrosPesquisaProposicao = defineAsyncComponent(
    () => import("../../components/comuns/ParametrosPesquisaProposicao.vue")
);
const ListaProposicoes = defineAsyncComponent(
    () => import("../../components/comuns/ListaProposicoes.vue")
);

const route = useRoute();
interface IParametrosPesquisaProposicao {
    sigla?: string;
    numero?: string;
    ano?: number;
}

const parametros = ref<IParametrosPesquisaProposicao>({});

const loading = ref(false);

watch(() => route.query, () => ajustarParametrosEPesquisar());
onMounted(() => ajustarParametrosEPesquisar());

const proposicoes = ref<Proposicao[]>([]);

function ajustarParametrosEPesquisar(): void {
    parametros.value = {
        sigla: route.query.sigla?.toString(),
        numero: route.query.numero?.toString(),
        ano: Number(route.query.ano?.toString()),
    };
    pesquisar(parametros.value);
}

function pesquisar(params: IParametrosPesquisaProposicao) {
    if (params.sigla && params.ano) {
        loading.value = true;
        proposicaoService.buscarProposicoes(params.sigla, params.numero, params.ano).then((res) => {
            proposicoes.value = ordenarProposicoesMaisRecentePrimeiro(res);
        }).finally(() => loading.value = false);
    }
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>
