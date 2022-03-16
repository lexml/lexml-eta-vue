<template>
    <div>
        <dashboard-cards @card-click="atualizarRota" />
        <div v-if="loading" class="container">
            <span>Carregando...</span>
        </div>
        <dashboard-resultado-pesquisa v-else :dados="dados" />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDashboardStore } from "../../stores/dashboardStore";
import {
    TipoCard,
    DadosCard,
    ParametrosPesquisa,
    Proposicao,
    Emenda
} from "../../model";
import proposicaoService from '../../servicos/proposicaoService';

const DashboardCards = defineAsyncComponent(
    () => import("./DashboardCards.vue")
);
const DashboardResultadoPesquisa = defineAsyncComponent(
    () => import("./DashboardResultadoPesquisa.vue")
);

let dados = ref<DadosCard>();
const dashboardStore = useDashboardStore();
const route = useRoute();
const router = useRouter();
const loading = ref(false);

watch(() => route.query, (query) => {
    const params: ParametrosPesquisa = {
        tipoPesquisa: query.tipoPesquisa as TipoCard || 'Parametrizada',
        sigla: query.sigla?.toString() || 'MPV',
        numero: query.numero?.toString(),
        ano: Number(query.ano?.toString()) || new Date().getFullYear(),
        pagina: Number(query.pagina?.toString()) || 1,
    };

    dashboardStore.setDadosCardAtivo({
        tipo: params.tipoPesquisa as TipoCard,
        titulo: params.tipoPesquisa || '',
        totalItens: 0,
        lista: [],
        parametros: params
    });

    pesquisar(params);
}, {
    immediate: true,
    deep: true,
});

function atualizarRota(evt: CustomEvent) {
    let query = {
        tipoPesquisa: evt.detail.tipo
    };

    if (evt.detail.tipo === 'Parametrizada') {
        query = {
            ...query,
            ...evt.detail.parametros,
        };
    }

    router.push({
        path: '/',
        query
    });
}

function pesquisar(parametros: ParametrosPesquisa): void {
    const tempConfigPesquisa = {
        "MinhasEmendas": {
            sigla: 'MPV',
            numero: undefined,
            ano: 2019,
            pagina: 1,
        },
        "PrazoEmendaAberto": {
            sigla: 'MPV',
            numero: undefined,
            ano: 2020,
            pagina: 1,
        },
        "EmTramitacao": {
            sigla: 'MPV',
            numero: undefined,
            ano: 2021,
            pagina: 1,
        },
        "Parametrizada": {
            sigla: parametros.sigla,
            numero: parametros.numero,
            ano: parametros.ano,
            pagina: parametros.pagina,
        }
    };


    loading.value = true;
    const chave = parametros.tipoPesquisa || 'Parametrizada';
    tempConfigPesquisa[chave].pagina = parametros.pagina;
    const params = tempConfigPesquisa[chave];
    proposicaoService.buscarProposicoes(params.sigla, params.numero, params.ano).then((proposicoes) => {
        dados.value = {
            tipo: chave,
            titulo: chave,
            totalItens: proposicoes.length,
            lista: parametros.tipoPesquisa === 'MinhasEmendas' ? convertToMinhasEmendas(proposicoes) : proposicoes,
            parametros: {
                tipoPesquisa: chave,
                sigla: params.sigla,
                numero: params.numero,
                ano: params.ano,
                pagina: params.pagina,
            },
        };
        dashboardStore.setDadosCardAtivo(dados.value);
    }).finally(() => loading.value = false);
}

function convertToMinhasEmendas(proposicoes: Proposicao[]): Emenda[] {
    return proposicoes.map((proposicao, index) => ({
        titulo: 'Minha Emenda ' + (index + 1),
        proposicao,
    }));
}
</script>
