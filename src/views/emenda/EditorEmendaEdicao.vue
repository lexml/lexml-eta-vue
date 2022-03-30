<template>
    <div ref="root" @click="atualizarMenu" @keyup="atualizarMenu">
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container-fluid">
                <button onclick="history.back()" type="button" class="btn btn-back">
                    <span class="btn-label">
                        <svg class="bi">
                            <use xlink:href="#arrow-left" />
                        </svg>
                    </span>
                </button>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div
                    class="collapse navbar-collapse proposicao-actions"
                    id="navbarSupportedContent"
                >
                    <acoes-permitidas
                        v-if="proposicao && emenda && projetoNorma"
                        :item="proposicao"
                        :emenda="emenda"
                        :projetoNorma="projetoNorma"
                        :acoes-permitidas="['salvar']"
                    />
                    <!-- <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <button type="button" class="btn btn-labeled proposicao-action">
                                <span class="btn-label">
                                    <svg class="bi proposicao-action-icon">
                                        <use xlink:href="#alarm" />
                                    </svg>
                                </span>
                                Salvar
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-labeled proposicao-action">
                                <span class="btn-label">
                                    <svg class="bi proposicao-action-icon">
                                        <use xlink:href="#alarm" />
                                    </svg>
                                </span>
                                Excluir
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-labeled proposicao-action">
                                <span class="btn-label">
                                    <svg class="bi proposicao-action-icon">
                                        <use xlink:href="#alarm" />
                                    </svg>
                                </span>
                                Encaminhar
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-labeled proposicao-action">
                                <span class="btn-label">
                                    <svg class="bi proposicao-action-icon">
                                        <use xlink:href="#alarm" />
                                    </svg>
                                </span>
                                Data e assinatura
                            </button>
                        </li>
                    </ul>-->
                </div>
            </div>
        </nav>

        <div class="container-edicao-emenda">
            <div class="container-fluid mt-3">
                <div class="row">
                    <section class="col-md-7 col-sm-12">
                        <input
                            type="input"
                            class="form-control"
                            placeholder="Título da emenda"
                            aria-label="Título da emenda"
                            required
                        />
                        <card-proposicao
                            class="editar-emenda-dados"
                            v-if="proposicao"
                            :proposicao="proposicao"
                        />

                        <!-- BOTÕES QUE ATIVAM AS MODAIS -->
                        <span class="proposicao-actions d-md-none">
                            <button
                                type="button"
                                class="btn btn-labeled proposicao-action"
                                data-bs-toggle="modal"
                                data-bs-target="#mdlVisualizacao"
                            >Visualização</button>
                            <button
                                type="button"
                                class="btn btn-labeled proposicao-action"
                                data-bs-toggle="modal"
                                data-bs-target="#mdlAjuda"
                            >Ajuda</button>
                        </span>

                        <div v-if="loading">
                            <strong>Carregando...</strong>
                        </div>
                        <lexml-eta
                            v-show="!loading"
                            ref="lexmlEta"
                            modo="emenda"
                            :projetoNorma="projetoNorma"
                            :emenda="emenda"
                            @onchange="onChange"
                        />
                    </section>
                    <aside class="col-md-5 col-sm-12 d-none d-md-block">
                        <editor-emenda-painel-lateral
                            :itens-menu="itensMenu"
                            :texto-rotulo-dispositivo="textoRotuloDispositivo"
                            :comando-emenda="comandoEmenda"
                        />
                    </aside>
                </div>
            </div>
        </div>

        <editor-emenda-painel-modal
            :itens-menu="itensMenu"
            :texto-rotulo-dispositivo="textoRotuloDispositivo"
            :emenda="comandoEmenda"
        />
    </div>
</template>
<style>
.editar-emenda-dados {
    padding: 10px;
}
.tab-pane {
    padding: 16px;
    border: 1px solid #dee2e6;
    border-top: none;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 152px);
}
.nav-link.active {
    font-weight: bold;
}
lexml-eta-articulacao {
    overflow: hidden;
    height: calc(100vh - 230px) !important;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>

<style scoped src="../../assets/css/actions.css">
</style>

<script setup lang="ts">
// import "@lexml/lexml-eta";
// import "@lexml/lexml-eta/dist/assets/css/editor.css";
import '../../assets/js/lexml-eta/index.min.js';

import lexmlJsonixService from '../../servicos/lexmlJsonixService';
import proposicaoService from "../..//servicos/proposicaoService";
import {
    ref,
    onMounted,
    onUpdated,
    defineAsyncComponent
} from 'vue';
import { Proposicao } from "../../model";

const AcoesPermitidas = defineAsyncComponent(
    () => import("../../components/comuns/AcoesPermitidas.vue")
);

const CardProposicao = defineAsyncComponent(
    () => import("../../components/comuns/CardProposicao.vue")
);

const EditorEmendaPainelLateral = defineAsyncComponent(
    () => import("./EditorEmendaPainelLateral.vue")
);

const EditorEmendaPainelModal = defineAsyncComponent(
    () => import("./EditorEmendaPainelModal.vue")
);

// import { Proposicao } from '../../model';
interface Props {
    sigla: string;
    numero: string;
    ano: number;
    emenda?: object;
}
const props = defineProps<Props>();
const projetoNorma = ref(null);
const loading = ref(true);

const root = ref<HTMLElement>();
const proposicao = ref<Proposicao>();
const itensMenu = ref<string[]>([]);
const textoRotuloDispositivo = ref('');
const lexmlEta = ref();

const emenda = ref<object | undefined | null>(null);
const comandoEmenda = ref();

onMounted(() => {
    buscarProposicao(props.sigla, props.numero, props.ano);
    buscarLexmlJsonixProposicao(props.sigla, props.numero, props.ano);
});

onUpdated(() => {
    if (props.emenda !== {} && !emenda.value) {
        emenda.value = props.emenda;
    }
});

function buscarProposicao(sigla: string, numero: string, ano: number) {
    proposicaoService
        .buscarProposicao(sigla, numero, ano)
        .then((res) => proposicao.value = res);
}

function buscarLexmlJsonixProposicao(sigla: string, numero: string, ano: number) {
    lexmlJsonixService
        .buscarTextoLexmlAsJson(sigla, numero, ano)
        .then((jsonix): void => projetoNorma.value = jsonix)
        .then(() => simularClick())
        .finally(() => loading.value = false);
}

function onChange() {
    emenda.value = lexmlEta.value.getEmenda();
    comandoEmenda.value = lexmlEta.value.getComandoEmenda();
}

let timer = 0;
function atualizarMenu() {
    clearInterval(timer);
    timer = window.setTimeout(() => {
        const elItensMenu = document.querySelectorAll('.lx-eta-dropdown-content-item');
        itensMenu.value = Array.from(elItensMenu)
            .map((el) => el.textContent ?? '');

        textoRotuloDispositivo.value = document.querySelector('.lx-eta-dropdown')?.closest('.container__menu')?.previousElementSibling?.querySelector('label')?.getAttribute('data-rotulo') ?? '';
        // textoRotuloDispositivo.value = textoRotuloDispositivo.value.replace(' –', '');
    }, 300);
}

function simularClick() {
    const el = document.querySelector('lexml-eta');
    setTimeout(() => {
        el ? (el as HTMLElement).click() : simularClick();
    }, 300);
}
</script>
