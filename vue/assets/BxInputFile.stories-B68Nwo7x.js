import{a as B}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as V}from"./Story-YA5z4d3s.js";import{d as N,r as T,e as D,o,f as i,n as s,g as r,t as c,j as $,F as z,s as G}from"./vue.esm-bundler-BFuqo-Wr.js";import{u as K}from"./useStyles-BLstBFg6.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const f={types:["drop","button","link"]},n={placeholder:"",type:f.types[0],multiple:!1,disabled:!1};function L(a){const p={GB:1073741824,MB:1048576,KB:1024},l=t=>[(a/p[t]).toFixed(2),t].join(" ");let d;return a>=p.GB?d=l("GB"):a>=p.MB?d=l("MB"):a>=p.KB?d=l("KB"):d=[a,"B"].join(" "),d}const O=["title"],U=["multiple","disabled"],W=["title"],q=["multiple","disabled"],w=["title"],A={class:"ui-ctl-label-text"},H=r("small",null,"Перетащить с помощью drag'n'drop",-1),J=["multiple","disabled"],Q=["onClick"],C=N({__name:"BxInputFile",props:{placeholder:{type:String,default:n.placeholder,validator(a){return typeof a=="string"}},type:{type:String,default:n.type,validator(a){return f.types.includes(a)}},multiple:{type:Boolean,default:n.multiple},disabled:{type:Boolean,default:n.disabled}},emits:["change","delete"],setup(a,{emit:p}){K();const l=a,d=p,t=T({files:[],defaultPlaceholder:"Загрузить файл или картинку"}),u=D(()=>l.disabled?"":t.files.length?t.files.map(e=>e.name).join(`
`):l.multiple?"Файлы не выбраны.":"Файл не выбран.");function j(e){return`${e.name} (${L(e.size)})`}function g(e){const b=e.target.files;t.files.push(...b),d("change",[...t.files])}function M(e){const[y]=t.files.splice(e,1);d("delete",[...t.files],y)}return(e,y)=>(o(),i("div",{class:s(e.$style["drag-n-drop"])},[l.type==="button"?(o(),i("label",{key:0,class:s(["ui-ctl ui-ctl-file-btn",{[e.$style["drag-n-drop--disabled"]]:l.disabled,[e.$style["drag-n-drop--btn"]]:!0}]),title:u.value},[r("input",{class:"ui-ctl-element",type:"file",multiple:l.multiple,disabled:l.disabled,onChange:g},null,40,U),r("div",{class:s(["ui-ctl-label-text",e.$style["drag-n-drop__text"]])},c(l.placeholder||t.defaultPlaceholder),3)],10,O)):l.type==="link"?(o(),i("label",{key:1,class:s(["ui-ctl ui-ctl-file-link",{[e.$style["drag-n-drop--disabled"]]:l.disabled,[e.$style["drag-n-drop--link"]]:!0}]),title:u.value},[r("input",{class:"ui-ctl-element",type:"file",multiple:l.multiple,disabled:l.disabled,onChange:g},null,40,q),r("div",{class:s(["ui-ctl-label-text",e.$style["drag-n-drop__text"]])},c(l.placeholder||t.defaultPlaceholder),3)],10,W)):l.type==="drop"?(o(),i("label",{key:2,class:s(["ui-ctl ui-ctl-file-drop",{[e.$style["drag-n-drop--disabled"]]:l.disabled,[e.$style["drag-n-drop--drop"]]:!0}]),title:u.value},[r("div",A,[r("span",null,c(l.placeholder||t.defaultPlaceholder),1),H]),r("input",{class:"ui-ctl-element",type:"file",multiple:l.multiple,disabled:l.disabled,onChange:g},null,40,J)],10,w)):$("",!0),t.files.length?(o(),i("ul",{key:3,class:s(e.$style["drag-n-drop__list"])},[(o(!0),i(z,null,G(t.files,(b,v)=>(o(),i("li",{key:v,class:s(e.$style["drag-n-drop__file"])},[r("span",{class:s(e.$style["drag-n-drop__name"])},c(j(b)),3),r("span",{class:s(e.$style["drag-n-drop__delete"]),onClick:Z=>M(v)},null,10,Q)],2))),128))],2)):$("",!0)],2))}}),R={"drag-n-drop":"_drag-n-drop_5glar_2","drag-n-drop--disabled":"_drag-n-drop--disabled_5glar_2","drag-n-drop--drop":"_drag-n-drop--drop_5glar_2","drag-n-drop--link":"_drag-n-drop--link_5glar_3","drag-n-drop__text":"_drag-n-drop__text_5glar_3","drag-n-drop--btn":"_drag-n-drop--btn_5glar_4","drag-n-drop__input":"_drag-n-drop__input_5glar_8","drag-n-drop__list":"_drag-n-drop__list_5glar_25","drag-n-drop__file":"_drag-n-drop__file_5glar_31","drag-n-drop__name":"_drag-n-drop__name_5glar_36","drag-n-drop__delete":"_drag-n-drop__delete_5glar_44"},X={$style:R},h=E(C,[["__cssModules",X]]);C.__docgenInfo={exportName:"default",displayName:"BxInputFile",description:"",tags:{},props:[{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.placeholder"}},{name:"type",type:{name:"PropTypeInputFile"},defaultValue:{func:!1,value:"defaultProps.type"}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.multiple"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.disabled"}}],events:[{name:"change"},{name:"delete"}],sourceFiles:["/home/valentin/WebstormProjects/ui-bitrix24/vue/src/components/BxInputFile.vue"]};const Y={change:B("change"),delete:B("delete")},de={title:"forms/bx-input-file",component:h,args:{...Y,placeholder:n.placeholder,type:n.type,multiple:n.multiple,disabled:n.disabled},argTypes:{placeholder:{control:{type:"text"}},type:{options:f.types,control:{type:"inline-radio"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},_=V(h),m=V(h,"type",f.types);var k,P,F;_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:"Story(BxInputFile)",...(F=(P=_.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var S,x,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"Story<TypesPropsList>(BxInputFile, 'type', propsValues.types)",...(I=(x=m.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const ne=["Default","Types"];export{_ as Default,m as Types,ne as __namedExportsOrder,de as default};
