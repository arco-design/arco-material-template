<template>
  <@CONST_COMPONENT_NAME@>Demo Basic</@CONST_COMPONENT_NAME@>
</template>

<script lang="ts">
import { @CONST_COMPONENT_NAME@ } from '@CONST_PACKAGE_NAME@';

// 目前vue-live导出defineComponent存在问题，所以仅支持普通对象导出。
export default {
  name: 'BasicDemo',
  components: {
    @CONST_COMPONENT_NAME@,
  },
};
</script>
