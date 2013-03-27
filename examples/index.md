# 演示文档



---
<link rel="stylesheet" href="./select.css" />
<style type="text/css">
    .J-address-province{
        width:121px;
    }
    .J-address-city,.J-address-area{
        width:46px;
    }
    .city-container{
        overflow-y: scroll;
        overflow-x: hidden;
        _height:expression(this.scrollHeight>330?"330px":"auto");
        max-height:330px;
    }
</style>

<div id="J-address" class="ui-form-item ui-form-item-address">
	<span class="ui-select-trigger J-address-province">请选择</span>
	<span class="ui-select-trigger J-address-city">请选择</span>
	<span class="ui-select-trigger J-address-area">请选择</span>
</div>

```` Dom
HTML :

<div id="J-address" class="ui-form-item ui-form-item-address">
	<span class="ui-select-trigger J-address-province">请选择</span>
	<span class="ui-select-trigger J-address-city">请选择</span>
	<span class="ui-select-trigger J-address-area">请选择</span>
</div>


````

````javascript
seajs.use(['cascadecity','$'], function(Cascadecity, $){

    $(function(){
         var cascadecity = new Cascadecity({
             defaultProvince: "" ,
             selectTrigger: {
                 province: ".J-address-province",
                 city: ".J-address-city",
                 area: ".J-address-area"
             },
             containerClass: "city-container"
         });
    });

});
````

