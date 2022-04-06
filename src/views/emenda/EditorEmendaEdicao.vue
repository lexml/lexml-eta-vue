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
                    <acoes-permitidas v-if="emenda" :item="emenda" :acoes-permitidas="['salvar']" />
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
                            v-if="emenda"
                            type="input"
                            class="form-control"
                            placeholder="Título da emenda"
                            aria-label="Título da emenda"
                            required
                            v-model="emenda.titulo"
                        />
                        <card-proposicao
                            class="editar-emenda-dados"
                            v-if="emenda"
                            :proposicao="emenda.proposicao"
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
                            :modo="modoEmenda"
                            :projetoNorma="emenda?.projetoNorma || {}"
                            @onchange="onChange"
                        />
                    </section>
                    <aside class="col-md-5 col-sm-12 d-none d-md-block">
                        <editor-emenda-painel-lateral
                            :itens-menu="itensMenu"
                            :texto-rotulo-dispositivo="textoRotuloDispositivo"
                            :comando-emenda="emenda?.emendaLexml?.comandoEmenda"
                        />
                    </aside>
                </div>
            </div>
        </div>

        <editor-emenda-painel-modal
            :itens-menu="itensMenu"
            :texto-rotulo-dispositivo="textoRotuloDispositivo"
            :comando-emenda="emenda?.emendaLexml?.comandoEmenda"
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
import '../../assets/js/lexml-eta/index.min.js';

import lexmlJsonixService from '../../servicos/lexmlJsonixService';
import proposicaoService from "../..//servicos/proposicaoService";
import {
    ref,
    onMounted,
    defineAsyncComponent
} from 'vue';
import { Emenda } from "../../model";

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

interface Props {
    sigla: string;
    numero: string;
    ano: number;
    emendaLexml?: object;
    titulo?: string;
    ondeCouber?: boolean;
}

const props = defineProps<Props>();
const loading = ref(true);

const root = ref<HTMLElement>();
const itensMenu = ref<string[]>([]);
const textoRotuloDispositivo = ref('');
const lexmlEta = ref();

const emenda = ref<Emenda>();
const modoEmenda = ref('emenda');

onMounted(async () => {
    loading.value = true;
    Promise.all([
        proposicaoService.buscarProposicao(props.sigla, props.numero, props.ano),
        lexmlJsonixService.buscarTextoLexmlAsJson(props.sigla, props.numero, props.ano)
    ]).then((results) => {
        emenda.value = {
            proposicao: results[0],
            projetoNorma: results[1],
            titulo: props.titulo || '',
            emendaLexml: props.emendaLexml !== {} && !emenda.value ? props.emendaLexml : undefined,
        };
        modoEmenda.value = emenda.value.emendaLexml?.classificacao || (props.ondeCouber ? 'emendaArtigoOndeCouber' : 'emenda');
        lexmlEta.value.emenda = emenda.value.emendaLexml;
    }).finally(() => loading.value = false);
});

function onChange() {
    if (emenda.value) {
        emenda.value.emendaLexml = lexmlEta.value.getEmenda();
    }
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
</script>
