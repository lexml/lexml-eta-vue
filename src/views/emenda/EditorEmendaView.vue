<template>
  <div v-if="sigla && numero && ano">
    <editor-emenda-edicao
      :sigla="sigla"
      :numero="numero"
      :ano="ano"
      :onde-couber="ondeCouber"
      :emenda="emenda"
      :titulo="(route.params.titulo as string)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Emenda } from "../../model";

const EditorEmendaEdicao = defineAsyncComponent(() => import("./EditorEmendaEdicao.vue"));

const route = useRoute();

const sigla = ref<string>();
const numero = ref<string>();
const ano = ref<number>();
const ondeCouber = ref<boolean | undefined>();
const emenda = ref<Emenda>();

watch(
  () => route.query,
  (query) => {
    sigla.value = query.sigla?.toString();
    numero.value = query.numero?.toString();
    ano.value = Number(query.ano?.toString());
    if ("ondeCouber" in query && query.ondeCouber) {
      ondeCouber.value = !!query.ondeCouber;
    }
    if (route.params.emenda) {
      emenda.value = JSON.parse((route.params.emenda as string) || "{}");
    }
  },
  {
    immediate: true,
  }
);
</script>
