<template>
  <div v-if="sigla && numero && ano">
    <editor-emenda-edicao
      :sigla="sigla"
      :numero="numero"
      :ano="ano"
      :onde-couber="ondeCouber"
      :emenda-em-disco="emendaEmDisco"
      :titulo="(route.params.titulo as string)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { EmendaEmDisco } from "../../model";

const EditorEmendaEdicao = defineAsyncComponent(() => import("./EditorEmendaEdicao.vue"));

const route = useRoute();

const sigla = ref<string>();
const numero = ref<string>();
const ano = ref<number>();
const ondeCouber = ref<boolean | undefined>();
const emendaEmDisco = ref<EmendaEmDisco>();

watch(
  () => route.query,
  (query) => {
    sigla.value = query.sigla?.toString();
    numero.value = query.numero?.toString();
    ano.value = Number(query.ano?.toString());
    if ("ondeCouber" in query && query.ondeCouber) {
      ondeCouber.value = !!query.ondeCouber;
    }
    if (route.params.emendaEmDisco) {
      emendaEmDisco.value = JSON.parse((route.params.emendaEmDisco as string) || "{}");
    }
  },
  {
    immediate: true,
  }
);
</script>
