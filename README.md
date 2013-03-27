# cascadecity

---

// description

基于seajs的城市三级联动,依赖select组件

---

## 使用说明

   **defaultProvince** : 设置默认显示的省<br>
   **selectTrigger**: 省市区触发元素<br>
   **containerClass** : 点击出现数据的容器样式

## API

    var cascadecity = new Cascadecity({
         defaultProvince: "" ,
         selectTrigger: {
             province: ".J-address-province",
             city: ".J-address-city",
             area: ".J-address-area"
         },
         containerClass:  "city-container"
     });

