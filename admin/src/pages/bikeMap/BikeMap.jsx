import React, {useEffect} from 'react';
import {Card} from 'antd';
import AMapLoader from '@amap/amap-jsapi-loader';

let map;

const BikeMap = () => {

  useEffect(() => {
    initMap()
  }, [])

  const initMap = () => {
    AMapLoader.load({
      "key": "2b343563c35159f12526f302f7c21464",        // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      "AMapUI": {             // 是否加载 AMapUI，缺省不加载
          "version": '1.1',   // AMapUI 缺省 1.1
          "plugins":[],       // 需要加载的 AMapUI ui插件
      },
      "Loca":{                // 是否加载 Loca， 缺省不加载
          "version": '1.3.2'  // Loca 版本，缺省 1.3.2
      },
    }).then((AMap)=>{
      map = new AMap.Map('container',{
        zoom:15,//级别
        center: [120.264351,30.305584],//中心点坐标
        // viewMode:'3D'//使用3D视图
        // lang: "en",
      });
      // 添加插件
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Driving', 'AMap.Weather'],function(){//异步加载插件
        // 工具条
        let toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
        // 比例尺
        let scale = new AMap.Scale();
        map.addControl(scale);
        // 路线规划
        let driving = new AMap.Driving({
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME
        })
        
        let startLngLat = [120.264351,30.305584]
        let endLngLat = [120.43609,30.235981]
        
        driving.search(startLngLat, endLngLat, function (status, result) {
          // 未出错时，result即是对应的路线规划方案
          // console.log(status)
          console.log(result)
          let path = []
          result.routes[0].steps.forEach(item => {
            path.push([item.path[0].lng, item.path[0].lat])
          })
          // const path = [[120.264351,30.305584],[120.43609,30.235981]]
          var polyline = new AMap.Polyline({
            path : path,
          })
          map.add(polyline);
        })
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive('杭州市', function(err, data) {
            console.log(err, data);
        });
      });


      let marker = new AMap.Marker({
        position: new AMap.LngLat(120.264351,30.305584),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '望天',
        // icon: '//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
        // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
        // imageSize: new AMap.Size(40, 50)   // 根据所设置的大小拉伸或压缩图片
      });
      map.add(marker);

      // var satelliteLayer = new AMap.TileLayer.Satellite();
      // var roadNetLayer =  new AMap.TileLayer.RoadNet();

      // //批量添加图层
      // map.add([satelliteLayer, roadNetLayer]);
    }).catch(e => {
      console.log(e);
    })  
  }

  return (
    <Card>
      <div id="container" style={{height: '500px'}}></div>
    </Card>
  );
}

export default BikeMap;
