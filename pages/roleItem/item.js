// pages/roleItem/item.js
var roleData = require('../../utils/util.js');
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    tooltip: {},
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      shape: 'circle',
      indicator: [{
          name: '忍术',
          max: 10
        },
        {
          name: '体术',
          max: 10
        },
        {
          name: '幻术',
          max: 10
        },
        {
          name: '智慧',
          max: 10
        },
        {
          name: '力量',
          max: 10
        },
        {
          name: '速度',
          max: 10
        },
        {
          name: '查克拉',
          max: 10
        },
        {
          name: '结印',
          max: 10
        }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
          value: [4, 3, 2, 2, 4, 4,8,2],
          name: '临之书'
        },
        {
          value: [6, 4, 2, 3, 6, 6,8,2],
          name: '斗之书'
        }
      ]
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    role: {},
    ec: {
      onInit: initChart
    }
  },
  onLoad: function(options) {
    var id = options.id;
    this.setData({
      role: roleData.searchmtdataByID(id)
    });
  }
})