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
                        v-if="proposicao"
                        :item="proposicao"
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

        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Visualização
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div class="modal-body">
                        <p>
                            The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <p>
                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                        <p>
                            1914 translation by H. Rackham
                            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                        </p>
                        <p>
                            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                        </p>
                        <p>
                            1914 translation by H. Rackham
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                        <!-- <button type="button" class="btn btn-primary">Salvar</button> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="container-edicao-emenda">
            <div class="container-fluid mt-3">
                <div class="row">
                    <section class="col-md-7 col-sm-12">
                        <card-proposicao v-if="proposicao" :proposicao="proposicao" />

                        <span class="proposicao-actions d-md-none">
                            <button
                                type="button"
                                class="btn btn-labeled proposicao-action"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >Visualização</button>
                            <button
                                type="button"
                                class="btn btn-labeled proposicao-action"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >Ajuda</button>
                        </span>

                        <div v-if="loading">
                            <strong>Carregando...</strong>
                        </div>
                        <lexml-eta
                            v-else
                            ref="lexmlEta"
                            modo="emenda"
                            :projetoNorma="projetoNorma"
                            @onchange="onChange"
                        />
                    </section>
                    <aside class="col-md-5 col-sm-12 d-none d-md-block">
                        <editor-emenda-painel-lateral
                            :itens-menu="itensMenu"
                            :texto-rotulo-dispositivo="textoRotuloDispositivo"
                            :emenda="emenda"
                        />
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.tab-pane {
    padding: 16px;
    border: 1px solid #dee2e6;
    border-top: none;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 145px);
}
.nav-link.active {
    font-weight: bold;
}
lexml-eta-articulacao {
    overflow: hidden;
    height: calc(100vh - 185px) !important;
}
</style>

<style scoped src="../../assets/css/actions.css">
</style>

<script setup lang="ts">
import "@lexml/lexml-eta";
import "@lexml/lexml-eta/dist/assets/css/editor.css";
import lexmlJsonixService from '../../servicos/lexmlJsonixService';
// import lexmlJsonixService2 from '../../servicos/temp/lexmlJsonixService';

import proposicaoService from "../..//servicos/proposicaoService";
import { ref, onMounted, defineAsyncComponent } from 'vue';
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

// import { Proposicao } from '../../model';
interface Props {
    sigla: string;
    numero: string;
    ano: number;
}
const props = defineProps<Props>();
const projetoNorma = ref();
const loading = ref(true);

const root = ref<HTMLElement>();
const proposicao = ref<Proposicao>();
const itensMenu = ref<string[]>([]);
const textoRotuloDispositivo = ref('');
const lexmlEta = ref();
const emenda = ref(null);

onMounted(() => {
    buscarProposicao(props.sigla, props.numero, props.ano);
    buscarLexmlJsonixProposicao(props.sigla, props.numero, props.ano);
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

    // lexmlJsonixService2
    //     .buscarTextoLexmlAsJsonix(sigla, numero, ano)
    //     .then((res) => console.log(11111, 'xml', res));
}

function onChange() {
    emenda.value = lexmlEta.value.getEmenda();
}

let timer = 0;
function atualizarMenu() {
    clearInterval(timer);
    timer = window.setTimeout(() => {
        const elItensMenu = document.querySelectorAll('.lx-eta-dropdown-content-item');
        itensMenu.value = Array.from(elItensMenu)
            .map((el) => el.textContent ?? '');

        textoRotuloDispositivo.value = document.querySelector('.lx-eta-dropdown')?.closest('.container-td-direito')?.previousElementSibling?.querySelector('label')?.getAttribute('data-rotulo') ?? '';
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
