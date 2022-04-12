import { Proposicao } from "../model";

export const isPrazoAbertoFake = (
    proposicoes: Proposicao[],
    proposicao: Proposicao
): boolean =>
    proposicoes.findIndex(
        (p) => p.idIdentificacao === proposicao.idIdentificacao
    ) < 4;

export const ordenarProposicoesMaisRecentePrimeiro = (
    proposicoes: Proposicao[]
): Proposicao[] => {
    const novoArray = [...proposicoes];

    novoArray.sort((p1, p2) => {
        const comparacaoAno = p2.ano - p1.ano;
        if (comparacaoAno) {
            return comparacaoAno;
        }

        return p2.numero.localeCompare(p1.numero);
    });

    return novoArray;
};
