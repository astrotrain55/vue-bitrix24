import{d,e as p,o as f,f as u,n as b,g as k}from"./vue.esm-bundler-Bn_nRS7z.js";import{u as y}from"./useStyles-B1JkXNY2.js";const x=k("i",null,null,-1),w=[x],r={icons:["file-empty","file-txt","file-doc","file-xls","file-php","file-pdf","file-ppt","file-rar","file-zip","file-set","file-img","file-mov","file-folder","file-folder-shared","file-folder-shared-2","common-user","common-user-group","common-company","common-phone","common-notification","common-bitrix24","common-cloud","common-folder","common-info","service-alice","service-light-alice","service-fb-instagram","service-light-fb-instagram","service-instagram-fb","service-light-instagram-fb","service-instagram","service-light-instagram","service-twilio","service-light-twilio","service-callback","service-light-callback","service-livechat","service-light-livechat","service-liveid","service-light-liveid","service-ya","service-light-ya","service-ya-dialogs","service-light-ya-dialogs","service-ya-direct","service-light-ya-direct","service-1c","service-light-1c","service-google","service-light-google","service-google-ads","service-light-google-ads","service-twitter","service-light-twitter","service-email","service-light-email","service-messenger","service-light-messenger","service-estore","service-light-estore","service-imessage","service-light-imessage","service-webform","service-light-webform","service-sms","service-light-sms","service-call","service-light-call","service-call-up","service-light-call-up","service-infocall","service-light-infocall","service-site-b24","service-light-site-b24","service-site","service-light-site","service-calltracking","service-light-calltracking","service-telegram","service-light-telegram","service-bitrix24","service-light-bitrix24","service-groupme","service-light-groupme","service-crm","service-light-crm","service-lead","service-light-lead","service-deal","service-light-deal","service-campaign","service-light-campaign","service-chatbot","service-light-chatbot","service-common","service-light-common","service-g-assistant","service-light-g-assistant","service-microsoft","service-light-microsoft","service-office365","service-light-office365","service-skype","service-light-skype","service-webchat","service-light-webchat","service-directline","service-light-directline","service-envelope","service-light-envelope","service-fb-messenger","service-light-fb-messenger","service-fb-adds","service-light-fb-adds","service-outlook","service-light-outlook","service-vk","service-light-vk","service-vk-adds","service-light-vk-adds","service-vk-order","service-light-vk-order","service-fb","service-light-fb","service-fb-comments","service-light-fb-comments","service-slack","service-light-slack","service-viber","service-light-viber","service-kik","service-light-kik","service-apple","service-light-apple","service-universal","service-light-universal","service-organic","service-light-organic","service-telephonybot","service-light-telephonybot","service-whatsapp","service-light-whatsapp","service-wechat","service-light-wechat","service-avito","service-light-avito","service-mailru","service-light-mailru","service-sberbank","service-light-sberbank","service-green-sberbank","service-ok","service-light-ok","service-ya-toloka","service-rest-contact-center","service-light-rest-contact-center","service-audio-infocall","service-light-audio-infocall","service-olx","service-light-olx","service-zoom","service-light-zoom","service-blue-zoom","service-livechat-24","service-widget","service-light-widget","service-wheel","service-light-wheel","service-play","service-light-play","service-other","service-light-other","service-cart","service-light-cart","service-add","service-light-add","service-arrows","service-light-arrows","service-call-in","service-light-call-in","service-call-out","service-light-call-out"]},t=d({__name:"BxIcon",props:{icon:{type:String,default:"file-empty",validator(e){return r.icons.includes(e)}}},setup(e){y();const i=e,l=p(()=>({[`ui-icon-${i.icon}`]:r.icons.includes(i.icon)}));return(B,I)=>(f(),u("div",{class:b(["ui-icon",l.value])},w,2))}});t.__docgenInfo={exportName:"default",displayName:"BxIcon",description:"",tags:{},props:[{name:"icon",type:{name:"PropIcons"},defaultValue:{func:!1,value:"'file-empty'"}}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxIcon.vue"]};const o={icon:"file-empty"},V={title:"bx-icon",component:t,args:{icon:o.icon},argTypes:{icon:{options:r.icons,defaultValue:o.icon,control:{type:"select"}}}},s={render:e=>({template:'<bx-icon v-bind="args" v-on="args">{{ args.default }}</bx-icon>',data:()=>({args:e}),provide:{$BX24:null},components:{BxIcon:t}})},_=(e,i)=>({render:l=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-icon v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-icon>
      </div>
    `,data:()=>({args:l,propName:e,propList:i}),provide:{$BX24:null},components:{BxIcon:t}}),argTypes:{[e]:{table:{disable:!0}}}}),c=_("icon",r.icons);var a,v,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-icon v-bind="args" v-on="args">{{ args.default }}</bx-icon>',
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxIcon
    }
  })
}`,...(n=(v=s.parameters)==null?void 0:v.docs)==null?void 0:n.source}}};var g,m,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"Story('icon', propsValues.icons)",...(h=(m=c.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const $=["Default","Icons"];export{s as Default,c as Icons,$ as __namedExportsOrder,V as default};