import { EmendaEmDisco, Proposicao } from "./../model/index";
import { getProposicaoFromObjeto } from "./typeUtils";
import { generateUUID } from "./geral";
import { useAppStore } from "../stores/appStore";
import { Router } from "vue-router";

let router: Router;

export default {
  configModulo: (_router: Router) => (router = _router),
};

export const criarEmenda = (item: EmendaEmDisco | Proposicao, ondeCouber?: boolean): void => {
  if (item) {
    const { sigla, numero, ano } = getProposicaoFromObjeto(item);
    const query = {
      sigla,
      numero,
      ano,
    };
    if (ondeCouber) {
      (query as any).ondeCouber = ondeCouber;
    }
    router.push({
      path: "/edicao",
      query,
    });
  }
};

export const salvarEmenda = (_emenda: EmendaEmDisco) => {
  const emenda = _emenda as EmendaEmDisco;
  emenda.metadados.id = emenda.metadados.id || generateUUID();
  emenda.metadados.datAlteracao = new Date();
  emenda.metadados.datUltimoAcesso = new Date();

  const emendaJson = JSON.stringify(emenda, null, 4);
  const blob: Blob = new Blob([emendaJson], {
    type: "application/json",
  });
  const { sigla, numero, ano } = emenda.emenda.proposicao;
  const fileName = `${sigla} ${numero}/${ano}.emenda.json`;
  const objectUrl: string = URL.createObjectURL(blob);
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = objectUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  useAppStore().adicionarEmenda(emenda);
  // TODO: remover elemento
};

// abre emenda da store
export const abrirEmenda = (emendaEmDisco: EmendaEmDisco): void => {
  if (emendaEmDisco) {
    emendaEmDisco.metadados.datUltimoAcesso = new Date();
    const { sigla, numero, ano } = emendaEmDisco.emenda.proposicao;
    const query = {
      sigla,
      numero,
      ano,
    };
    if (emendaEmDisco.emenda.tipo === "emendaArtigoOndeCouber") {
      (query as any).ondeCouber = true;
    }
    router.push({
      name: "edicao",
      query,
      params: {
        emendaEmDisco: JSON.stringify(emendaEmDisco),
        titulo: emendaEmDisco.metadados.titulo,
      },
    });
  }
};

// abre emenda do disco
export const abrirEmendaDoDisco = (): void => {
  const fileUpload = document.getElementById("fileUpload");
  if (fileUpload != null) {
    fileUpload.click();
  }
};

export const selecionaArquivo = ($event: Event): void => {
  const fileInput = $event.target as HTMLInputElement;
  if (fileInput && fileInput.files) {
    const fReader = new FileReader();
    fReader.readAsText(fileInput.files[0]);
    fReader.onloadend = (e) => {
      if (e.target?.result) {
        const obj = JSON.parse(e.target.result as string);
        const emendaEmDisco: EmendaEmDisco = obj;
        emendaEmDisco.metadados.datAlteracao = new Date(obj.datAlteracao);
        emendaEmDisco.metadados.datUltimoAcesso = new Date();
        const { sigla, numero, ano } = emendaEmDisco.emenda.proposicao;
        const query = {
          sigla,
          numero,
          ano,
        };
        if (emendaEmDisco.emenda.tipo === "emendaArtigoOndeCouber") {
          (query as any).ondeCouber = true;
        }

        useAppStore().adicionarEmenda(emendaEmDisco);

        router.push({
          name: "edicao",
          query,
          params: {
            emendaEmDisco: JSON.stringify(emendaEmDisco),
            titulo: emendaEmDisco.metadados.titulo,
          },
        });
      }
    };
  }
};
