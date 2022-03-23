<template>
    <span class="proposicao-actions">
        <button
            v-if="acoesPermitidas.includes('emendar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="emendar"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#journal-code" />
                </svg>
            </span>
            Emendar
        </button>
        <button
            v-if="acoesPermitidas.includes('salvar')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="salvar"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#save" />
                </svg>
            </span>
            Salvar
        </button>
        <button
            v-if="acoesPermitidas.includes('abrir')"
            type="button"
            class="btn btn-labeled proposicao-action"
            @click="abrir"
        >
            <span class="btn-label">
                <svg class="bi proposicao-action-icon">
                    <use xlink:href="#folder2-open" />
                </svg>
            </span>
            Abrir
        </button>
        <input
            v-if="acoesPermitidas.includes('abrir')"
            type="file"
            id="fileUpload"
            accept="application/json"
            @change="selecionaArquivo($event)"
            style="display: none"
        />


        <!-- <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Excluir
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Autenticar
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Exibir emendas
                </button>
                <button type="button" class="btn btn-labeled proposicao-action">
                    <span class="btn-label">
                        <svg class="bi proposicao-action-icon">
                            <use xlink:href="#alarm" />
                        </svg>
                    </span>
                    Compartillhar
        </button>-->
    </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AcaoPermitida, Emenda, Proposicao } from "../../model";
import { getProposicaoFromObjeto } from '../../utils/typeUtils';
interface Props {
    item: Proposicao | Emenda;
    emenda?: any;
    projetoNorma?: any;
    acoesPermitidas: Array<AcaoPermitida>;
}
const props = defineProps<Props>();
const acoesPermitidas = ref(props.acoesPermitidas);

const router = useRouter();

function emendar() {
    const { sigla, numero, ano } = getProposicaoFromObjeto(props.item);
    router.push({
        path: '/edicao',
        query: {
            sigla,
            numero,
            ano
        }
    });
}

function salvar() {
    const { sigla, numero, ano } = getProposicaoFromObjeto(props.item);
    const emendaJson = JSON.stringify({
        'projetoNorma': props.projetoNorma,
        'emenda': props.emenda || ""
    });
    const blob: Blob = new Blob([emendaJson], { type: 'application/json' });
    const fileName = `${sigla} ${numero}/${ano}.json`;
    const objectUrl: string = URL.createObjectURL(blob);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
}

function abrir() {
    let fileUpload = document.getElementById('fileUpload');
    if (fileUpload != null) {
        fileUpload.click();
    }
}

function selecionaArquivo($event: Event) {
    const fileInput = $event.target as HTMLInputElement;
    if (fileInput && fileInput.files) {
        var fReader = new FileReader();
        fReader.readAsText(fileInput.files[0]);
        fReader.onloadend = (e) => {
            const result = JSON.parse(e.target.result);
            console.log(result);
        };
    }
}
</script>

<style scoped src="../../assets/css/actions.css">
</style>
