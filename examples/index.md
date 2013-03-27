# 演示文档



---

<select id="province">
    <option  value="0">请选择省</option>
</select>
<select id="city">
    <option  value="0">请选择市</option>
</select>
<select id="area">
    <option  value="0">请选择区</option>
</select>


````javascript
seajs.use(['cascadecity','arale/select/0.9.2/select','$'], function(Cascadecity, Select , $){

    var cascadecity = new Cascadecity({
        defaultProvince: "" ,
        showAreaNo : true
    })

    $(function(){
        $("#province").bind("change",function(e){
            var province = $(e.target).val();
            cascadecity.getCity(province)
        })
    })

});
````
