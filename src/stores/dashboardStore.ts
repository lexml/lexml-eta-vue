import { IParametrosPesquisaProposicao } from "./../model/index";
import { defineStore } from "pinia";
import { DashBoardState, DadosCard, Proposicao } from "../model";

export const useDashboardStore = defineStore({
    id: "dashboardStore",
    state: (): DashBoardState => ({
        cardAtivo: {
            tipo: "MinhasEmendas",
            titulo: "",
            totalItens: 0,
            lista: [],
            parametros: {
                tipoPesquisa: "MinhasEmendas",
                sigla: "MPV",
                numero: undefined,
                ano: 2022,
                pagina: 1,
            },
        },

        proposicoesRecentes: [],
        minhasEmendas: [],
        parametrosPesquisaProposicao: {
            sigla: "MPV",
            ano: new Date().getFullYear(),
        },
    }),
    getters: {},
    actions: {
        setDadosCardAtivo(dados: DadosCard) {
            this.cardAtivo = dados;
        },
        setProposicoesRecentes(proposicoes: Proposicao[]) {
            this.proposicoesRecentes = proposicoes;
        },
        setParametrosPesquisaProposicao(
            parametros: IParametrosPesquisaProposicao
        ) {
            this.parametrosPesquisaProposicao = parametros;
        },
    },
});
