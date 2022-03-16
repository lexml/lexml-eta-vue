import { http } from "../utils/http";
import { Proposicao } from "../model";

const proposicaoService = {
    async buscarProposicoes(
        sigla: string,
        numero: string | undefined | null,
        ano: number
    ) {
        const res = await http.get<Array<Proposicao>>("proposicoes", {
            params: { sigla, numero, ano },
        });
        return res.data;
    },

    async buscarProposicao(sigla: string, numero: string, ano: number) {
        const res = await http.get<Proposicao>("proposicao", {
            params: { sigla, numero, ano },
        });
        return res.data;
    },
};

export default proposicaoService;
