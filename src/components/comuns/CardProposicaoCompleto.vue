<template>
  <div href="#card-3" class="card-proposicao">
    <span class="card-proposicao-sigla">{{ proposicao.sigla }}</span>
    <div class="card-proposicao-body">
      <!-- <div class="card-proposicao-header">
                <span class="card-proposicao-title">{{ 'Título da emenda' }}</span>
            </div>-->
      <span class="card-proposicao-dados">
        <span class="card-proposicao-numero">{{
          proposicao.descricaoIdentificacao
        }}</span>
        <!-- <span class="card-proposicao-autor">(Autor da proposição)</span> -->
        <!-- <span class="card-proposicao-data">Data 14/03/2021</span> -->
        <!-- <span class="card-proposicao-total-emendas">9 emendas</span> -->
      </span>
      <span class="card-proposicao-text">{{ proposicao.ementa }}</span>
      <span class="proposicao-actions">
        <button
          v-if="acoesPermitidas.includes('criarEmenda')"
          type="button"
          @click="emendar"
          class="btn btn-labeled proposicao-action"
        >
          <span class="btn-label">
            <svg class="bi proposicao-action-icon">
              <use xlink:href="#journal-code" />
            </svg>
          </span>
          Emendar
        </button>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Proposicao, AcaoPermitida } from "../../model";
import { useRouter } from "vue-router";

interface Props {
  proposicao: Proposicao;
  acoesPermitidas: Array<AcaoPermitida>;
}

const props = defineProps<Props>();
const proposicao = ref(props.proposicao);

const {
  value: { sigla, numero, ano },
} = proposicao;

const router = useRouter();

function emendar() {
  router.push({
    path: "/edicao",
    query: {
      sigla,
      numero,
      ano,
    },
  });
}
</script>

<style scoped src="../../assets/css/listaproposicao.css"></style>
