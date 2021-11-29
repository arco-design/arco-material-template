<template>
  <tooltip v-if="tip" :content="tip" position="bottom">
    <arco-button class="tooltip-button" v-bind="buttonProps">
      <slot />
    </arco-button>
  </tooltip>
  <arco-button v-else class="tooltip-button" v-bind="buttonProps">
    <slot />
  </arco-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button, Tooltip } from '@arco-design/web-vue';

export default defineComponent({
  name: 'TooltipButton',
  components: {
    ArcoButton: Button,
    Tooltip,
  },
  props: {
    /**
     * 提示文字
     */
    tip: String,
    /**
     * 按钮组件Props
     */
    buttonProps: Object,
  },
});
</script>
