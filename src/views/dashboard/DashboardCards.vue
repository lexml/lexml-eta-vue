<template>
    <div class="container" id="cards-dashboard">
        <div class="row">
            <dashboard-card-pesquisa-pronta :dados="dadosMinhasEmendas" />
            <dashboard-card-pesquisa-pronta :dados="dadosProposicoesComPrazoEmendamentoAberto" />
            <dashboard-card-pesquisa-pronta :dados="dadosProposicoesEmTramitacao" />
            <dashboard-card-pesquisa-parametrizada :dados="dadosPesquisaParametrizada" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue";
import { TipoCard } from "../../model";
import { useRoute } from "vue-router";

const DashboardCardPesquisaPronta = defineAsyncComponent(
    () => import("./DashboardCardPesquisaPronta.vue")
);
// const DashboardCardPesquisaParametrizadaPronta = defineAsyncComponent(
//     () => import("./DashboardCardPesquisaParametrizadaPronta.vue")
// );
const DashboardCardPesquisaParametrizada = defineAsyncComponent(
    () => import("./DashboardCardPesquisaParametrizada.vue")
);

interface Dados {
    titulo: string;
    subtitulo?: string;
    totalItens: number;
    icone: string;
    tipo: TipoCard;
}

const dadosMinhasEmendas = ref<Dados>({
    titulo: 'Minhas Emendas',
    subtitulo: 'Acesse as emendas que você está trabalhando',
    totalItens: 5,
    icone: 'person-workspace',
    tipo: "MinhasEmendas",
});

const dadosProposicoesComPrazoEmendamentoAberto = ref<Dados>({
    titulo: 'Proposições com prazo de emendamento aberto',
    subtitulo: 'Veja as proposições que estão com prazo de emendamento aberto',
    totalItens: 34,
    icone: 'hourglass-split',
    tipo: "PrazoEmendaAberto"
});

const dadosProposicoesEmTramitacao = ref<Dados>({
    titulo: 'Proposições em tramitação',
    subtitulo: 'Lista com todas as proposições em tramitação',
    totalItens: 587,
    icone: 'arrow-left-right',
    tipo: 'EmTramitacao',
});

const dadosPesquisaParametrizada = ref();
const route = useRoute();
onMounted(() => {
    const { query } = route;
    if (query.tipoPesquisa === 'Parametrizada') {
        dadosPesquisaParametrizada.value = {
            sigla: query.sigla,
            numero: query.numero,
            ano: query.ano
        };
    }
});

// const dadosMPV2022 = ref({
//     titulo: 'Medidas Provisórias de 2022',
//     totalItens: 123,
//     icone: '',
//     parametros: {
//         sigla: 'MPV',
//         ano: 2022,
//     }
// });

// const dadosMPV2021 = ref({
//     titulo: 'Medidas Provisórias de 2021',
//     totalItens: 456,
//     icone: '',
//     parametros: {
//         sigla: 'MPV',
//         ano: 2021,
//     }
// });

// TODO: buscar dados para cada cartão

</script>

<style scoped>
</style>
