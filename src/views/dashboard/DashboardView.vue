<template>
  <div class="container">
    <div class="row" @card-click="atualizarRota">
      <dashboard-card-pesquisa-pronta
        :key="mapConfig.get('MinhasEmendas')!.totalItens"
        :config="mapConfig.get('MinhasEmendas')!"
      />
      <!-- <dashboard-card-pesquisa-pronta :config="mapConfig.get('PrazoEmendaAberto')!" />
      <dashboard-card-pesquisa-pronta :config="mapConfig.get('EmTramitacao')!" /> -->
      <dashboard-card-pesquisa-parametrizada :config="parametrosPesquisaProposicao" />
    </div>

    <div v-if="loading">
      <span>Carregando...</span>
    </div>

    <dashboard-resultado-pesquisa v-else :dados="dados">
      <div v-if="dados?.tipo === 'MinhasEmendas'">
        <acoes-permitidas :acoes-permitidas="['abrirDoDisco']" />
      </div>
    </dashboard-resultado-pesquisa>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDashboardStore } from "../../stores/dashboardStore";
import { TipoCard, DadosCard, ParametrosPesquisaProposicao } from "../../model";
import proposicaoService from "../../servicos/proposicaoService";
import { useAppStore } from "../../stores/appStore";

const DashboardCardPesquisaPronta = defineAsyncComponent(
  () => import("./DashboardCardPesquisaPronta.vue")
);
const DashboardCardPesquisaParametrizada = defineAsyncComponent(
  () => import("./DashboardCardPesquisaParametrizada.vue")
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

const mapConfig = ref<Map<TipoCard, DadosCard>>(new Map());

mapConfig.value.set("MinhasEmendas", {
  tipo: "MinhasEmendas",
  titulo: "Minhas Emendas",
  subtitulo: "Acesse as emendas que você está trabalhando",
  totalItens: 0,
  icone: "person-workspace",
  lista: [],
});

mapConfig.value.set("PrazoEmendaAberto", {
  tipo: "PrazoEmendaAberto",
  titulo: "Proposições com prazo de emendamento aberto",
  subtitulo: "Veja as proposições que estão com prazo de emendamento aberto",
  totalItens: 0,
  icone: "hourglass-split",
  lista: [],
});

mapConfig.value.set("EmTramitacao", {
  tipo: "EmTramitacao",
  titulo: "Proposições em tramitação",
  subtitulo: "Lista com todas as proposições em tramitação",
  totalItens: 0,
  icone: "arrow-left-right",
  lista: [],
});

mapConfig.value.set("Parametrizada", {
  tipo: "Parametrizada",
  titulo: "Parametrizada",
  subtitulo: "",
  totalItens: 0,
  icone: "search",
  lista: [],
});

const parametrosPesquisaProposicao = ref<ParametrosPesquisaProposicao>();

const appStore = useAppStore();

watch(
  () => route.query,
  () => pesquisarPorParametrosDaRota(),
  { deep: true }
);

watch(
  () => appStore.emendas,
  () => listarMinhasEmendas()
);

onMounted(() => {
  listarMinhasEmendas();
  pesquisarPorParametrosDaRota();
});

function pesquisarPorParametrosDaRota() {
  const { sigla, numero, ano, tipoPesquisa, pagina } = route.query;

  if (tipoPesquisa === "MinhasEmendas") {
    listarMinhasEmendas();
  } else if (tipoPesquisa === "PrazoEmendaAberto") {
    listarProposicoesComPrazoEmendaAberto();
  } else if (tipoPesquisa === "EmTramitacao") {
    listarProposicoesEmTramitacao();
  } else {
    pesquisar(
      sigla?.toString(),
      numero?.toString(),
      Number(ano?.toString()),
      tipoPesquisa?.toString() as TipoCard,
      Number(pagina?.toString())
    );
  }
}

function pesquisar(
  sigla = "MPV",
  numero?: string,
  ano?: number,
  tipoPesquisa: TipoCard = "Parametrizada",
  pagina = 1
) {
  loading.value = true;
  if (tipoPesquisa === "MinhasEmendas") {
    listarMinhasEmendas();
  } else {
    parametrosPesquisaProposicao.value = {
      sigla,
      numero,
      ano: !ano || isNaN(ano) ? new Date().getFullYear() : ano,
      pagina: isNaN(pagina) ? 1 : pagina,
    };
    pesquisarProposicoes(parametrosPesquisaProposicao.value, tipoPesquisa);
  }
}

function atualizarRota(evt: CustomEvent) {
  let query = { tipoPesquisa: evt.detail.tipo };
  if (evt.detail.tipo === "Parametrizada") {
    query = { ...query, ...evt.detail.parametros };
  }
  router.push({ path: "/", query });
}

function listarMinhasEmendas() {
  const cfg = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ...mapConfig.value.get("MinhasEmendas")!,
    lista: appStore.emendas,
    totalItens: appStore.emendas.length,
  };

  mapConfig.value.set("MinhasEmendas", cfg);
  dados.value = cfg;
  dashboardStore.setDadosCardAtivo(cfg);
  loading.value = false;
}

function listarProposicoesComPrazoEmendaAberto() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cfg = mapConfig.value.get("PrazoEmendaAberto")!;
  dados.value = cfg;
  dashboardStore.setDadosCardAtivo(dados.value);
  loading.value = false;
}

function listarProposicoesEmTramitacao() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cfg = mapConfig.value.get("EmTramitacao")!;
  dados.value = cfg;
  dashboardStore.setDadosCardAtivo(dados.value);
  loading.value = false;
}

function pesquisarProposicoes(
  parametros: ParametrosPesquisaProposicao,
  tipoPesquisa: TipoCard
) {
  const { sigla, numero, ano, pagina } = parametros;
  proposicaoService
    .buscarProposicoes(sigla, numero, ano)
    .then((proposicoes) => {
      dados.value = {
        tipo: tipoPesquisa,
        titulo: tipoPesquisa,
        totalItens: proposicoes.length,
        lista: proposicoes,
        parametros: {
          sigla: sigla,
          numero: numero,
          ano: ano,
          pagina: pagina,
        },
      };
      dashboardStore.setDadosCardAtivo(dados.value);
    })
    .finally(() => (loading.value = false));
}
</script>
<style scoped src="../../assets/css/listaproposicao.css"></style>
