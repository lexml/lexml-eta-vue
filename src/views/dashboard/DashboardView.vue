<template>
    <div>
        <dashboard-cards @card-click="atualizarRota" />
        <div v-if="loading" class="container">
            <span>Carregando...</span>
        </div>
        <dashboard-resultado-pesquisa v-else :dados="dados">
            <div v-if="dados?.tipo === 'MinhasEmendas'">
                <acoes-permitidas :acoes-permitidas="['abrir']" />
            </div>
        </dashboard-resultado-pesquisa>
    </div>
</template>

<script setup lang="ts">
import {
    defineAsyncComponent,
    ref,
    watch,
    onMounted
} from "vue";
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
import { useAppStore } from "../../stores/appStore";

const DashboardCards = defineAsyncComponent(
    () => import("./DashboardCards.vue")
);
const DashboardResultadoPesquisa = defineAsyncComponent(
    () => import("./DashboardResultadoPesquisa.vue")
);
const AcoesPermitidas = defineAsyncComponent(
    () => import("../../components/comuns/AcoesPermitidas.vue")
);

let dados = ref<DadosCard>();
const dashboardStore = useDashboardStore();
const route = useRoute();
const router = useRouter();
const loading = ref(false);

watch(() => route.query, () => {
    pesquisarPorParametrosDaRota();
}, {
    deep: true,
});

onMounted(() => {
    pesquisarPorParametrosDaRota();
});

function pesquisarPorParametrosDaRota() {
    const { sigla, numero, ano, tipoPesquisa, pagina } = route.query;
    pesquisar(sigla?.toString(), numero?.toString(), Number(ano?.toString()), tipoPesquisa?.toString() as TipoCard, Number(pagina?.toString()));
}

function pesquisar(sigla = 'MPV', numero?: string, ano?: number, tipoPesquisa: TipoCard = 'Parametrizada', pagina = 1) {
    loading.value = true;
    if (tipoPesquisa === 'MinhasEmendas') {
        listarMinhasEmendas();
    } else {
        pesquisarProposicoes({
            sigla,
            numero,
            ano: !ano || isNaN(ano) ? new Date().getFullYear() : ano,
            tipoPesquisa,
            pagina: isNaN(pagina) ? 1 : pagina
        });
    }
}

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

const appStore = useAppStore();

function listarMinhasEmendas() {
    dados.value = {
        tipo: 'MinhasEmendas',
        titulo: 'Minhas Emendas',
        totalItens: appStore.emendas.length,
        lista: appStore.emendas,
    };
    dashboardStore.setDadosCardAtivo(dados.value);
    loading.value = false;
}

function pesquisarProposicoes(parametros: ParametrosPesquisa) {
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
<style scoped src='../../assets/css/listaproposicao.css'>
</style>
