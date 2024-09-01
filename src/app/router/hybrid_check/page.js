"use client"
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {Select, SelectItem} from "@nextui-org/select";
import { _allLines } from '../../../../context/_lines';
import {useSelector,useDispatch} from "react-redux"
import Link from "next/link"
let _lines=_allLines;
let _lines_v0=_allLines;
export default function page() {
const _data=useSelector((state) => {return state._changes_function});
const _dispatch=useDispatch()
return (
<>
<div className='container mt-10'>

<div className="row">
<div className='mb-3 col-lg-6 col-md-12'>
<Breadcrumbs className='text-[16px]' underline="always" >
<BreadcrumbItem href="/"><p className="text-md">Home</p></BreadcrumbItem>
<BreadcrumbItem><p className="text-green-300 text-md">Hybrid Check</p></BreadcrumbItem>
</Breadcrumbs>
</div>


<div className='flex flex-row justify-start mb-3 col-lg-6 col-md-12 t_s743752'>

<div className='flex gap-1'>
<p>Line that works</p>
<p className='text-foreground/50'>(<span className='text-green-400'> {_lines.filter(x=>{return x._isActive==true}).length} </span>/ 10 )</p>
</div>
<div className='ml-2 text-foreground/50'>(Week<span className='ml-2 text-green-400'>36</span>)</div>
<div class="_circle_live"></div>
</div>



</div>


<div className='flex flex-row justify-start mt-3 sm:justify-end'>
<_lineSelect/>


</div>

<div className='!my-8 row justify-center'>
<_Lines_Render/>
</div>







</div>
</>
)
}


const _lineSelect=(_data)=>{
const [value, setValue] = React.useState("");
const _dispatch=useDispatch()
const handleSelectionChange = (e) => {
if(e.target.value=="0"){
_lines_v0=_lines;
_dispatch({type:"_change_state_v0"})
}else if(e.target.value=="1"){
_lines_v0=_lines;
_lines_v0=_lines_v0.filter((x)=>{return x._isActive==true});
_dispatch({type:"_change_state_v0"})
}else{
_lines_v0=_lines;
_lines_v0=_lines_v0.filter((x)=>{return x._isActive==false});
_dispatch({type:"_change_state_v0"})
}
return setValue(e.target.value);
};
return(
<>

<div className="flex flex-col w-full max-w-xs gap-2">
<Select

label="Lines Filter"
placeholder="Select an Line"
className="max-w-xs"
selectedKeys={[value]}
onChange={handleSelectionChange}
variant={"bordered"}
defaultSelectedKeys={["All the Lines"]}
radius={"full"}

>

{[{label:"All the Lines",_key:0},{label:"Lines that work",_key:1},{label:"Lines that not work",_key:2}].map((item) => (
<SelectItem style={{padding:"1rem"}} key={item._key}>
{item.label}
</SelectItem>
))}
</Select>
</div>

</>
)
}

const _Lines_Render=()=>{
return(
<>
{_lines_v0.map((x)=>{
if(x._isActive){
return(
<>
<Link key={`/router/hybrid_check/${x._url}`} href={`/router/hybrid_check/${x._url}`} className='col-lg-5 col-md-6 col-sm-12 bg-green-50/100 h-[100px] mx-4 my-4 rounded-lg cursor-pointer'>
<div className='flex !flex-row items-center gap-4'>
<div className='w-[75px] h-[75px] bg-green-300 rounded-full flex justify-center items-center mt-2'><span className="text-green-600">HL-{x._line}</span></div>

<div className='flex !flex-row w-[80%] justify-between mt-2.5'>
<div><p className='font-light tracking-[1px]'>Line {x._line}</p></div>
<div className="_circle_live"></div>
</div>


</div>

</Link>
</>
)

}else{
return(
    <>
<div className='col-lg-5 col-md-6 col-sm-12 bg-slate-100 h-[100px] mx-4 my-4 rounded-lg cursor-not-allowed dis'>
<div className='flex flex-row items-center gap-4'>
<div className='w-[75px] h-[75px] bg-slate-300 rounded-full flex justify-center items-center mt-2'><span className="text-slate-600">HL-{x._line}</span></div>
<div className='flex !flex-row w-[80%] justify-between mt-2.5'>
<div><p className='font-light tracking-[1px]'>Line {x._line}</p></div>
</div>


</div>


</div>
</>
)
}


})}
</>

)


}