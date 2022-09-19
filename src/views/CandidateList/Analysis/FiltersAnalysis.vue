<template>
  <div class="c-filters-analysis text-white bg-primary-dark p-10 rounded">
    <div class="c-filters-analysis__header flex items-center">
      <h3 class="text-xl font-bold">Perguntas</h3>
      <button
        v-on:click="clearAnalysis()"
        class="text-secondary-base ml-5 text-sm underline hover:no-underline"
      >
        Limpar filtros
      </button>
    </div>
    <div class="c-filters-analysis__content mt-5 xl:flex">
      <div>
        <div class="w-full mb-3 xl:mr-10">
          <label for="tNuncaEleitos" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tNuncaEleitos"
                type="checkbox"
                v-model="checkedElections"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas nunca foram eleitas?
            </div>
          </label>
        </div>
        <div class="w-full mb-3 xl:mr-10">
          <label for="tElectionsWon" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tElectionsWon"
                v-model="checkedElectionsWon"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas já foram eleitas?
            </div>
          </label>
        </div>
        <div class="w-full mb-3 xl:mr-10">
          <label for="tNElections" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tNElections"
                v-model="checkedNElections"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas nunca concorreram?
            </div>
          </label>
        </div>
        <div class="w-full mb-3 mr-10">
          <label for="tMulheres" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tMulheres"
                value="tMulheres"
                v-model="checkedWoman"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas são mulheres?
            </div>
          </label>
        </div>
      </div>
      <div>
        <div class="w-full mb-3">
          <label for="tHomens" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tHomens"
                v-model="checkedMan"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantos são homens?
            </div>
          </label>
        </div>
        <div class="w-full mb-3">
          <label for="tPPI" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tPPI"
                v-model="checkedPPI"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas são PPI (pretas, pardas e indígenas)?
            </div>
          </label>
        </div>
        <div class="w-full mb-3">
          <label for="tBrancos" class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                id="tBrancos"
                v-model="checkedWhite"
                type="checkbox"
                class="sr-only"
              />
              <div class="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                class="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"
              ></div>
            </div>
            <div class="ml-3 text-white font-medium text-base">
              Quantas são brancas?
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useStore from "@/hooks/useStore";
import {
  cleanFilters,
  setElections,
  setElectionsWon,
  setEthnicityPPI,
  setEthnicityWhite,
  setGenderMan,
  setGenderWoman,
  setNElections,
} from "@/store/filters";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: [],
  data() {
    return {
      checkedElections: false,
      checkedElectionsWon: false,
      checkedNElections: false,
      checkedWoman: false,
      checkedMan: false,
      checkedPPI: false,
      checkedWhite: false,
    };
  },
  setup() {
    const store = useStore();
    let hasSelectedElectionsWon = computed(function () {
      return store.Filters.hasSelectedElectionsWon;
    });

    let hasSelectedElections = computed(function () {
      return store.Filters.hasSelectedElections;
    });

    return {
      store,
      hasSelectedElectionsWon,
      hasSelectedElections,
    };
  },
  watch: {
    checkedElections(value) {
      setElections(value);
      if (value == true) {
        this.checkedElectionsWon = false;
        this.checkedNElections = false;
      }
    },
    checkedElectionsWon(value) {
      setElectionsWon(value);
      if (value == true) {
        this.checkedElections = false;
        this.checkedNElections = false;
      }
    },
    checkedNElections(value) {
      setNElections(value);
      if (value == true) {
        this.checkedElectionsWon = false;
        this.checkedElections = false;
      }
    },
    checkedWoman(value) {
      setGenderWoman(value);
      if (value == true) {
        this.checkedMan = false;
      }
    },
    checkedMan(value) {
      setGenderMan(value);
      if (value == true) {
        this.checkedWoman = false;
      }
    },
    checkedPPI(value) {
      setEthnicityPPI(value);
      if (value == true) {
        this.checkedWhite = false;
      }
    },
    checkedWhite(value) {
      setEthnicityWhite(value);
      if (value == true) {
        this.checkedPPI = false;
      }
    },
  },
  methods: {
    clearAnalysis() {
      cleanFilters();
      this.checkedElections = false;
      this.checkedElectionsWon = false;
      this.checkedNElections = false;
      this.checkedWoman = false;
      this.checkedMan = false;
      this.checkedPPI = false;
      this.checkedWhite = false;
    },
  },
});
</script>

<style lang="css" scoped>
/* Toggle A */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #9bdb52;
}
</style>
