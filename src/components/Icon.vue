<template>
  <div>
    <svg >
      <use :xlink:href="'#'+name"/>
    </svg>
  </div>
</template>

<script lang="ts">

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props:['name'],
  name: 'Icon.vue',
};
</script>

<!-- 如果不继承宽度则无法调节样式 -->
<style lang="scss">
    svg{
      height: inherit;
      width:inherit;
      fill: currentColor;
    }
</style>