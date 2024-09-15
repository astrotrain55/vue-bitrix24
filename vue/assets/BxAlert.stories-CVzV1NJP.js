import{a as N}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u}from"./Story-YA5z4d3s.js";import{d as _,e as $,o as p,f as d,g as T,t as I,j as f,k as L,l as D,n as j}from"./vue.esm-bundler-Dqph7xbu.js";import{u as w}from"./useStyles-teerGNlv.js";import{g as E}from"./getClassName-BzMnpjeD.js";import"./v4-CQkTLCs1.js";const e={sizes:["md","xs"],colors:["default","primary","success","warning","danger"],icons:["","warning","danger","info"]},o={title:"Внимание!",size:e.sizes[0],color:e.colors[0],icon:e.icons[0],center:!1,inline:!1,closing:!1},F={class:"ui-alert-message"},O={key:0},r=_({__name:"BxAlert",props:{title:{type:String,default:o.title,validator(t){return typeof t=="string"}},size:{type:String,default:o.size,validator(t){return e.sizes.includes(t)}},color:{type:String,default:o.color,validator(t){return e.colors.includes(t)}},icon:{type:String,default:o.icon,validator(t){return e.icons.includes(t)}},center:{type:Boolean,default:o.center},inline:{type:Boolean,default:o.inline},closing:{type:Boolean,default:o.closing}},emits:["close"],setup(t){w();const s=t,k=$(()=>E({[`ui-alert-${s.size}`]:e.sizes.includes(s.size),[`ui-alert-${s.color}`]:e.colors.includes(s.color),[`ui-alert-icon-${s.icon}`]:!!s.icon&&e.icons.includes(s.icon),"ui-alert-text-center":s.center,"ui-alert-inline":s.inline}));return(m,a)=>(p(),d("div",{class:j(["ui-alert",k.value])},[T("span",F,[s.title?(p(),d("strong",O,I(s.title),1)):f("",!0),a[1]||(a[1]=L()),D(m.$slots,"default")]),t.closing?(p(),d("span",{key:0,class:"ui-alert-close-btn",onClick:a[0]||(a[0]=h=>m.$emit("close"))})):f("",!0)],2))}});r.__docgenInfo={exportName:"default",displayName:"BxAlert",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.title"}},{name:"size",type:{name:"PropSize"},defaultValue:{func:!1,value:"defaultProps.size"}},{name:"color",type:{name:"PropColor"},defaultValue:{func:!1,value:"defaultProps.color"}},{name:"icon",type:{name:"PropIcon"},defaultValue:{func:!1,value:"defaultProps.icon"}},{name:"center",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.center"}},{name:"inline",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.inline"}},{name:"closing",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.closing"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/ui-bitrix24/vue/src/components/BxAlert.vue"]};const W={close:N("close")},Q={title:"bx-alert",component:r,args:{default:"",...W,title:o.title,size:o.size,color:o.color,icon:o.icon,center:o.center,inline:o.inline,closing:o.closing},argTypes:{default:{control:{type:"text"}},title:{control:{type:"text"}},size:{options:e.sizes,control:{type:"inline-radio"}},color:{options:e.colors,control:{type:"inline-radio"}},icon:{options:e.icons,control:{type:"inline-radio"}},center:{control:{type:"boolean"}},inline:{control:{type:"boolean"}},closing:{control:{type:"boolean"}}}},l=u(r),n=u(r,"size",e.sizes),i=u(r,"color",e.colors),c=u(r,"icon",e.icons);var y,g,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"Story(BxAlert)",...(z=(g=l.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var S,v,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'size', propsValues.sizes)",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,B,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'color', propsValues.colors)",...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var b,C,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'icon', propsValues.icons)",...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const R=["Default","Sizes","Colors","Icons"];export{i as Colors,l as Default,c as Icons,n as Sizes,R as __namedExportsOrder,Q as default};
