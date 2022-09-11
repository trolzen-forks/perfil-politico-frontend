<template>
  <div>
    <svg :height="height" :width="width">
      <!-- <g transform="translate(50,50)">
          <circle
            v-for="c in output"
            :key="c.id"
            :r="c.r"
            :cx="c.x"
            :cy="c.y"
            :fill="c.fill"
            :stroke="c.stroke"
          >
          </circle>
        </g> -->
    </svg>
  </div>
</template>

<script lang="ts">
import * as d3 from "d3";

export default {
  props: ["data"],
  data() {
    return {
      height: 600,
      width: 600,
    };
  },
  methods: {},
  computed: {},
};
</script>
