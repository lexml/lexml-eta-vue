import { defineStore } from "pinia";
import { DashBoardState, DadosCard } from "@/model";

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
    }),
    getters: {},
    actions: {
        setDadosCardAtivo(dados: DadosCard) {
            this.cardAtivo = dados;
        },
    },
});
