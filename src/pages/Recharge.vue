<template>
  <div>
    <checklist title="选择充值金额" :options="options" v-model="selVal" :max="1" :min="1"></checklist>

    <checker
      style="display:flex;justify-content:space-around;margin-top:10px;"
      v-model="selType"
      radio-required
      default-item-class="pay"
      selected-item-class="pay-sel"
    >
      <checker-item value="1">
        <img src="../assets/t-pay.png">
      </checker-item>
      <checker-item value="2">
        <img src="../assets/a-pay.png">
      </checker-item>
    </checker>
    <box gap="10px 10px">
      <x-button type="primary">确定</x-button>
    </box>
  </div>
</template>

<script>
import { Checklist, Box, XButton } from "vux";
import { getPayTypes } from "@/utils/api";

export default {
  components: {
    Checklist,
    Box,
    XButton
  },
  data: _ => ({
    options: [
      { value: "100金币(1元)", key: 1 },
      { value: "1200金币(10元)", key: 10 },
      { value: "11000金币(100元)", key: 100 }
    ],
    selVal: [],

    selType: "1"
  }),
  mounted() {
    getPayTypes().then(r => {
      // this.options = r.data.map(i => {
      //   i.value = i.goodsname
      //   i.key = i.id
      //   return i
      // })
      if (this.options.length) {
        this.selVal = [this.options[0].key];
      }
    });
  },
  watch: {
    selVal(val) {
      if (!val.length) {
        this.selVal = [this.options[0].key];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pay {
  > img {
    border: 2px dashed #fff;
  }
}

.pay-sel {
  > img {
    border: 2px dashed #09bb07;
  }
}
</style>
