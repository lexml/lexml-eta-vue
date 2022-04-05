<template>
    <div class="card-dashboard">
        <div class="card-dashboard-body">
            <div>
                Abrir do disco
                <acoes-permitidas :acoes-permitidas="['abrir']" />
            </div>
            <div class="list-group">
                <a
                    v-for="(emenda, index) in props.emendas"
                    :key="index"
                    @click.prevent="_abrirEmenda($event, emenda)"
                    href="#"
                    class="list-group-item list-group-item-action"
                    aria-current="true"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="list-group-item-title">{{ emenda.titulo }}</h6>
                        <menu-acoes minha-emenda :item="emenda" />
                    </div>
                    <span
                        class="list-group-item-subtitle"
                    >{{ emenda.proposicao.descricaoIdentificacao }}</span>
                    <span class="list-group-item-data">00/00/0000</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Emenda, EmendaEmDisco } from "@/model";
import { abrirEmenda } from "../../utils/acoes";
import { useRouter } from "vue-router";

const MenuAcoes = defineAsyncComponent(
    () => import("../../components/comuns/MenuAcoes.vue")
);
const AcoesPermitidas = defineAsyncComponent(
    () => import("../../components/comuns/AcoesPermitidas.vue")
);

interface Props {
    emendas: Emenda[];
}

const props = defineProps<Props>();

const router = useRouter();

function _abrirEmenda(ev: Event, emenda: Emenda) {
    const el = ev.target as HTMLElement;

    // Checa se o click foi no "corpo" da proposição
    if (!el.classList.contains('context-menu')) {
        abrirEmenda(emenda as EmendaEmDisco, router);
    }
}
</script>

<style scoped src="../../assets/css/dashboard.css">
</style>
