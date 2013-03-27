define("arale/select/0.9.1/select",["arale/overlay/0.9.13/overlay","$","arale/position/1.0.0/position","arale/iframe-shim/1.0.0/iframe-shim","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events","arale/widget/1.0.2/templatable","gallery/handlebars/1.0.0/handlebars"],function(a,b,c){function i(a,b){var c,d=[],e=a.options,f=e.length,g=!1;for(c=0;f>c;c++){var h,i={},j=e[c],k=["text","value","defaultSelected","selected"];for(h in k){var l=k[h];i[l]=j[l]}i.defaultSelected=j.defaultSelected?"true":"false",j.selected?(i.selected="true",g=!0):i.selected="false",d.push(i)}return g||(newModel[0].selected="true"),{select:d,classPrefix:b}}function j(a,b){var c,d,e=[],f=[];for(c=0,l=a.length;l>c;c++){var g=a[c];g.selected?(g.selected=g.defaultSelected="true",f.push(c)):g.selected=g.defaultSelected="false",e.push(g)}if(f.length>0)for(f.pop(),d=0,ll=f.length;ll>d;d++)e[d].selected="false";else e[0].selected="true";return{select:e,classPrefix:b}}function k(a,b){var c;return c=e.isNumeric(a)?a:"string"==typeof a?b.index(b.parent().find(a)):b.index(a)}var d=a("arale/overlay/0.9.13/overlay"),e=a("$"),f=a("arale/widget/1.0.2/templatable"),g='<div class="{{classPrefix}}">\n<ul class="{{classPrefix}}-content" data-role="content">\n{{#each select}}\n<li data-role="item" class="{{../classPrefix}}-item" data-value="{{value}}" data-defaultSelected="{{defaultSelected}}" data-selected="{{selected}}">{{text}}</li>\n{{/each}}\n</ul>\n</div>',h=d.extend({Implements:f,attrs:{trigger:{value:null,getter:function(a){return e(a).eq(0)}},classPrefix:"ui-select",template:g,align:{baseXY:[0,"100%-1px"]},name:"",value:"",length:0,selectedIndex:-1,multiple:!1,disabled:!1,selectSource:null},events:{"click [data-role=item]":function(a){var b=e(a.currentTarget);this.select(b)},"mouseenter [data-role=item]":function(a){e(a.currentTarget).addClass(this.get("classPrefix")+"-hover")},"mouseleave [data-role=item]":function(a){e(a.currentTarget).removeClass(this.get("classPrefix")+"-hover")}},initAttrs:function(a,b){h.superclass.initAttrs.call(this,a,b);var c=this.get("trigger");if("select"==c[0].tagName.toLowerCase()){var d=c.attr("name");d&&this.set("name",d),this.set("selectSource",c);var f='<a href="#" class="'+this.get("classPrefix")+'-trigger"></a>',g=e(f);this.set("trigger",g),c.after(g).hide(),this.model=i(c[0],this.get("classPrefix"))}else{var d=this.get("name");if(d){var k=e("input[name="+d+"]").eq(0);k[0]||(k=e('<input type="hidden" id="select-'+d+'" name="'+d+'" />').insertBefore(c)),this.set("selectSource",k)}this.model=j(this.model,this.get("classPrefix"))}},setup:function(){var a=this,b=this.get("trigger").on("click",function(b){b.preventDefault(),a.get("disabled")||a.show()});this.options=this.$("[data-role=content]").children(),this.select("[data-selected=true]"),this.set("length",this.options.length),this._tweakAlignDefaultValue(),this._blurHide(b),h.superclass.setup.call(this)},render:function(){return h.superclass.render.call(this),this._setTriggerWidth(),this},show:function(){return h.superclass.show.call(this),this._setPosition(),this},_setTriggerWidth:function(){var a=this.get("trigger"),b=this.element.outerWidth(),c=parseInt(a.css("padding-left"),10),d=parseInt(a.css("padding-right"),10),e=parseInt(a.css("border-left-width"),10),f=parseInt(a.css("border-right-width"),10);a.css("width",b-c-d-e-f)},_tweakAlignDefaultValue:function(){var a=this.get("align");"VIEWPORT"===a.baseElement._id&&(a.baseElement=this.get("trigger")),this.set("align",a)},destroy:function(){this.element.remove(),h.superclass.destroy.call(this)},select:function(a){var b=k(a,this.options),c=this.get("selectedIndex");if(this.set("selectedIndex",b),c!==b){var d=this.options.eq(b);this.trigger("change",d)}return this.hide(),this},syncModel:function(a){return this.model=j(a,this.get("classPrefix")),this.renderPartial("[data-role=content]"),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),this.set("selectedIndex",-1),this.set("value",""),this.select("[data-selected=true]"),this._setTriggerWidth(),this},getOption:function(a){var b=k(a,this.options);return this.options.eq(b)},addOption:function(a){var b=this.model.select;return b.push(a),this.syncModel(b),this},removeOption:function(a){var b=k(a,this.options),c=this.get("selectedIndex"),d=this.options.eq(b);return d.remove(),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),b===c?this.set("selectedIndex",0):c>b&&this.set("selectedIndex",c-1),this},_onRenderSelectedIndex:function(a){if(-1!=a){var b=this.options.eq(a),c=this.currentItem,d=b.attr("data-value");if(!c||b[0]!=c[0]){var e=this.get("selectSource");e&&(e[0].value=d),c&&c.attr("data-selected","false").removeClass(this.get("classPrefix")+"-selected"),b.attr("data-selected","true").addClass(this.get("classPrefix")+"-selected"),this.set("value",d),this.get("trigger").html(b.html()),this.currentItem=b}}},_onRenderDisabled:function(a){var b=this.get("classPrefix")+"-disabled",c=this.get("trigger");c[a?"addClass":"removeClass"](b)}});c.exports=h});