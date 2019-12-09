import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import _ from './index.module.css';

export default () => {
  return (
    <View className={_.app}>
      <View className={_.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={_.logo}
        />
        <View className={_.text}>
          编辑 <Text className={_.path}>src/pages/index/index.tsx</Text> 开始
        </View>
      </View>
    </View>
  );
};
