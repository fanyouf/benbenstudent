(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["taskresult"],{"0104":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),s=Object(n["I"])("data-v-75bc826d");Object(n["r"])("data-v-75bc826d");var a={class:"tasks"},u=Object(n["e"])("结果"),i=Object(n["f"])("div",null,[Object(n["f"])("p",null,"回答: 正确"),Object(n["f"])("p",null,"回答: 错误，正确答案是：XX"),Object(n["e"])(" 解析：xxxxxxxx ")],-1);Object(n["p"])();var l=s((function(t,e,c,l,b,o){var r=Object(n["w"])("box-title"),j=Object(n["w"])("tsc");return Object(n["o"])(),Object(n["d"])("div",a,[Object(n["f"])(r,null,{default:s((function(){return[u]})),_:1}),(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(t.taskes,(function(t){return Object(n["o"])(),Object(n["d"])("div",{class:"task",key:t},[Object(n["f"])(j,{stc:t},null,8,["stc"]),i])})),128))])})),b=c("bc3a"),o=c.n(b),r=c("e5b9"),j=Object(n["g"])({name:"Task",props:{taskes:{type:Array,default:function(){return[{id:1,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:2,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:3,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:4,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"}]}}},components:{tsc:r["a"]},setup:function(){var t=Object(n["t"])({});return o.a.get("https://api.apiopen.top/singlePoetry").then((function(e){t.value=e.data})),{list:t}}});c("573c");j.render=l,j.__scopeId="data-v-75bc826d";e["default"]=j},"2fa3":function(t,e,c){"use strict";c("687e")},"573c":function(t,e,c){"use strict";c("a427")},"687e":function(t,e,c){},a427:function(t,e,c){},e5b9:function(t,e,c){"use strict";var n=c("7a23"),s=Object(n["I"])("data-v-2547087f");Object(n["r"])("data-v-2547087f");var a={class:"ans radio-box"};Object(n["p"])();var u=s((function(t,e,c,s,u,i){return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("div",{class:"subject",innerHTML:t.stc.subject},null,8,["innerHTML"]),Object(n["f"])("ul",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(t.list,(function(c){return Object(n["o"])(),Object(n["d"])("li",{key:c,class:"item"},[Object(n["f"])("div",a,[Object(n["G"])(Object(n["f"])("input",{type:"radio",id:"o"+t.stc.id+c,value:c,name:"o"+t.stc.id,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.yourAns=e})},null,8,["id","value","name"]),[[n["C"],t.yourAns]]),Object(n["f"])("label",{for:"o"+t.stc.id+c},null,8,["for"]),Object(n["e"])(" "+Object(n["z"])(c),1)]),Object(n["f"])("div",{onClick:function(e){return t.hSelect(c)},class:"content",innerHTML:t.stc[c]},null,8,["onClick","innerHTML"])])})),128))])])})),i=Object(n["g"])({name:"Task",props:{stc:{type:Object}},data:function(){return{list:["A","B","C","D"],yourAns:""}},methods:{hSelect:function(t){console.log(t),this.yourAns=t}}});c("2fa3");i.render=u,i.__scopeId="data-v-2547087f";e["a"]=i}}]);
//# sourceMappingURL=taskresult.977d9080.js.map