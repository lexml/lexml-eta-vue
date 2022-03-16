import { DadosCard } from "../model/index";
export const emitirEventoCardClick = (
    el: EventTarget | HTMLElement,
    dados: DadosCard
): void => {
    el.dispatchEvent(
        new CustomEvent("card-click", {
            bubbles: true,
            detail: {
                tipo: dados.tipo,
                titulo: dados.titulo,
                parametros: dados.parametros,
            },
        })
    );
};
