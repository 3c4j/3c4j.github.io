(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{288:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return n}));var n={type:"page",body:{type:"lib-crud",api:"$preset.apis.list",filter:"$preset.forms.filter",filterTogglable:!0,perPageAvailable:[50,100,200],defaultParams:{size:50},perPageField:"size",pageField:"page",headerToolbar:["filter-toggler",{type:"columns-toggler",align:"left"},{type:"pagination",align:"left"},"$preset.actions.add"],footerToolbar:["statistics","switch-per-page","pagination"],columns:[{name:"id",label:"ID",type:"text",width:80},{name:"title",label:"\u6807\u9898",type:"text"},{name:"desc",label:"\u63cf\u8ff0",type:"text"},{name:"createTime",label:"\u521b\u5efa\u65f6\u95f4",type:"datetime",width:150},{name:"updateTime",label:"\u66f4\u65b0\u65f6\u95f4",type:"datetime",width:150},{type:"operation",label:"\u64cd\u4f5c",width:60,limits:["edit","del"],limitsLogic:"or",buttons:["$preset.actions.edit","$preset.actions.del"]}]},definitions:{updateControls:{controls:[{name:"title",label:"\u6807\u9898",type:"text",required:!0},{name:"desc",label:"\u63cf\u8ff0",type:"text"},{name:"content",label:"\u6587\u6863",type:"rich-text"}]}},preset:{actions:{add:{limits:"add",type:"button",align:"right",actionType:"dialog",label:"\u6dfb\u52a0",icon:"fa fa-plus pull-left",size:"sm",primary:!0,dialog:{title:"\u65b0\u589e\u6587\u6863",size:"lg",body:{type:"form",api:"$preset.apis.add",mode:"normal",$ref:"updateControls"}}},edit:{limits:"edit",type:"button",icon:"fa fa-pencil",tooltip:"\u7f16\u8f91",actionType:"dialog",dialog:{title:"\u7f16\u8f91\u6587\u6863",size:"lg",body:{type:"form",mode:"normal",api:"$preset.apis.edit",$ref:"updateControls"}}},del:{limits:"del",type:"action",icon:"fa fa-times text-danger",actionType:"ajax",tooltip:"\u5220\u9664",confirmText:"\u60a8\u786e\u8ba4\u8981\u5220\u9664?",api:{$preset:"apis.del"},messages:{success:"\u5220\u9664\u6210\u529f",failed:"\u5220\u9664\u5931\u8d25"}}},forms:{filter:{controls:[{type:"date-range",name:"dateRange",label:"\u521b\u5efa\u65f6\u95f4\u8303\u56f4",format:"YYYY-MM-DD"},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]}}}}},289:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return n}));var n={type:"page",body:{type:"lib-crud",api:"$preset.apis.list",filter:"$preset.forms.filter",filterTogglable:!0,perPageAvailable:[50,100,200],defaultParams:{size:50},perPageField:"size",pageField:"page",headerToolbar:["filter-toggler",{type:"columns-toggler",align:"left"},{type:"pagination",align:"left"},"$preset.actions.add"],footerToolbar:["statistics","switch-per-page","pagination"],columns:[{name:"id",label:"ID",type:"text",width:80},{name:"desc",label:"\u63cf\u8ff0",type:"text"},{name:"createTime",label:"\u521b\u5efa\u65f6\u95f4",type:"datetime",width:150},{name:"updateTime",label:"\u66f4\u65b0\u65f6\u95f4",type:"datetime",width:150},{type:"operation",label:"\u64cd\u4f5c",width:60,limits:["edit","del"],limitsLogic:"or",buttons:["$preset.actions.edit","$preset.actions.del"]}]},definitions:{updateControls:{controls:[{name:"desc",required:!0,label:"\u914d\u7f6e\u63cf\u8ff0",type:"text"},{name:"content",label:"JSON\u914d\u7f6e",type:"json-editor"}]}},preset:{actions:{add:{limits:"add",type:"button",align:"right",actionType:"dialog",label:"\u6dfb\u52a0",icon:"fa fa-plus pull-left",size:"sm",primary:!0,dialog:{title:"\u65b0\u589e\u914d\u7f6e",size:"lg",body:{type:"form",api:"$preset.apis.add",mode:"normal",$ref:"updateControls"}}},edit:{limits:"edit",type:"button",icon:"fa fa-pencil",tooltip:"\u7f16\u8f91\u914d\u7f6e",actionType:"dialog",dialog:{title:"\u7f16\u8f91",size:"lg",body:{type:"form",mode:"normal",api:"$preset.apis.edit",$ref:"updateControls"}}},del:{limits:"del",type:"button",icon:"fa fa-times text-danger",actionType:"ajax",tooltip:"\u5220\u9664",confirmText:"\u60a8\u786e\u8ba4\u8981\u5220\u9664?",api:"$preset.apis.del",messages:{success:"\u5220\u9664\u6210\u529f",failed:"\u5220\u9664\u5931\u8d25"}}},forms:{filter:{controls:[{type:"date-range",name:"dateRange",label:"\u521b\u5efa\u65f6\u95f4\u8303\u56f4",format:"YYYY-MM-DD"},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]}}}}},290:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return p}));var n,i=a(6),l=a(4),r=a(34),o=a(298),s=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p={type:"page",body:[{type:"container",body:{component:o.a}},{type:"wrapper",className:"register-wrapper b r",body:[{type:"html",html:'\n          <h6 class="register-title">\n          <img src="/static/images/logo_grey.png" />\n            <p>Ovine \u6ce8\u518c\u65b0\u8d26\u53f7</p>\n          </h6>\n        '},{$preset:"forms.loginForm"}]}],preset:{apis:{register:{url:"POST ovapi/user/demo_register",onSuccess:function(e){var t=e.code,a=e.msg,n=e.data;return 0===t?(Object(l.g)(r.d.auth,n),e.msg="\u60a8\u5df2\u767b\u5f55\u767b\u5f55\u672c\u7cfb\u7edf"):(Object(l.a)(r.d.auth),e.msg=a||"\u6ce8\u518c\u5f02\u5e38"),e}}},forms:{loginForm:{type:"form",className:"register-form",title:"",mode:"horizontal",horizontal:{left:"col-sm-3",right:"col-sm-8"},wrapWithPanel:!1,api:"$preset.apis.register",redirect:"/",controls:[{type:"text",name:"username",required:!0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",label:"\u7528\u6237\u540d",size:"full"},{type:"password",name:"password",label:"\u5bc6\u7801",required:!0,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",size:"full"},{type:"password",name:"confirmPassword",label:"\u786e\u8ba4\u5bc6\u7801",required:!0,placeholder:"\u518d\u6b21\u8f93\u5165\u5bc6\u7801",size:"full",validations:{equalsField:"password"},validationErrors:{equalsField:"\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4"}},{type:"button",level:"link",actionType:"link",link:"/login",inputClassName:"pull-right no-shadow",label:"\u8fd4\u56de\u767b\u5f55"},{type:"submit",size:"lg",level:"primary",label:"\u6ce8\u518c\u5e76\u767b\u5f55",inputClassName:"w-full",horizontal:{left:"col-sm-2",right:"col-sm-9"}}]}}},css:function(e){var t=e.name;return Object(i.css)(n||(n=s(["\n    .register-wrapper {\n      position: relative;\n      max-width: 450px;\n      margin: 12% auto 0;\n      background-color: ",";\n    }\n\n    .register-title {\n      margin: 0 0 15px 0px;\n      font-size: 30px;\n      text-align: center;\n\n      img {\n        display: inline-block;\n        width: 50px;\n        vertical-align: middle;\n      }\n      p {\n        display: inline-block;\n        margin: 0;\n        vertical-align: middle;\n      }\n    }\n\n    .register-form {\n      padding-top: 15px;\n\n      .is-error {\n        label {\n          color: #58666e;\n        }\n      }\n    }\n\n    .cxd-Form-label {\n      text-align: right !important;\n    }\n  "],["\n    .register-wrapper {\n      position: relative;\n      max-width: 450px;\n      margin: 12% auto 0;\n      background-color: ",";\n    }\n\n    .register-title {\n      margin: 0 0 15px 0px;\n      font-size: 30px;\n      text-align: center;\n\n      img {\n        display: inline-block;\n        width: 50px;\n        vertical-align: middle;\n      }\n      p {\n        display: inline-block;\n        margin: 0;\n        vertical-align: middle;\n      }\n    }\n\n    .register-form {\n      padding-top: 15px;\n\n      .is-error {\n        label {\n          color: #58666e;\n        }\n      }\n    }\n\n    .cxd-Form-label {\n      text-align: right !important;\n    }\n  "])),"dark"===t?"rgba(0,0,0,0.4)":"rgba(255, 255, 255, 0.9)")}}},291:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return i}));var n=a(7),i={type:"page",body:{type:"lib-crud",api:"$preset.apis.list",filter:"$preset.forms.filter",filterTogglable:!0,perPageField:"size",pageField:"page",perPageAvailable:[50,100,200],defaultParams:{size:50},headerToolbar:["filter-toggler",{type:"columns-toggler",align:"left"},{type:"pagination",align:"left"},{$preset:"actions.tree",align:"right"},{$preset:"actions.add",align:"right"}],footerToolbar:["statistics","switch-per-page","pagination"],columns:[{name:"id",label:"ID",type:"text"},{name:"username",label:"\u767b\u5f55\u8d26\u53f7",type:"text"},{name:"nickname",label:"\u540d\u79f0",type:"text",sortable:!0},{name:"avatar",label:"\u5934\u50cf",type:"tpl",tpl:'<img style="width:30px;" src="${avatar}" />',popOver:{body:'<div class="w-xxl"><img class="w-full" src="${avatar}"/></div>'}},{name:"roleId",label:"\u89d2\u8272\u540d",type:"tpl",tpl:'<%= !data.roleId ? "-" : data.roleName + " (" + data.roleId +")" %>'},{name:"desc",label:"\u7528\u6237\u63cf\u8ff0",type:"tpl",tpl:'<span class="text-ellipsis" title="${desc}">${desc}</span>',width:150},{name:"createTime",label:"\u521b\u5efa\u65f6\u95f4",type:"datetime",width:150},{name:"updateTime",label:"\u66f4\u65b0\u65f6\u95f4",type:"datetime",width:150},{type:"operation",label:"\u64cd\u4f5c",width:60,limits:["editItem","delItem"],limitsLogic:"or",buttons:["$preset.actions.edit","$preset.actions.del"]}]},definitions:{updateControls:{controls:[{type:"text",name:"username",label:"\u767b\u5f55\u8d26\u53f7",required:!0},{type:"text",name:"password",label:"\u767b\u5f55\u5bc6\u7801",requiredOn:'typeof data.id === "undefined"'},{type:"text",name:"nickname",label:"\u540d\u79f0",required:!0},{type:"text",name:"desc",label:"\u63cf\u8ff0"}]}},preset:{actions:{add:{limits:"addItem",type:"button",align:"right",actionType:"dialog",label:"\u6dfb\u52a0",icon:"fa fa-plus pull-left",size:"sm",primary:!0,dialog:{title:"\u65b0\u589e",body:{type:"form",name:"sample-edit-form",api:"$preset.apis.add",$ref:"updateControls"}}},tree:{limits:"viewTree",type:"button",align:"right",actionType:"drawer",label:"\u6210\u5458\u5173\u7cfb\u56fe",icon:"fa fa-sitemap pull-left",size:"sm",primary:!0,drawer:"$preset.forms.tree"},edit:{limits:"editItem",type:"button",icon:"fa fa-pencil",tooltip:"\u7f16\u8f91",actionType:"dialog",dialog:{title:"\u7f16\u8f91",body:{type:"form",name:"sample-edit-form",api:"$preset.apis.edit",$ref:"updateControls"}}},del:{limits:"delItem",type:"button",icon:"fa fa-times text-danger",actionType:"ajax",tooltip:"\u5220\u9664",confirmText:"\u60a8\u786e\u8ba4\u8981\u5220\u9664?",api:"$preset.apis.del",messages:{success:"\u5220\u9664\u6210\u529f",failed:"\u5220\u9664\u5931\u8d25"}}},forms:{filter:{controls:[{type:"text",name:"filter",label:"\u5173\u952e\u5b57",clearable:!0,placeholder:"\u8bf7\u8f93\u5165"},{$ref:"sysRoleIdPicker"},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]},tree:{position:"bottom",size:"md",title:"\u60a8\u521b\u5efa\u7684\u7ba1\u7406\u5458\u5173\u7cfb\u56fe",actions:[],bodyClassName:"sub-h-full",body:{type:"chart",className:"h-full",api:{$preset:"apis.treeChart",onSuccess:function(e){var t=Object(n.mapTree)([e.data],(function(e){return{children:e.children,name:e.nickname,value:e.id}}));return e.data={tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:t,top:"1%",left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!1,animationDuration:550,animationDurationUpdate:750}]},e}}}}}}}},292:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return c}));var n,i,l=a(1),r=function(e,t,a){if(a||2===arguments.length)for(var n,i=0,l=t.length;i<l;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},o=function(e,t){var a=[],n=[];return t.forEach((function(t){a.push(t.date),n.push(t[e])})),{tooltip:{trigger:"axis",axisPointer:{type:"none"}},grid:{left:"5%",right:"5%",bottom:"0%",top:"0%",containLabel:!1},xAxis:{type:"category",data:a,show:!1,boundaryGap:!1},yAxis:{type:"value",show:!1},series:[{data:n,type:"line",smooth:!0,showSymbol:!1,areaStyle:{}}]}},s=a(6),p=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=function(){return(d=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c={type:"page",css:function(e){var t=e.colors,a=e.ns;return Object(s.css)(n||(n=p(["\n  .dash-grid {\n    margin: 0 -8px;\n    & > div {\n      margin: 0 0 15px;\n      padding: 0;\n      & > div {\n        margin: 0px 8px;\n        padding-bottom: 15px;\n        background-color: ",";\n      }\n    }\n    .","Spinner {\n      background-repeat: no-repeat;\n      width: 25px;\n      height: 25px;\n      opacity: 0.5;\n    }\n  }\n\n  .target-card {\n    .card-info {\n      position: relative;\n      padding: 0px 15px 0;\n      height: 75px;\n      h6 {\n        font-size: 14px;\n        margin: 0;\n      }\n      p {\n        font-size: 24px;\n      }\n    }\n    .tip-icon {\n      position: absolute;\n      right: 15px;\n      top: 0;\n      height: auto;\n      padding: 0;\n    }\n    .card-chart {\n      width: 100%;\n      height: 100px;\n    }\n  }\n\n  .tabs-card {\n    margin-bottom: 15px;\n    padding: 5px 15px 0px;\n    background-color: ",";\n\n    .tab-filter {\n      margin: 15px 0 30px;\n    }\n\n    .img-carousel {\n      .image {\n        background-size: cover !important;\n        border-radius: 2px;\n      }\n    }\n  }\n\n  /** \u8c03\u6574\u4e3b\u9898 */\n  .","DatePicker {\n    &-toggler::before {\n      line-height: 1.5;\n    }\n  }\n  .","Chart {\n    min-width: 100px !important;\n    min-height: 100px !important;\n  }\n  .","Form {\n    &-item button {\n      background-color: transparent;\n    }\n    &-control {\n      & > div {\n        background-color: transparent;\n      }\n    }\n  }\n  .bar-table {\n    border-color: ",";\n    .","Table-contentWrap {\n      background-color: transparent;\n    }\n    .","Table-content {\n      height: 380px;\n    }\n    .","Table-table {\n      min-width: 300px;\n\n      th {\n        border-right: 0 !important;\n      }\n      tr {\n        border-top: 0;\n        background-color: transparent !important;\n      }\n    }\n  }\n"],["\n  .dash-grid {\n    margin: 0 -8px;\n    & > div {\n      margin: 0 0 15px;\n      padding: 0;\n      & > div {\n        margin: 0px 8px;\n        padding-bottom: 15px;\n        background-color: ",";\n      }\n    }\n    .","Spinner {\n      background-repeat: no-repeat;\n      width: 25px;\n      height: 25px;\n      opacity: 0.5;\n    }\n  }\n\n  .target-card {\n    .card-info {\n      position: relative;\n      padding: 0px 15px 0;\n      height: 75px;\n      h6 {\n        font-size: 14px;\n        margin: 0;\n      }\n      p {\n        font-size: 24px;\n      }\n    }\n    .tip-icon {\n      position: absolute;\n      right: 15px;\n      top: 0;\n      height: auto;\n      padding: 0;\n    }\n    .card-chart {\n      width: 100%;\n      height: 100px;\n    }\n  }\n\n  .tabs-card {\n    margin-bottom: 15px;\n    padding: 5px 15px 0px;\n    background-color: ",";\n\n    .tab-filter {\n      margin: 15px 0 30px;\n    }\n\n    .img-carousel {\n      .image {\n        background-size: cover !important;\n        border-radius: 2px;\n      }\n    }\n  }\n\n  /** \u8c03\u6574\u4e3b\u9898 */\n  .","DatePicker {\n    &-toggler::before {\n      line-height: 1.5;\n    }\n  }\n  .","Chart {\n    min-width: 100px !important;\n    min-height: 100px !important;\n  }\n  .","Form {\n    &-item button {\n      background-color: transparent;\n    }\n    &-control {\n      & > div {\n        background-color: transparent;\n      }\n    }\n  }\n  .bar-table {\n    border-color: ",";\n    .","Table-contentWrap {\n      background-color: transparent;\n    }\n    .","Table-content {\n      height: 380px;\n    }\n    .","Table-table {\n      min-width: 300px;\n\n      th {\n        border-right: 0 !important;\n      }\n      tr {\n        border-top: 0;\n        background-color: transparent !important;\n      }\n    }\n  }\n"])),t.layoutHeaderBg,a,t.layoutHeaderBg,a,a,a,t.border,a,a,a)},body:[{type:"service",api:{$preset:"apis.chart",onSuccess:function(e){var t=e.data.items,a=Object(l.last)(t)||{};return e.data={userCount:{num:a.userCount||0,chart:o("userCount",t)},loginCount:{num:a.loginCount||0,chart:o("loginCount",t)},registerCount:{num:a.registerCount||0,chart:o("registerCount",t)},showCount:{num:a.showCount||0,chart:o("showCount",t)}},e}},body:{type:"grid",className:"dash-grid",columns:(i=[{title:"\u603b\u7528\u6237\u6570",intro:"\u7cfb\u7edf\u5185\u7ba1\u7406\u5458\u6700\u591a\u65f6\u7684\u6570\u91cf",kpi:"userCount"},{title:"\u767b\u5f55\u4eba\u6570",intro:"\u6bcf\u5929\u767b\u5f55\u7cfb\u7edf\u7684\u7ba1\u7406\u5458\u4eba\u6570",kpi:"loginCount"},{title:"\u65b0\u589e\u52a0\u4eba\u6570",intro:"\u6bcf\u5929\u7cfb\u7edf\u7684\u65b0\u589e\u52a0\u7684\u7ba1\u7406\u5458\u4eba\u6570",kpi:"registerCount"},{title:"\u7cfb\u7edf\u603b\u8bbf\u95ee\u6b21\u6570",intro:"\u6bcf\u5929\u7cfb\u7edf\u7684\u88ab\u8bbf\u95ee\u7684\u6b21\u6570",kpi:"showCount"}],i.map((function(e){var t=e.title,a=e.intro,n=e.grid,i=e.kpi,l=d({lg:3,md:6,sm:6,xs:12},n);return d(d({type:"wrapper",className:"target-card"},l),{body:[{type:"wrapper",className:"card-info no-bg",body:[{type:"tpl",tpl:" <div>".concat(t,"</div><p><%= data?.").concat(i,'?.num || "0"%></p>')},{type:"html",html:'<i class="tip-icon fa fa-question-circle clickable" data-tooltip="'.concat(a,'" data-position="left"></i>')}]},{type:"chart",className:"card-chart",source:"${".concat(i,".chart}")}]})})))}},{type:"tabs",mode:"line",className:"tabs-card",tabs:[{title:"\u8bbf\u95ee\u91cf",tab:{type:"service",name:"tab-rain",api:{$preset:"apis.chart",data:{startDate:"$dateRange.0",endDate:"$dateRange.1"},onSuccess:function(e){var t=e.data.items,a=void 0===t?[]:t,n=a.length?Object(l.maxBy)(a,(function(e){return e.loginCount})).loginCount+20:10,i=a.length?Object(l.maxBy)(a,(function(e){return e.showCount})).showCount+20:10;return e.data={table:r([],a,!0).reverse(),chart:{tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{left:10,data:["\u767b\u5f55\u4eba\u6570","\u65b0\u589e\u4eba\u6570","\u6d4f\u89c8\u6b21\u6570"]},grid:{left:"0%",right:"0%",bottom:"0%",top:"0%",containLabel:!1},xAxis:[{type:"category",show:!1,data:a.map((function(e){return e.date})),axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"\u4eba\u6570",show:!1,min:0,max:n,interval:n/10,axisLabel:{formatter:"{value} \u4eba"}},{type:"value",name:"\u6b21\u6570",show:!1,min:0,max:i,interval:i/10,axisLabel:{formatter:"{value} \u6b21"}}],series:[{name:"\u767b\u5f55\u4eba\u6570",type:"bar",data:a.map((function(e){return e.loginCount}))},{name:"\u65b0\u589e\u4eba\u6570",type:"bar",data:a.map((function(e){return e.registerCount}))},{name:"\u6d4f\u89c8\u6b21\u6570",type:"line",yAxisIndex:1,data:a.map((function(e){return e.showCount}))}]}},e}},body:{type:"grid",columns:[{lg:6,type:"grid",columns:[{lg:12,$preset:"forms.tabRainFilter"},{lg:12,type:"chart",className:"rain-chart",name:"rain-chart",height:295,source:"${chart}"}]},{type:"table",lg:6,affixHeader:!1,columnsTogglable:!1,className:"bar-table m-b-none",source:"${table}",columns:[{name:"date",label:"\u65e5\u671f",width:100},{name:"loginCount",label:"\u767b\u5f55\u4eba\u6570"},{name:"registerCount",label:"\u65b0\u589e\u4eba\u6570"},{name:"userCount",label:"\u603b\u7528\u6237\u6570"},{name:"showCount",label:"\u6d4f\u89c8\u6b21\u6570"}]}]}}}]}],preset:{forms:{tabRainFilter:{type:"form",title:"\u8fc7\u6ee4\u6761\u4ef6",className:"tab-filter",submitOnInit:!1,wrapWithPanel:!1,mode:"inline",target:"tab-rain",actions:[],controls:[{type:"date-range",label:"\u65f6\u95f4\u8303\u56f4",name:"dateRange",format:"YYYY-MM-DD",joinValues:!1},{type:"submit",label:"\u641c\u7d22"}]}}}}},293:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return u}));var n,i=a(11),l=a(4),r=a(34),o=a(298),s=a(7),p=a(0),d=a.n(p),c=a(150).a.getUrlByOption({url:"ovapi/user/code"}).url,m=a(6),g=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u={type:"page",css:function(e){var t=e.name;return Object(m.css)(n||(n=g(["\n  .login-wrapper {\n    position: relative;\n    max-width: 450px;\n    margin: 12% auto 0;\n    background-color: ",";\n  }\n\n  .login-title {\n    margin: 0 0 15px 0px;\n    font-size: 30px;\n    text-align: center;\n    white-space: nowrap;\n    img {\n      width: 50px;\n      display: inline-block;\n      vertical-align: middle;\n    }\n    p {\n      margin: 0;\n      display: inline-block;\n      vertical-align: middle;\n    }\n  }\n\n  .login-form {\n    padding-top: 15px;\n\n    .is-error {\n      label {\n        color: #58666e;\n      }\n    }\n  }\n\n  .cxd-Form-label {\n    text-align: right !important;\n  }\n\n  .code-input {\n    min-width: 10rem;\n  }\n\n  .code-img {\n    box-sizing: content-box;\n    height: 34px;\n    margin-left: 10px;\n    cursor: pointer;\n  }\n"],["\n  .login-wrapper {\n    position: relative;\n    max-width: 450px;\n    margin: 12% auto 0;\n    background-color: ",";\n  }\n\n  .login-title {\n    margin: 0 0 15px 0px;\n    font-size: 30px;\n    text-align: center;\n    white-space: nowrap;\n    img {\n      width: 50px;\n      display: inline-block;\n      vertical-align: middle;\n    }\n    p {\n      margin: 0;\n      display: inline-block;\n      vertical-align: middle;\n    }\n  }\n\n  .login-form {\n    padding-top: 15px;\n\n    .is-error {\n      label {\n        color: #58666e;\n      }\n    }\n  }\n\n  .cxd-Form-label {\n    text-align: right !important;\n  }\n\n  .code-input {\n    min-width: 10rem;\n  }\n\n  .code-img {\n    box-sizing: content-box;\n    height: 34px;\n    margin-left: 10px;\n    cursor: pointer;\n  }\n"])),"dark"===t?"rgba(0,0,0,0.4)":"rgba(255, 255, 255, 0.9)")},body:[{type:"container",body:{component:o.a}},{type:"wrapper",className:"login-wrapper b r",body:[{type:"html",html:'\n          <h6 class="login-title">\n            <img src="/static/images/logo_grey.png" />\n            <p>Ovine \u7ba1\u7406\u540e\u53f0\u7cfb\u7edf</p>\n          </h6>\n        '},{$preset:"forms.loginForm"}]}],preset:{apis:{login:{url:"POST ovapi/user/login",onError:function(){Object(i.b)(r.c.updateAuthLoginCode,"")},onSuccess:function(e){var t=e.code,a=e.msg,n=e.data;return 0===t?(Object(l.g)(r.d.auth,n),e.msg="\u60a8\u5df2\u767b\u5f55\u767b\u5f55\u672c\u7cfb\u7edf"):(Object(l.a)(r.d.auth),e.msg=a||"\u767b\u5f55\u5f02\u5e38"),{data:e}}}},forms:{loginForm:{type:"form",className:"login-form",title:"",mode:"horizontal",horizontal:{left:"col-sm-2",right:"col-sm-9"},wrapWithPanel:!1,autoFocus:!1,api:"$preset.apis.login",redirect:"/",controls:[{type:"text",name:"username",required:!0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",label:"\u7528\u6237\u540d",size:"full"},{type:"password",name:"password",label:"\u5bc6\u7801",required:!0,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",size:"full"},{type:"group",label:"\u9a8c\u8bc1\u7801",required:!0,gap:"sm",controls:[{type:"text",name:"code",required:!0,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",mode:"inline",className:"inline m-b-none",inputClassName:"code-input"},{type:"wrapper",labelClassName:"w-auto",component:function(){var e=Object(p.useState)(""),t=e[0],a=e[1],n=function(){a(Object(s.uuid)())};return Object(p.useEffect)((function(){Object(i.c)(r.c.updateAuthLoginCode,n)}),[]),d.a.createElement("img",{className:"code-img",alt:"\u9a8c\u8bc1\u7801",src:"".concat(c,"?").concat(t),onClick:n})},mode:"inline"}]},{type:"group",label:" ",gap:"sm",inputClassName:"justify-content-between align-items-center",controls:[{type:"checkbox",name:"remember",label:"\u8bb0\u4f4f\u767b\u5f55",value:!0,mode:"inline",className:"inline",inputClassName:"p-t-none"},{type:"button",level:"link",actionType:"link",link:"/register",inputClassName:"no-shadow",className:"float-right",label:"\u6ce8\u518c\u4f53\u9a8c\u8d26\u53f7",mode:"inline"}]},{type:"submit",size:"lg",level:"primary",label:"\u767b\u5f55",inputClassName:"w-full",horizontal:{left:"col-sm-2",right:"col-sm-9"}}]}}}}},294:function(e,t,a){"use strict";a.r(t);var n,i=a(5),l=a(115),r=a(0),o=a.n(r),s=a(3),p=a(22),d=a(25),c=a(4),m=a(34),g=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u=a(6).default.div.withConfig({displayName:"styled__StyledStart",componentId:"sc-139uuhv-0"})(n||(n=g(["\n  .action-edit {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    button {\n      width: 40px;\n      height: 40px;\n      min-width: unset;\n      border-radius: 100%;\n      padding: 0;\n    }\n  }\n"],["\n  .action-edit {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    button {\n      width: 40px;\n      height: 40px;\n      min-width: unset;\n      border-radius: 100%;\n      padding: 0;\n    }\n  }\n"]))),b=JSON.stringify({type:"page",title:"\u70b9\u51fb\u53f3\u4e0b\u89d2\u6309\u94ae\uff0c\u7f16\u8f91schema",body:{type:"alert",body:"\u53ea\u6709\u6b63\u786e\u7684JSON\u683c\u5f0f\uff0c\u624d\u80fd\u88ab\u6b63\u5e38\u6e32\u67d3\uff5e",level:"success"}},void 0,2),f=function(){var e=Object(c.d)(m.d.schemaEditor)||b;return{drawerVisible:!1,loading:!0,schemaInput:e,schema:JSON.parse(e)}};t.default=function(){var e=Object(d.a)(f),t=e[0],a=e[1],n=t.loading,r=t.schema,g=t.schemaInput,b=t.drawerVisible,y=s.a.theme.getName(),h=function(){a((function(e){e.drawerVisible=!e.drawerVisible}))};return o.a.createElement(u,null,r&&o.a.createElement(p.a,{schema:r}),o.a.createElement(i.Drawer,{closeOnOutside:!0,overlay:!1,theme:y,size:"md",onHide:h,show:b,position:"right"},o.a.createElement(i.Spinner,{overlay:!0,show:b&&n,size:"lg"}),o.a.createElement("a",{className:"p-md",href:"https://baidu.github.io/amis/zh-CN/components/page",target:"_blank"},o.a.createElement("i",{className:"fa fa-flag p-r-xs"}),o.a.createElement("span",null,"\u70b9\u51fb\u67e5\u770bAmis\u6e32\u67d3\u5668\u624b\u518c")),b&&o.a.createElement(l.Editor,{editorDidMount:function(){n&&a((function(e){e.loading=!1}))},onChange:function(e){var t="";try{t=JSON.parse(e)}catch(n){}a((function(a){a.schemaInput=e,t&&(a.schema=t,Object(c.g)(m.d.schemaEditor,e))}))},editorTheme:"dark"===y?"vs-dark":"vs",language:"json",value:g})),o.a.createElement("div",{className:"action-edit"},o.a.createElement(i.Button,{iconOnly:!0,theme:y,level:"danger",tooltipPlacement:"top",tooltip:"\u7f16\u8f91schema",onClick:h},o.a.createElement("i",{className:"fa fa-edit"}))))}},295:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return d}));var n=a(1),i=a(0),l=a.n(i),r=a(2),o=a(38),s=a(20),p=function(e){var t=Object(o.a)();if(Object(n.map)(s.a,(function(e){var a=e.url,n=e.actionDesc;-1===a.indexOf("GET ")&&(t[a]={actionDesc:n,api:a,label:n,auth:!0})})),!e)return t;var a=[];return Object(n.map)(t,(function(e,t){var n=e.label,i=e.actionDesc,l=e.api,o=e.auth,s=(n||i||"-").split(r.l),p=s[0],d=s[1],c=void 0===d?"":d;-1===l.indexOf("GET ")&&o&&a.push({value:t,label:"".concat(p," ").concat(c)})})),a},d={type:"page",body:{type:"lib-crud",api:"$preset.apis.list",filter:"$preset.forms.filter",filterTogglable:!0,perPageAvailable:[50,100,200],defaultParams:{size:50},perPageField:"size",pageField:"page",headerToolbar:["filter-toggler",{type:"columns-toggler",align:"left"},{type:"pagination",align:"left"}],footerToolbar:["statistics","switch-per-page","pagination"],columns:[{name:"id",label:"ID",type:"text"},{name:"createTime",label:"\u64cd\u4f5c\u65f6\u95f4",type:"datetime",width:150},{name:"actionAddr",label:"\u64cd\u4f5c\u8def\u5f84",type:"wrapper",component:function(e){var t=e.data.actionAddr,a=Object(n.get)(p(),t)||{},i=a.label,o=void 0===i?"":i,s=a.api,d=a.auth,c=void 0!==d&&d,m=o.split(r.l),g=m[0],u=m[1],b=void 0===u?"":u;return l.a.createElement("td",null,c&&g?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,g),l.a.createElement("span",{className:"p-l-sm"},b)):s||"-")}},{name:"handlerId",label:"\u64cd\u4f5c\u4ebaID",type:"lib-renderer",renderer:"sysUserInfoModal",userIdKey:"handlerId"},{name:"handlerName",label:"\u64cd\u4f5c\u4eba\u540d\u79f0",type:"text"},{name:"result",label:"\u64cd\u4f5c\u7ed3\u679c",type:"tpl",tpl:'\n        <span>\n          <%= data.result == 1 ? "\u6210\u529f" : "" %>\n          <% if(data.result != 1) { %>\n            <span>\u5931\u8d25\u539f\u56e0: <%= data.failDesc || \'\' %><span>\n          <% } %>\n        </span>\n      '},{type:"lib-blank",label:"\u64cd\u4f5c\u5185\u5bb9",body:{$preset:"actions.seeDetail"}}]},preset:{actions:{seeDetail:{label:"\u67e5\u770b\u8be6\u7ec6",type:"button",level:"link",actionType:"dialog",dialog:{title:"\u64cd\u4f5c\u8be6\u7ec6\u5185\u5bb9",closeOnEsc:!0,actions:[],body:{type:"form",mode:"normal",controls:[{name:"detail",inputClassName:"line-break-json",type:"static-json"}]}}}},forms:{filter:{controls:[{type:"datetime",name:"startTime",label:"\u5f00\u59cb\u65f6\u95f4",format:"YYYY-MM-DD HH:mm:ss"},{type:"datetime",name:"endTime",label:"\u7ed3\u675f\u65f6\u95f4",format:"YYYY-MM-DD HH:mm:ss"},{name:"actionAddr",type:"select",label:"\u64cd\u4f5c\u8def\u5f84",clearable:!0,searchable:!0,options:p(!0)},{type:"text",name:"handlerFilter",label:"\u64cd\u4f5c\u4eba",clearable:!0,placeholder:"\u8bf7\u8f93\u5165"},{type:"select",name:"status",label:"\u72b6\u6001",inline:!0,options:[{label:"\u8bf7\u9009\u62e9",value:""},{label:"\u6210\u529f",value:"1"},{label:"\u5931\u8d25",value:"2"}]},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]}}}}},296:function(e,t,a){"use strict";a.r(t),a.d(t,"schema",(function(){return l}));var n=a(34),i={title:"\u6210\u5458\u7ba1\u7406",size:"lg",actions:[],data:{id:""},body:{type:"lib-crud",api:"$preset.apis.listMember",filterTogglable:!1,affixHeader:!1,syncLocation:!1,forceReload:!0,perPageField:"size",pageField:"page",defaultParams:{page:1,size:10},headerToolbar:["bulkActions"],footerToolbar:[{type:"tpl",tpl:'\u5f53\u524d\u6709 ${total || "0"} \u6761\u6570\u636e\u3002',className:"v-middle"},"pagination"],filter:{controls:[{type:"text",name:"filter",label:"\u5173\u952e\u5b57",placeholder:"\u8bf7\u8f93\u5165"},{$ref:"sysRoleIdPicker"},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]},bulkActions:[{limits:"editLimit",label:"\u6279\u91cf\u53d8\u66f4\u89d2\u8272",icon:"fa fa-gavel pull-left",primary:!0,actionType:"dialog",dialog:{title:"\u6279\u91cf\u6210\u5458\u53d8\u66f4\u89d2\u8272",body:{type:"form",api:"$preset.apis.editMember",controls:[{type:"hidden",name:"ids"},{$ref:"sysRoleIdPicker",required:!0,multiple:!1,name:"newRoleId",label:"\u53d8\u66f4\u89d2\u8272"},{type:"tpl",label:"\u5df2\u9009\u6210\u5458",inputClassName:"container",tpl:'\n                  <div class="row">\n                    <% for(var i=0; i < data.items.length; i++) { var item=data.items[i]; %>\n                      <div class="col-sm-6 m-b-xs"><%= item.nickname %> (<%= item.roleName || \'\u65e0\u89d2\u8272\' %>)</div>\n                    <% } %>\n                  </div>\n                '},{type:"checkbox",name:"confirmAction",label:"\u786e\u8ba4\u64cd\u4f5c",option:"\u8bf7\u8c28\u614e\u64cd\u4f5c\uff0c\u5fc5\u987b\u786e\u8ba4\u540e\u624d\u53ef\u63d0\u4ea4\u3002"}]},actions:[{label:"\u53d6\u6d88",actionType:"close",type:"button"},{label:"\u786e\u8ba4",actionType:"confirm",type:"button",level:"primary",disabledOn:"!data.confirmAction"}]}}],columns:[{name:"id",label:"ID",type:"text"},{name:"username",label:"\u767b\u5f55\u8d26\u53f7",type:"text"},{name:"nickname",label:"\u540d\u79f0",type:"text",sortable:!0},{name:"avatar",label:"\u5934\u50cf",type:"tpl",tpl:'<img style="width:30px;" src="${avatar}" />',popOver:{body:'<div class="w-xxl"><img class="w-full" src="${avatar}"/></div>'}},{name:"limitName",label:"\u89d2\u8272\u540d",type:"tpl",tpl:'<%= !data.roleId ? "-" : data.roleName + " (" + data.roleId +")" %>'},{name:"desc",label:"\u7528\u6237\u63cf\u8ff0",type:"tpl",tpl:'<span class="text-ellipsis" title="${desc}">${desc}</span>',width:150},{name:"createTime",label:"\u521b\u5efa\u65f6\u95f4",type:"datetime",width:150},{name:"updateTime",label:"\u66f4\u65b0\u65f6\u95f4",type:"datetime",width:150}]}},l={type:"page",body:{type:"lib-crud",api:"$preset.apis.list",filter:{$preset:"forms.filter",limits:"".concat(n.b.global.sysRoleIdPicker)},filterTogglable:!0,perPageAvailable:[50,100,200],defaultParams:{size:50},perPageField:"size",pageField:"page",headerToolbar:["filter-toggler",{type:"columns-toggler",align:"left"},{type:"pagination",align:"left"},{$preset:"actions.members",align:"right"},{$preset:"actions.add",align:"right"}],footerToolbar:["statistics","switch-per-page","pagination"],columns:[{name:"id",label:"ID",width:80,type:"text"},{name:"name",label:"\u89d2\u8272\u540d",width:120,type:"text"},{name:"desc",label:"\u89d2\u8272\u63cf\u8ff0",type:"tpl",width:300,tpl:'<span class="text-ellipsis" title="${desc}">${desc}</span>'},{name:"createTime",label:"\u521b\u5efa\u65f6\u95f4",type:"datetime",width:150},{name:"updateTime",label:"\u66f4\u65b0\u65f6\u95f4",type:"datetime",width:150},{type:"operation",label:"\u64cd\u4f5c",width:92,limits:["editRole","editLimit","delRole"],limitsLogic:"or",buttons:["$preset.actions.edit","$preset.actions.editLimit","$preset.actions.del"]}]},definitions:{updateControls:{controls:[{type:"text",name:"name",label:"\u89d2\u8272\u540d",required:!0},{type:"text",name:"desc",label:"\u89d2\u8272\u63cf\u8ff0",required:!0}]}},preset:{actions:{add:{limits:"addRole",type:"button",label:"\u6dfb\u52a0",icon:"fa fa-plus pull-left",size:"sm",primary:!0,actionType:"dialog",dialog:"$preset.forms.add"},members:{limits:"listMember",type:"button",label:"\u6210\u5458\u7ba1\u7406",icon:"fa fa-users pull-left",size:"sm",primary:!0,actionType:"dialog",dialog:i},edit:{limits:"editRole",type:"button",icon:"fa fa-pencil",tooltip:"\u7f16\u8f91",actionType:"dialog",dialog:"$preset.forms.edit"},editLimit:{limits:"editLimit",type:"lib-limit-setting",saveConfirmText:"\u60a8\u6b63\u5728\u4fee\u6539\u7684\u89d2\u8272\u662f\u3010$name\u3011\uff0c\u63d0\u4ea4\u540e\u5c06\u4e0d\u53ef\u91cd\u7f6e\uff0c\u662f\u5426\u786e\u8ba4\u63d0\u4ea4\uff1f",button:{actionType:"drawer",iconOnly:!0,icon:"fa fa-unlock-alt",level:"link",label:"",tooltip:"\u7f16\u8f91\u6743\u9650"},modal:{postion:"right",resizable:!0,className:"hide-close-button"},initApi:"$preset.apis.getLimit",api:"$preset.apis.editLimit"},del:{limits:"delRole",type:"button",icon:"fa fa-times text-danger",actionType:"ajax",tooltip:"\u5220\u9664",confirmText:"\u60a8\u786e\u8ba4\u8981\u5220\u9664?",api:"$preset.apis.delRole",messages:{success:"\u5220\u9664\u6210\u529f",failed:"\u5220\u9664\u5931\u8d25"}}},forms:{filter:{controls:[{$ref:"sysRoleIdPicker"},{type:"submit",className:"m-l",label:"\u641c\u7d22"}]},add:{title:"\u65b0\u589e",body:{type:"form",name:"sample-edit-form",api:"$preset.apis.addRole",$ref:"updateControls"}},edit:{title:"\u7f16\u8f91",body:{type:"form",name:"sample-edit-form",api:"$preset.apis.editRole",$ref:"updateControls"}}}}}}}]);
//# sourceMappingURL=pages_common_263986.js.map