import{r as u,j as e,B as b,t as f}from"./index-_xd8OyP8.js";import{S as p}from"./separator-lX8UNwTG.js";import{z as i,t as v}from"./zod-x_8lkCGK.js";import{u as g,F as w,a as o,b as r,c,f as l,d as t,e as a}from"./form-DIzSOdtk.js";import{I as d}from"./input-d0vtE30O.js";import{S as m}from"./switch-w5WyeRwk.js";import{e as C,s as y}from"./index-BycJudEO.js";import{u as N}from"./useQuery-mr7Ep0hT.js";import"./index-CX6PQ3zO.js";import"./index-BwSRHYe4.js";import"./index-CRh0M8qI.js";import"./index-BlMNiBlp.js";import"./clipboard-YH5zrf5X.js";const k=i.object({invite_force:i.boolean().default(!1),invite_commission:i.coerce.string().default("0"),invite_gen_limit:i.coerce.string().default("0"),invite_never_expire:i.boolean().default(!1),commission_first_time_enable:i.boolean().default(!1),commission_auto_check_enable:i.boolean().default(!1),commission_withdraw_limit:i.coerce.string().default("0"),commission_withdraw_method:i.array(i.string()).default(["支付宝","USDT","Paypal"]),withdraw_close_enable:i.boolean().default(!1),commission_distribution_enable:i.boolean().default(!1),commission_distribution_l1:i.coerce.number().default(0),commission_distribution_l2:i.coerce.number().default(0),commission_distribution_l3:i.coerce.number().default(0)}),F={invite_force:!1,invite_commission:"0",invite_gen_limit:"0",invite_never_expire:!1,commission_first_time_enable:!1,commission_auto_check_enable:!1,commission_withdraw_limit:"0",commission_withdraw_method:["支付宝","USDT","Paypal"],withdraw_close_enable:!1,commission_distribution_enable:!1,commission_distribution_l1:0,commission_distribution_l2:0,commission_distribution_l3:0};function S(){const{data:x}=N({queryKey:["settings","invite"],queryFn:()=>C("invite")}),n=g({resolver:v(k),defaultValues:F,mode:"onChange"});u.useEffect(()=>{if(x?.data?.invite){const s=x?.data?.invite;Object.entries(s).forEach(([h,j])=>{typeof j=="number"?n.setValue(h,String(j)):n.setValue(h,j)})}},[x,n]);function _(s){y(s).then(h=>{h.data&&f.success("更新成功")})}return e.jsx(w,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(_),className:"space-y-8",children:[e.jsx(o,{control:n.control,name:"invite_force",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"开启强制邀请"}),e.jsx(l,{children:"开启后只有被邀请的用户才可以进行注册。"})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:n.control,name:"invite_commission",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"邀请佣金百分比"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入",...s})}),e.jsx(l,{children:"默认全局的佣金分配比例，你可以在用户管理单独配置单个比例。"}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"invite_gen_limit",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"用户可创建邀请码上限"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入",...s})}),e.jsx(l,{children:"用户可创建邀请码上限"}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"invite_never_expire",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"邀请码永不失效"}),e.jsx(l,{children:"开启后邀请码被使用后将不会失效，否则使用过后即失效。"})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:n.control,name:"commission_first_time_enable",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"佣金仅首次发放"}),e.jsx(l,{children:"开启后被邀请人首次支付时才会产生佣金，可以在用户管理对用户进行单独配置。"})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:n.control,name:"commission_auto_check_enable",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"佣金自动确认"}),e.jsx(l,{children:"开启后佣金将会在订单完成3日后自动进行确认。"})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:n.control,name:"commission_withdraw_limit",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"提现单申请门槛(元)"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入",...s})}),e.jsx(l,{children:"小于门槛金额的提现单将不会被提交。"}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"commission_withdraw_method",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"提现方式"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入",...s})}),e.jsx(l,{children:"可以支持的提现方式。"}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"withdraw_close_enable",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"关闭提现"}),e.jsx(l,{children:"关闭后将禁止用户申请提现，且邀请佣金将会直接进入用户余额。"})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:n.control,name:"commission_distribution_enable",render:({field:s})=>e.jsxs(r,{children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(c,{className:"text-base",children:"三级分销"}),e.jsxs(l,{children:["开启后将佣金将按照设置的3成比例进行分成，三成比例合计请不要",">","100%。"]})]}),e.jsx(t,{children:e.jsx(m,{checked:s.value,onCheckedChange:s.onChange})})]})}),n.watch("commission_distribution_enable")&&e.jsxs(e.Fragment,{children:[e.jsx(o,{control:n.control,name:"commission_distribution_l1",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"一级邀请人比例"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入比例如：50",...s})}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"commission_distribution_l2",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"二级邀请人比例"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入比例如：50",...s})}),e.jsx(a,{})]})}),e.jsx(o,{control:n.control,name:"commission_distribution_l3",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"三级邀请人比例"}),e.jsx(t,{children:e.jsx(d,{placeholder:"请输入比例如：50",...s})}),e.jsx(a,{})]})})]}),e.jsx(b,{type:"submit",children:"保存设置"})]})})}function O(){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"邀请&佣金设置"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"邀请注册、佣金相关设置。"})]}),e.jsx(p,{}),e.jsx(S,{})]})}export{O as default};
