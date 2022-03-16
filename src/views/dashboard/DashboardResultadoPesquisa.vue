<template>
    <div v-if="dados" class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 p-3 mb-2 border-bottom border-light">
                <h3 class="lista-proposicao-header">
                    {{ dados.titulo }}
                </h3>
                <span class="badge rounded-pill bg-primary">{{ dados.totalItens }}</span>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <ul class="lista-proposicao mb-5">
                    <li
                        v-for="(item, index) in dados.lista"
                        :key="index"
                        class="lista-proposicao-item"
                    >
                        <dashboard-resultado-pesquisa-item
                            :item="item"
                            :acoes-permitidas="['emendar']"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Proposicao, Emenda } from "../../model";

const DashboardResultadoPesquisaItem = defineAsyncComponent(
    () => import("./DashboardResultadoPesquisaItem.vue")
);

interface Dados {
    titulo: string;
    totalItens: number;
    lista: Proposicao[] | Emenda[];
    parametros?: {
        sigla: string;
        numero?: string;
        ano: number;
    }
}
interface Props {
    dados?: Dados;
}
defineProps<Props>();
</script>

<style scoped src='../../assets/css/listaproposicao.css'>
</style>
