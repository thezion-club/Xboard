import{r as i,j as e,B as c,t as R}from"./index-_xd8OyP8.js";import{S as D,T,U as k}from"./user-nav-BBmBVa03.js";import{L as V,f as M,g as I}from"./sidelinks-DLs_k-Mk.js";import{u as L,a as P,g as z,b as B,c as H,d as U,e as E,f as G,D as v,B as N}from"./column-header-BLyyjrhJ.js";import{a as K,P as _}from"./react-icons.esm-rZq2pt7A.js";import{I as f}from"./input-d0vtE30O.js";import{D as q,e as O,a as Q,b as $,c as A,d as J,f as W,g as X}from"./button-DhrtVlOa.js";import{u as Y,F as Z,a as d,b as x,c as h,d as u,e as p}from"./form-DIzSOdtk.js";import{z as n,t as ee}from"./zod-x_8lkCGK.js";import{I as se}from"./iconify-Dsf6bxB2.js";import{Q as ae,R as te,I as re}from"./index-BycJudEO.js";import{T as le}from"./textarea-Bmd-AJpD.js";import{S as oe,a as ie,b as ne,c as ce,d as w}from"./select-Cqkdx-UJ.js";import{C as me}from"./confirm-dialog-CHz9pK2w.js";import{T as de}from"./trash-2-lI1I6nfk.js";import"./index-CcyXqhZ9.js";import"./index-BwSRHYe4.js";import"./index-CX6PQ3zO.js";import"./index-BlMNiBlp.js";import"./IconTicket-COhvkaJH.js";import"./tooltip-B58e4dA7.js";import"./index-kwEAqj-e.js";import"./arrow-up-9fLptvj0.js";import"./clipboard-YH5zrf5X.js";import"./index-CRh0M8qI.js";const xe=n.object({remarks:n.string().min(1,"Please enter a valid remarks."),match:n.array(n.string()),action:n.enum(["block","dns"]),action_value:n.string().optional()});function C({refetch:a,dialogTrigger:s,defaultValues:t={remarks:"",match:[],action:"block",action_value:""},type:o="add"}){const l=Y({resolver:ee(xe),defaultValues:t,mode:"onChange"}),[j,m]=i.useState(!1);return e.jsxs(q,{open:j,onOpenChange:m,children:[e.jsx(O,{asChild:!0,children:s||e.jsxs(c,{variant:"outline",size:"sm",className:"space-x-2",children:[e.jsx(se,{icon:"ion:add"})," ",e.jsx("div",{children:"添加路由"})]})}),e.jsxs(Q,{className:"sm:max-w-[425px]",children:[e.jsxs($,{children:[e.jsx(A,{children:o==="edit"?"编辑路由":"创建路由"}),e.jsx(J,{})]}),e.jsxs(Z,{...l,children:[e.jsx(d,{control:l.control,name:"remarks",render:({field:r})=>e.jsxs(x,{className:"flex-[2]",children:[e.jsx(h,{children:"备注"}),e.jsx("div",{className:"relative",children:e.jsx(u,{children:e.jsx(f,{type:"text",placeholder:"请输入备注",...r})})}),e.jsx(p,{})]})}),e.jsx(d,{control:l.control,name:"match",render:({field:r})=>e.jsxs(x,{className:"flex-[2]",children:[e.jsx(h,{children:"备注"}),e.jsx("div",{className:"relative",children:e.jsx(u,{children:e.jsx(le,{className:"min-h-[120px]",placeholder:`example.com
*.example.com`,value:r.value.join(`
`),onChange:g=>{r.onChange(g.target.value.split(`
`))}})})}),e.jsx(p,{})]})}),e.jsx(d,{control:l.control,name:"action",render:({field:r})=>e.jsxs(x,{children:[e.jsx(h,{children:"动作"}),e.jsx("div",{className:"relative",children:e.jsx(u,{children:e.jsxs(oe,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(ie,{children:e.jsx(ne,{placeholder:"请选择动作"})}),e.jsxs(ce,{children:[e.jsx(w,{value:"block",children:"禁止访问"}),e.jsx(w,{value:"dns",children:"指定DNS服务器进行解析"})]})]})})}),e.jsx(p,{})]})}),l.watch("action")==="dns"&&e.jsx(d,{control:l.control,name:"action_value",render:({field:r})=>e.jsxs(x,{children:[e.jsx(h,{children:"DNS服务器"}),e.jsx("div",{className:"relative",children:e.jsx(u,{children:e.jsx(f,{type:"text",placeholder:"请输入DNS服务器",...r})})})]})}),e.jsxs(W,{children:[e.jsx(X,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"取消"})}),e.jsx(c,{type:"submit",onClick:()=>{ae(l.getValues()).then(({data:r})=>{r&&(m(!1),a&&a(),l.reset())})},children:"提交"})]})]})]})]})}function he({table:a,refetch:s}){const t=a.getState().columnFilters.length>0;return e.jsx("div",{className:"flex items-center justify-between ",children:e.jsxs("div",{className:"flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2",children:[e.jsx(C,{refetch:s}),e.jsx(f,{placeholder:"输入任意关键词搜索",value:a.getColumn("remarks")?.getFilterValue()??"",onChange:o=>a.getColumn("remarks")?.setFilterValue(o.target.value),className:"h-9 w-[150px] lg:w-[250px]"}),t&&e.jsxs(c,{variant:"ghost",onClick:()=>a.resetColumnFilters(),className:"h-9 px-2 lg:px-3",children:["Reset",e.jsx(K,{className:"ml-2 h-4 w-4"})]})]})})}function ue({columns:a,data:s,refetch:t}){const[o,l]=i.useState({}),[j,m]=i.useState({}),[r,g]=i.useState([]),[S,b]=i.useState([]),F=L({data:s,columns:a,state:{sorting:S,columnVisibility:j,rowSelection:o,columnFilters:r},enableRowSelection:!0,onRowSelectionChange:l,onSortingChange:b,onColumnFiltersChange:g,onColumnVisibilityChange:m,getCoreRowModel:z(),getFilteredRowModel:B(),getPaginationRowModel:H(),getSortedRowModel:U(),getFacetedRowModel:E(),getFacetedUniqueValues:G(),initialState:{columnPinning:{right:["actions"]}}});return e.jsx(P,{table:F,toolbar:y=>e.jsx(he,{table:y,refetch:t})})}const je=a=>[{accessorKey:"id",header:({column:s})=>e.jsx(v,{column:s,title:"组ID"}),cell:({row:s})=>e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(N,{variant:"outline",children:s.getValue("id")})}),enableSorting:!0,enableHiding:!1},{accessorKey:"remarks",header:()=>e.jsx("div",{children:"备注"}),cell:({row:s})=>e.jsx("div",{className:"flex space-x-2",children:e.jsxs("span",{className:"max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]",children:["匹配 ",s.original.match?.length," 条规则"]})})},{accessorKey:"action",header:({column:s})=>e.jsx(v,{column:s,title:"动作"}),cell:({row:s})=>{const t={dns:"指定DNS服务器进行解析",block:"禁止访问"};return e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(N,{className:"max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]",children:t[s.getValue("action")]})})},enableSorting:!1,size:9e3},{id:"actions",header:()=>e.jsx("div",{className:"text-right",children:"操作"}),cell:({row:s})=>e.jsxs("div",{className:"flex items-center justify-end",children:[e.jsx(C,{defaultValues:s.original,refetch:a,type:"edit",dialogTrigger:e.jsxs(c,{variant:"ghost",size:"icon",className:"h-8 w-8 hover:bg-muted",children:[e.jsx(_,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"}),e.jsx("span",{className:"sr-only",children:"编辑"})]})}),e.jsx(me,{title:"确认删除",description:"此操作将永久删除该权限组，删除后无法恢复。确定要继续吗？",confirmText:"删除",variant:"destructive",onConfirm:async()=>{te({id:s.original.id}).then(({data:t})=>{t&&(R.success("删除成功"),a())})},children:e.jsxs(c,{variant:"ghost",size:"icon",className:"h-8 w-8 hover:bg-red-100 dark:hover:bg-red-900",children:[e.jsx(de,{className:"h-4 w-4 text-muted-foreground hover:text-red-600 dark:hover:text-red-400"}),e.jsx("span",{className:"sr-only",children:"删除"})]})})]})}];function Ge(){const[a,s]=i.useState([]);function t(){re().then(({data:o})=>{s(o)})}return i.useEffect(()=>{t()},[]),e.jsxs(V,{children:[e.jsxs(M,{children:[e.jsx(D,{}),e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(T,{}),e.jsx(k,{})]})]}),e.jsxs(I,{className:"flex flex-col",fixedHeight:!0,children:[e.jsx("div",{className:"mb-2 flex items-center justify-between space-y-2",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:"路由管理"}),e.jsx("p",{className:"mt-2 text-muted-foreground",children:"管理所有路由组，包括添加、删除、编辑等操作。"})]})}),e.jsx("div",{className:"-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0",children:e.jsx(ue,{data:a,columns:je(t),refetch:t})})]})]})}export{Ge as default};
