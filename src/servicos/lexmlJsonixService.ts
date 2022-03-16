import { http } from "../utils/http";

export default {
    async buscarTextoLexmlAsJson(sigla: string, numero: string, ano: number) {
        const res = await http.get("proposicao/texto-lexml/json", {
            params: { sigla, numero, ano },
        });
        return res.data;
    },
};
