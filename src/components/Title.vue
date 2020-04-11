<template>
  <div class="detailtitle">
    <i class="iconfont icon-back" @click="handleBack"></i>
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack(){
      // this.$router.back()
      this.$emit("back")
    }
  },
}
</script>

<style lang="scss" scoped>
  .detailtitle{
        height:.44rem;
        width:100%;
        background: #fff;
        position: fixed;
        top:0;
        left:0;
        line-height: .44rem;
        text-align: center;
        i{
            position: absolute;
            left:0px;
        }
    }
</style>