'use strict';
define(function (require, exports, module) {
  var $ = require("$"),
      Base = require("arale/base/1.0.1/base"),
      Select = require("arale/select/0.9.2/select"),
      citydata = require("./citydata.js");

  var Cascadecity = Base.extend({
    attrs: {
      _version: "1.0.0",
      selectTrigger: {
        province: ".J-address-province",
        city: ".J-address-city",
        area: ".J-address-area"
      },
      containerClass: "city-container",
      defaultProvince: "请选择",
      citydata: citydata
    },
    initialize: function (config) {
      var that = this;
      Cascadecity.superclass.initialize.call(this, config);
      that.init();
    },
    parseProv: function () {
      var result = [];
      result.push({value: '', text: '请选择', selected: true});
      for (var provItem in this.get("citydata")) {
        result.push({value: provItem, text: provItem, selected: false});
      }
      return result;
    },
    parseCity: function (prov) {
      var cityList = this.get("citydata")[prov], result = [];
      result.push({value: '', text: '请选择', selected: true});
      if (cityList) {
        for (var cityItem in cityList) {
          var city = cityItem;
          result.push({value: city, text: city, selected: false})
        }
      }
      return result;
    },
    parseArea: function (prov, city) {
      var cityList = this.get("citydata")[prov], areaList = cityList && cityList[city], result = [];
      result.push({value: '', text: '请选择', selected: true});
      if (areaList) {
        for (var i in areaList) {
          var area = areaList[i];
          result.push({value: area, text: area, selected: false})
        }
      }
      return result;
    },
    renderData: function () {
      var that = this;
      var address1 = new Select({
        trigger: that.get("selectTrigger").province,
        name: "province",
        align: {baseXY: [0, '100%-1px']},
        model: that.parseProv()
      }).on('change', function (target) {
            var prov = target.attr('data-value');
            var model = that.parseCity(prov);
            address2.syncModel(model);
            address3.syncModel([{value: '', text: '请选择', selected: true}]);
          });
      address1.render().$('[data-role=content]').addClass(that.get("containerClass"));
      var address2 = new Select({
        trigger: that.get("selectTrigger").city,
        name: "city",
        align: {baseXY: [0, '100%-1px']},
        model: [
          {value: "", text: "请选择", selected: true}
        ]
      }).on('change', function (target) {
            if ($(that.get("selectTrigger").area).length > 0) {
              var city = target.attr('data-value');
              var model = that.parseArea(address1.get('value'), city);
              address3.syncModel(model);
            }
          });
      address2.render().$('[data-role=content]').addClass(that.get("containerClass"));
      if ($(that.get("selectTrigger").area).length > 0) {
        var address3 = new Select({
          trigger: that.get("selectTrigger").area,
          name: "area",
          align: {baseXY: [0, '100%-1px']},
          model: [
            {value: "", text: "请选择", selected: true}
          ]
        })
        address3.render().$('[data-role=content]').addClass(that.get("containerClass"));
      }
      var provValue = this.get("defaultProvince");
      provValue && address1.select("[data-value=" + provValue + "]");
    },
    init: function () {
      this.renderData();
    }
  });
  module.exports = Cascadecity;
});


