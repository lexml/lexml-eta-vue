<template>
  <div>
    <painel-modal id="mdlVisualizacao">
      <template #titulo>
        Visualização
      </template>
      <template #corpo>
        <lexml-emenda-comando v-if="comandoEmenda" :emenda="comandoEmenda" />
      </template>
    </painel-modal>

    <painel-modal id="mdlAjuda">
      <template #titulo>
        Ajuda
      </template>
      <template #corpo>
        <editor-emenda-ajuda
          :itens-menu="itensMenu"
          :texto-rotulo-dispositivo="textoRotuloDispositivo"
        />
      </template>
    </painel-modal>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";

const PainelModal = defineAsyncComponent(
  () => import("../../components/comuns/PainelModal.vue")
);

const EditorEmendaAjuda = defineAsyncComponent(() => import("./EditorEmendaAjuda.vue"));

interface Props {
  itensMenu: string[];
  textoRotuloDispositivo: string;
  comandoEmenda?: object;
}

const props = defineProps<Props>();
const itensMenu = computed(() => props.itensMenu);
const comandoEmenda = computed(() => props.comandoEmenda);
</script>

<style scoped></style>
