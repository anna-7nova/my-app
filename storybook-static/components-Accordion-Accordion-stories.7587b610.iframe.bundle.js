/*! For license information please see components-Accordion-Accordion-stories.7587b610.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[851],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CollapsedAccordion:()=>CollapsedAccordion,DefaultAccordion:()=>DefaultAccordion,OpenedAccordion:()=>OpenedAccordion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Accordion(props){return console.log("accordion is rendering"),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(AccordionTitle,{title:props.titleValue,onChange:props.onChange}),!0==!props.collapsed&&(0,jsx_runtime.jsx)(AccordionBody,{items:props.items,onClick:props.onClick})]})}function AccordionTitle(props){return console.log("title of accordion is rendered"),(0,jsx_runtime.jsxs)("h4",{onClick:()=>props.onChange(),children:["--",props.title,"--"]})}function AccordionBody(props){return console.log("body of accordion is rendered"),(0,jsx_runtime.jsx)("ul",{children:props.items.map(((el,index)=>(0,jsx_runtime.jsx)("li",{onClick:()=>props.onClick(el.value),children:el.title},index)))})}const Accordion_Accordion=Accordion;Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n    value: string\r\n    title: string\r\n}",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]}}],raw:"ItemsPropsType[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Accordion_stories={component:Accordion_Accordion},onChangeHandler=(0,dist.XI)("it should be collapsed"),onClickHandler=(0,dist.XI)("items was clicked"),CollapsedAccordion=()=>(0,jsx_runtime.jsx)(Accordion_Accordion,{titleValue:"Collapsed Menu",collapsed:!0,onChange:onChangeHandler,items:[],onClick:()=>{}}),OpenedAccordion=()=>(0,jsx_runtime.jsx)(Accordion_Accordion,{titleValue:"Opened Menu",collapsed:!1,onChange:onChangeHandler,onClick:value=>{alert(`was pushed ${value} title`)},items:[{value:"1",title:"Anna"},{value:"2",title:"Anton"},{value:"3",title:"Victor"}]}),DefaultAccordion=()=>{const[value,setValue]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(Accordion_Accordion,{titleValue:"Menu",collapsed:value,onChange:()=>setValue(!value),onClick:onClickHandler,items:[{value:"1",title:"Anna"},{value:"2",title:"Anton"},{value:"3",title:"Victor"}]})},__namedExportsOrder=["CollapsedAccordion","OpenedAccordion","DefaultAccordion"];CollapsedAccordion.parameters={...CollapsedAccordion.parameters,docs:{...CollapsedAccordion.parameters?.docs,source:{originalSource:'() => {\n  return <Accordion titleValue="Collapsed Menu" collapsed={true} onChange={onChangeHandler} items={[]} onClick={() => {}} />;\n}',...CollapsedAccordion.parameters?.docs?.source}}},OpenedAccordion.parameters={...OpenedAccordion.parameters,docs:{...OpenedAccordion.parameters?.docs,source:{originalSource:'() => {\n  return <Accordion titleValue="Opened Menu" collapsed={false} onChange={onChangeHandler} onClick={value => {\n    alert(`was pushed ${value} title`);\n  }} items={[{\n    value: "1",\n    title: "Anna"\n  }, {\n    value: "2",\n    title: "Anton"\n  }, {\n    value: "3",\n    title: "Victor"\n  }]} />;\n}',...OpenedAccordion.parameters?.docs?.source}}},DefaultAccordion.parameters={...DefaultAccordion.parameters,docs:{...DefaultAccordion.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<boolean>(false);\n  return <Accordion titleValue="Menu" collapsed={value} onChange={() => setValue(!value)} onClick={onClickHandler} items={[{\n    value: "1",\n    title: "Anna"\n  }, {\n    value: "2",\n    title: "Anton"\n  }, {\n    value: "3",\n    title: "Victor"\n  }]} />\n  //onChange не работает - пока не разобралась почему, работал только через onClick\n  ;\n}',...DefaultAccordion.parameters?.docs?.source}}}}}]);