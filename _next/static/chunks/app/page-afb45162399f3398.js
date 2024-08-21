(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6479:function(e,r,t){Promise.resolve().then(t.bind(t,8306)),Promise.resolve().then(t.bind(t,9929))},8306:function(e,r,t){"use strict";t.d(r,{default:function(){return B}});var s=t(9533),a=t(7922),n=t(2659);let o=()=>(0,n.useQuery)({queryKey:["index"],queryFn:()=>a.Z.get("https://ai-weekly-report-server.ygsgdbd.workers.dev")}),i=()=>(0,n.useMutation)({mutationFn:e=>a.Z.post("https://ai-weekly-report-server.ygsgdbd.workers.dev/api/v1/openai/batch",e)});var d=t(8576),l=t.n(d),c=t(3176),u=t.n(c),f=t(1229),g=t(6201),m=t(1142),p=t(287),x=t(2911),h=t(7494),b=t(2611);function v(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,b.m6)((0,h.W)(r))}let j=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),y=f.forwardRef((e,r)=>{let{className:t,variant:a,size:n,asChild:o=!1,...i}=e,d=o?p.g7:"button";return(0,s.jsx)(d,{className:v(j({variant:a,size:n,className:t})),ref:r,...i})});y.displayName="Button";let N=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("textarea",{className:v("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...a})});function w(){let[,e]=(0,g.Z)(),r=(0,f.useMemo)(()=>{let e=u()().format("YYYY-MM-DD"),r=u()().startOf("week").format("YYYY-MM-DD");return'git log --since="'.concat(r,'" --until="').concat(e,'" --pretty=format:"%h,%an,%ae,%ad,%s" --date=iso > log.csv')},[]);return(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(N,{className:v(l().className),readOnly:!0,value:r}),(0,s.jsx)(y,{onClick:()=>{e(r),m.Am.success("命令复制成功")},children:"复制"})]})}N.displayName="Textarea";var k=t(2117),C=t(8210),R=t(7013),Y=t(8821);let M=(0,x.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Z=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(Y.f,{className:v(M(),t),ref:r,...a})});function F(){let[e,r]=(0,f.useState)(),t=i(),[a,n]=(0,R.Z)("x-system-msg","这是一个虚拟币交易所项目，请根据本周的 Git 提交日志生成一份简短的周报。周报应按以下顺序包括内容：\n1. 主要完成的工作和功能更新；\n2. 修复的 Bug 及其相关背景；\n3. 进行的优化或改进。\n\n请确保周报内容控制在 10 条以内的普通文本，按上述顺序排列。如果内容过多，请缩减优化文案；\n请直接按序列号输出文本，不要使用 Markdown 格式，行与行之间不要空行，也不要显示提交哈希和日期。"),[o,d]=(0,f.useState)(),[,l]=(0,g.Z)();return(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(Z,{children:"提示词"}),(0,s.jsx)(N,{className:"min-h-32",disabled:t.isLoading,onChange:e=>n(e.target.value),value:a}),(0,s.jsxs)("label",{className:"flex cursor-pointer gap-2 rounded-md border border-input p-3",children:[(0,s.jsx)(k.Z,{}),(0,s.jsx)("input",{accept:"text/csv",className:"file:hidden",onChange:e=>{var t;r(null===(t=e.target.files)||void 0===t?void 0:t[0])},type:"file"})]})]}),e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y,{className:"flex gap-2",disabled:t.isLoading,onClick:async()=>{let r=await (null==e?void 0:e.text());r&&t.mutate({inputs:["".concat(a,"\r\n ").concat(r)],openAI:{}},{onSuccess(e){d(e.data.data)}})},children:[t.isLoading&&(0,s.jsx)(C.Z,{className:v("size-4 animate-spin")}),"上传并返回结果"]}),o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{className:"min-h-32",value:o}),(0,s.jsx)(y,{onClick:()=>{l(o),m.Am.success("周报复制成功")},children:"复制结果"})]})]})]})}Z.displayName=Y.f.displayName;let _=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:v("rounded-lg border bg-card text-card-foreground shadow-sm",t),ref:r,...a})});_.displayName="Card";let D=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:v("flex flex-col space-y-1.5 p-6",t),ref:r,...a})});D.displayName="CardHeader";let O=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{className:v("text-2xl font-semibold leading-none tracking-tight",t),ref:r,...a})});O.displayName="CardTitle";let S=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{className:v("text-sm text-muted-foreground",t),ref:r,...a})});S.displayName="CardDescription";let A=f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:v("p-6 pt-0",t),ref:r,...a})});function B(){return o(),(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsxs)(_,{children:[(0,s.jsxs)(D,{children:[(0,s.jsx)(O,{children:"导出 Git 日志 CSV 文件"}),(0,s.jsxs)(S,{children:["项目根目录下运行命令导出",(0,s.jsx)("span",{className:"text-red-500",children:"本周"}),"周报"]})]}),(0,s.jsx)(A,{className:"grid gap-4",children:(0,s.jsx)(w,{})})]}),(0,s.jsxs)(_,{children:[(0,s.jsxs)(D,{children:[(0,s.jsx)(O,{children:"Git 日志生成周报"}),(0,s.jsx)(S,{children:"上传 CSV 日志文件并点击生成按钮"})]}),(0,s.jsx)(A,{className:"grid gap-4",children:(0,s.jsx)(F,{})})]})]})}A.displayName="CardContent",f.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:v("flex items-center p-6 pt-0",t),ref:r,...a})}).displayName="CardFooter"},9929:function(e,r,t){"use strict";t.d(r,{Toaster:function(){return o}});var s=t(9533),a=t(9862),n=t(1142);let o=e=>{let{...r}=e,{theme:t="system"}=(0,a.F)();return(0,s.jsx)(n.x7,{className:"toaster group",theme:t,toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...r})}}},function(e){e.O(0,[195,748,659,815,170,842,744],function(){return e(e.s=6479)}),_N_E=e.O()}]);