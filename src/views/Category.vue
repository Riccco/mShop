<template>
  <div class="cate-wrp">
    <div class="cate-gory">2</div>
    <Nav />
  </div>
</template>

<script>
export default {
name: "classification"
}
</script>

<style lang="scss">
  .cate-wrp{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .cate-gory{
    flex: 1;
    overflow: hidden;
    background: antiquewhite;
  }
</style>