<template>
    <div class="sidebar-direito">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="visualizacao-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#visualizacao"
                    type="button"
                    role="tab"
                    aria-controls="visualizacao"
                    aria-selected="true"
                >
                    Visualização
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="ajuda-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ajuda"
                    type="button"
                    role="tab"
                    aria-controls="ajuda"
                    aria-selected="false"
                >
                    Ajuda
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div
                class="tab-pane fade show active"
                id="visualizacao"
                role="tabpanel"
                aria-labelledby="visualizacao-tab"
            >
                <lexml-emenda-comando v-if="comandoEmenda" :emenda="comandoEmenda" />
            </div>
            <div
                class="tab-pane fade" id="ajuda" role="tabpanel"
                aria-labelledby="ajuda-tab"
            >
                <editor-emenda-ajuda
                    :itens-menu="itensMenu"
                    :texto-rotulo-dispositivo="textoRotuloDispositivo"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const EditorEmendaAjuda = defineAsyncComponent(
    () => import("./EditorEmendaAjuda.vue")
);

interface Props {
    itensMenu: string[];
    textoRotuloDispositivo: string;
    comandoEmenda?: any;
}
const props = defineProps<Props>();
const itensMenu = computed(() => props.itensMenu);
const comandoEmenda = computed(() => props.comandoEmenda);

</script>
