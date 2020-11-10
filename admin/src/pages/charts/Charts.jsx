import React, { useState, useEffect } from 'react';
import {Card, Space, Button} from 'antd';

import { Chart, Util } from '@antv/g2';

const data = [
  { feature: 'Battery', value: 0.22, phone: 'iPhone' },
  { feature: 'Brand', value: 0.28, phone: 'iPhone' },
  { feature: 'Contract', value: 0.29, phone: 'iPhone' },
  { feature: 'Design', value: 0.17, phone: 'iPhone' },
  { feature: 'Internet', value: 0.22, phone: 'iPhone' },
  { feature: 'Battery', value: 0.27, phone: 'Samsung' },
  { feature: 'Brand', value: 0.16, phone: 'Samsung' },
  { feature: 'Contract', value: 0.35, phone: 'Samsung' },
  { feature: 'Design', value: 0.13, phone: 'Samsung' },
  { feature: 'Internet', value: 0.2, phone: 'Samsung' },
  { feature: 'Battery', value: 0.26, phone: 'Nokia Smartphone' },
  { feature: 'Brand', value: 0.1, phone: 'Nokia Smartphone' },
  { feature: 'Contract', value: 0.3, phone: 'Nokia Smartphone' },
  { feature: 'Design', value: 0.14, phone: 'Nokia Smartphone' },
  { feature: 'Internet', value: 0.22, phone: 'Nokia Smartphone' },
]

const data2 = [
  { type: '一线城市', value: 0.19 },
  { type: '二线城市', value: 0.21 },
  { type: '三线城市', value: 0.27 },
  { type: '四线及以下', value: 0.33 },
];

let chart;
let chart2;

const Charts = () => {

  useEffect(() => {
    initCharts()
    initCharts2()
  }, [])

  const initCharts = () => {
    // Step 1: 创建 Chart 对象
    chart = new Chart({
      container: 'c1', // 指定图表容器 ID
      // width: 600, // 指定图表宽度
      // height: 300, // 指定图表高度
      autoFit: true,
    });

    // Step 2: 载入数据源
    chart.data(data);

    // Step 3: 创建图形语法，绘制柱状图
    chart
      .interval()
      .position('feature*value')
      .color('phone')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ])
      // .shape('phone', ['circle', 'square', 'triangle'])
      // .size(4)
    // chart
    //   .area()
    //   .adjust('stack')
    //   .position('feature*value')
    //   .color('phone');
    // chart
    //   .line()
    //   .adjust('stack')
    //   .position('feature*value')
    //   .color('phone');
    // chart
    //   .point()
    //   .adjust('stack')
    //   .position('feature*value')
    //   .color('phone')
    //   .shape('circle');

    // chart.scale('value', {
    //   min: 0,
    //   max: 1,
    // });

    chart.tooltip({
      // showCrosshairs: true, // 展示 Tooltip 辅助线
      // showMarkers: false, // 不展示 tooltip markers
      showMarkers: false,
      shared: true,
    });
    chart.interaction('active-region'); // 使用 active-region 交互行为

    // Step 4: 渲染图表
    chart.render();
  }

  const initCharts2 = () => {
    chart2 = new Chart({
      container: 'c2',
      autoFit: true,
      height: 500,
    });
    chart2.data(data2);
    
    chart2.coordinate('theta', {
      radius: 0.75
    });
    chart2.tooltip({
      showMarkers: false
    });
    
    const interval2 = chart2
      .interval()
      .adjust('stack')
      .position('value')
      .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
      .style({ opacity: 0.4 })
      .state({
        active: {
          style: (element) => {
            const shape = element.shape;
            return {
              matrix: Util.zoom(shape, 1.1),
            }
          }
        }
      })
      .label('type', (val) => {
        const opacity = val === '四线及以下' ? 1 : 0.5;
        return {
          offset: -30,
          style: {
            opacity,
            fill: 'white',
            fontSize: 12,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
          content: (obj) => {
            return obj.type + '\n' + obj.value + '%';
          },
        };
      });
    
    chart2.interaction('element-single-selected');
    
    chart2.render();
  }

  const changeData = () => {
    // chart.changeData([
    //   { feature: 'Battery', value: 0.22, phone: 'iPhone' },
    //   { feature: 'Brand', value: 0.28, phone: 'iPhone' },
    //   { feature: 'Contract', value: 0.29, phone: 'iPhone' },
    //   { feature: 'Design', value: 0.17, phone: 'iPhone' },
    //   { feature: 'Internet', value: 0.22, phone: 'iPhone' },
    //   { feature: 'Battery', value: 0.27, phone: 'Samsung' },
    //   { feature: 'Brand', value: 0.16, phone: 'Samsung' },
    //   { feature: 'Contract', value: 0.35, phone: 'Samsung' },
    //   { feature: 'Design', value: 0.13, phone: 'Samsung' },
    //   { feature: 'Internet', value: 0.2, phone: 'Samsung' },
    //   { feature: 'Battery', value: 0.26, phone: 'Nokia Smartphone' },
    //   { feature: 'Brand', value: 0.1, phone: 'Nokia Smartphone' },
    //   { feature: 'Contract', value: 0.3, phone: 'Nokia Smartphone' },
    //   { feature: 'Design', value: 0.14, phone: 'Nokia Smartphone' },
    //   { feature: 'Internet', value: 0.22, phone: 'Nokia Smartphone' },
    // ])
    chart.data([
      { feature: 'Battery', value: 0.22, phone: 'iPhone' },
      { feature: 'Brand', value: 0.28, phone: 'iPhone' },
      { feature: 'Contract', value: 0.29, phone: 'iPhone' },
      { feature: 'Design', value: 0.17, phone: 'iPhone' },
      { feature: 'Internet', value: 0.22, phone: 'iPhone' },
      { feature: 'Battery', value: 0.27, phone: 'Samsung' },
      { feature: 'Brand', value: 0.16, phone: 'Samsung' },
      { feature: 'Contract', value: 0.35, phone: 'Samsung' },
      { feature: 'Design', value: 0.13, phone: 'Samsung' },
      { feature: 'Internet', value: 0.2, phone: 'Samsung' },
      { feature: 'Battery', value: 0.26, phone: 'Nokia Smartphone' },
      { feature: 'Brand', value: 0.1, phone: 'Nokia Smartphone' },
      { feature: 'Contract', value: 0.3, phone: 'Nokia Smartphone' },
      { feature: 'Design', value: 0.14, phone: 'Nokia Smartphone' },
      { feature: 'Internet', value: 0.22, phone: 'Nokia Smartphone' },
    ])
    chart.render()
  }

  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Card title="柱形图表之一">
        <div id="c1" style={{width:'100%', height: '500px'}}></div>
        <div id="c2"></div>
        <Button onClick={changeData}>按钮</Button>
      </Card>
    </Space>
  );
}

export default Charts;