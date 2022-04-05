import { Emenda, EmendaEmDisco, Proposicao } from "./../model/index";
import { getProposicaoFromObjeto } from "./typeUtils";
import { Router } from "vue-router";

export const criarEmenda = (
    item: Emenda | Proposicao,
    router: Router
): void => {
    if (item) {
        const { sigla, numero, ano } = getProposicaoFromObjeto(item);
        router.push({
            path: "/edicao",
            query: {
                sigla,
                numero,
                ano,
            },
        });
    }
};

// abre emenda da store
export const abrirEmenda = (emenda: EmendaEmDisco, router: Router): void => {
    if (emenda) {
        const { sigla, numero, ano } = emenda.proposicao;
        emenda.datAlteracao = new Date();
        emenda.datUltimoAcesso = new Date();
        router.push({
            name: "edicao",
            query: {
                sigla,
                numero,
                ano,
            },
            params: {
                emendaLexml: JSON.stringify(emenda.emendaLexml),
                titulo: emenda.titulo,
            },
        });
    }
};
