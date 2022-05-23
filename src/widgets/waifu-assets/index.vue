<template>
  <div className="index">
    <div className="waifu">

      <!-- 提示框 -->
      <div className="waifu-tips"></div>

      <!-- 看板娘画布 -->
      <canvas id="live2d" className="live2d"/>

      <!-- 工具栏 -->
      <div className="waifu-tool">
        <p className="fui-home">
          <i className="el-icon-s-home"/>
        </p>
        <p className="fui-chat">
          <i className="el-icon-upload"/>
        </p>
        <p className="fui-eye">
          <i className="el-icon-share"/>
        </p>
        <p className="fui-user">
          <i className="el-icon-warning"/>
        </p>
        <p className="fui-photo">
          <i className="el-icon-camera-solid"/>
        </p>
        <p className="fui-info-circle">
          <i className="el-icon-s-comment"/>
        </p>
        <p className="fui-cross">
          <i className="el-icon-error"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhyLive2d',
    components: {
    },
    data() {
      return {
      }
    },
    mounted () {
      live2d_settings['modelId'] = 5;                  // 默认模型 ID
      live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
      /* 在 initModel 前添加 */
      initModel(require("@/assets/live2d/waifu-tips.json"))
    },
    methods: {
    }
  }
</script>

<style  scoped>
  .waifu-tool p i {
    cursor: pointer;
  }
</style>
