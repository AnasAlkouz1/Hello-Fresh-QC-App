'use client';
import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';
import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox';
import { clsx } from 'clsx';
import { BsArrowDownCircle, BsArrowUpCircle, BsSearch,BsArrowDownLeftCircle } from 'react-icons/bs';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { SlInfo } from 'react-icons/sl';

import {DatePicker} from "@nextui-org/date-picker";
import classNames from 'classnames';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { HL_items } from '../../../../../context/HL_items';
import {startOfWeek, startOfMonth, getLocalTimeZone, today} from "@internationalized/date";
import { CustomCheckbox } from '../../../../../components/hybrid-check/CustomCheckbox_err';
import {Select, SelectItem} from "@nextui-org/select";


const _itemsHL_test=[
{
_location:"HL-01-02-A-B1",
_itemName:"Buttermilch-Zitronen Dressing 50ml",
weight:"50ml",
MHD:"09-10-2024",
SKU:false,
SKUChange:"",
_location_s:"A",
_otherlocation:["HL-04-02-A-B1","HL-04-07-A-B1","HL-03-04-A-B9"]
},
{
_location:"HL-01-02-A-A1",
_itemName:"Hartkäse ital.Art,gerieben 20g_VEGGIE",
weight:"20g",
MHD:"02-10-2024",
SKU:true,
SKUChange:"Hartkäse ital.Art,gerieben 40g_VEGGIE",
_location_s:"B",
_otherlocation:["HL-04-01-A-B1","HL-05-04-A-B9"]
},
{
_location:"HL-01-02-A-C1",
_itemName:"Ice: Seelachs 250g, 2 Stück",
weight:"250g",
MHD:"30-09-2024",
SKU:true,
SKUChange:"Ice: Seelachs 375g, 2 Stück",
_location_s:"C",
_otherlocation:["HL-04-03-A-B1","HL-03-04-A-B9"]
},

{
_location:"HL-01-02-A-A2",
_itemName:"Ice: Seelachs 375g, 2 Stück",
weight:"375g",
MHD:"01-10-2024",
SKU:false,
SKUChange:"",
_location_s:"A",
_otherlocation:["HL-01-02-A-A2"]
},




]

let _HL_Locations=_itemsHL_test;
let _HL_Locations_v0=_itemsHL_test;

export default function _id({ params }) {
const [value, setValue] = React.useState("");

// const handleSelectionChange = (e) => {
//   if(e.target.value=="0"){
//   _lines_v0=_lines;
//   _dispatch({type:"_change_state_v0"})
//   }else if(e.target.value=="1"){
//   _lines_v0=_lines;
//   _lines_v0=_lines_v0.filter((x)=>{return x._isActive==true});
//   _dispatch({type:"_change_state_v0"})
//   }else{
//   _lines_v0=_lines;
//   _lines_v0=_lines_v0.filter((x)=>{return x._isActive==false});
//   _dispatch({type:"_change_state_v0"})
//   }
//   return setValue(e.target.value);
//   };

return (
<div className="container mt-10">
<div className="row">
<div className="mb-3 col-6">
<Breadcrumbs className="text-[16px]" underline="always">
<BreadcrumbItem href="/">
<p className="text-md">Home</p>
</BreadcrumbItem>
<BreadcrumbItem href="/router/hybrid_check">
<p className="text-md">Hybrid Check</p>
</BreadcrumbItem>
<BreadcrumbItem href="/router/hybrid_check">
<p className="text-green-300 text-md">{params.id}</p>
</BreadcrumbItem>
</Breadcrumbs>
</div>
<div className="flex flex-row justify-start mb-3 col-6 t_s743752">
<div className='_div_6432885211'>
<Select

label="Locations Filter"
placeholder="Select an Location"
className="max-w-xs"
selectedKeys={[value]}
// onChange={handleSelectionChange}
variant={"bordered"}
defaultSelectedKeys={["All Locations"]}
radius={"full"}

>

{[{label:"All Locations",_key:0},{label:"Front Rack Locations",_key:1},{label:"Back rack Locations",_key:2}].map((item) => (
<SelectItem style={{padding:"1rem"}} key={item._key}>
{item.label}
</SelectItem>
))}
</Select>
</div>
<div class="_circle_live"></div>


</div>




</div>

<div className="row !my-8">
{_itemsHL_test.map((item, index) =>{
return(<_CardContent item={item} />)
})}

</div>
</div>
);
}
const _CardContent = (item) => {
return (
<div className="mb-12 col-lg-6 col-md-12 col-sm-12">
<div className="w-full h-[390px] rounded-2xl  border border-green-600">
<div className="row">
<_Left_CardContent _data={item} />
<_Right_CardContent _data={item} />
</div>
</div>
</div>
);
};


const _Left_CardContent = ({_data}) => {
return (
<>
<div className="col-5">
<div className="h-[388px] bg-green-300 rounded-s-2xl border-r-2 border-green-500">

<div className='flex flex-col justify-center gap-8 pt-8 pl-4' >
<div className='text-sm font-light text-green-700 underline underline-offset-8 _text_u_l_e'>{_data.item._itemName}</div>
<div className='text-sm font-light text-green-700 underline underline-offset-8 _text_u_l_e'>MHD: {_data.item.MHD}</div>
<div className='text-sm text-default-700'>Other location:</div>
<div className='mt-[-1.5rem]'>
{
_data.item._otherlocation.length > 0 ?
_data.item._otherlocation.map((item, index) => {
return(<div className='mb-2 text-sm font-light text-green-700 underline underline-offset-8 _text_u_l_e'>{item}</div>)
}) : <div>null</div>
}
</div>
</div>


</div>
</div>
</>
);
};
const _Right_CardContent = ({_data}) => {
const { isOpen, onOpen, onClose } = useDisclosure();
const [size, setSize] = React.useState('3xl');
return (
<>
<div className="!px-0 col-7 lg:!px-4 md:!px-4 sm:!px-4">
<div className="flex flex-row justify-between pr-8 mt-8">
<div className="flex flex-col w-full mt-1 text-xs sm:text-sm md:text-sm lg:text-sm">
<div className="flex flex-row items-center justify-between">
<p className="text-green-400 underline font underline-offset-8">{_data.item._location}</p>
<div className="_c_icon">
{
(()=>{
if(_data.item._location_s=="A"){
return <BsArrowDownCircle className="text-green-800" size={32} />
}else if(_data.item._location_s=="B"){
return <BsArrowUpCircle className="text-green-800" size={32} />
}else{
return <BsArrowDownLeftCircle className="text-green-800" size={32} />
}
})()}



</div>
</div>

<div className="flex !flex-col mt-10 items-center gap-2">
<div className="font-light underline text-slate-600 underline-offset-4 w-[200px]  break-words leading-7 text-center">
<div>{_data.item._itemName}</div>
</div>

<div className="font-light text-green-400 underline underline-offset-8">( {_data.item.weight} )</div>

<div className="mt-4">
<Button className="font-light border rounded-full min-w-60" onClick={onOpen} color="danger" variant="bordered" startContent={''}>
Add Wrong
</Button>
<Modal isOpen={isOpen} onClose={onClose} size={'3xl'} scrollBehavior={'inside'}>
<ModalContent>
{onClose => (
<>
<ModalHeader className="flex flex-col gap-1 border-green-500 border-b-1">Add Wrong</ModalHeader>
<ModalBody className="mt-4">
<div className='mb-2 border-green-500 border-dotted border-b-3 w-[70%] ml-2'>
<p className="mb-2 ml-2 font-light text-foreground-500">Please specify what type of wrong:</p>
</div>
<_ModalError_Selecte _data={_data.item} />
<div className='mb-2 mt-4 border-green-500 border-dotted border-b-3 w-[70%] ml-2'>
<p className="mb-2 ml-2 font-light text-foreground-500">How the wrong was handled:</p>
</div>
<_ModalError_acted/>
<div className='mb-2 mt-4 border-green-500 border-dotted border-b-3 w-[70%] ml-2'>
<p className="mb-2 ml-2 font-light text-foreground-500">Share this wrong with:</p>
</div>
<_ModalError_share/>


</ModalBody>

<ModalFooter>
<Button color="success" variant="bordered" onClick={onClose}>
Done
</Button>
<Button color="danger" variant="bordered" onClick={onClose}>
Close
</Button>
</ModalFooter>
</>
)}
</ModalContent>
</Modal>
</div>
</div>
</div>
</div>

{_data.item.SKU ? <_Right_SKUChange_CardContent _data={_data.item.SKUChange} /> :""}
</div>
</>
);
};
const _Right_SKUChange_CardContent = ({_data}) => {
return (
<>
<div className="mt-4 _div_c_sku_ch53672 flex flex-row text-blue-500 bg-blue-100 border border-blue-500 h-[65px] items-center gap-4 w-full break-all">
<div>
<SlInfo className="ml-4" size={25} />
</div>
<div className="text-xs">
<p className="mb-1 text-blue-900">SKU Change:</p>
<p>{_data}</p>
</div>
</div>
</>
);
};




const _ModalError_Selecte= ({_data}) => {
const [isSelected_v0, setIsSelected] = React.useState(false);
const [value, setValue] = React.useState('');
const _classCheck = classNames({
'border-[#f31260]': isSelected_v0,
'bg-red-100': isSelected_v0
});
React.useEffect(
() => {
setValue('');
},
[isSelected_v0]
);
const [groupSelected, setGroupSelected] = React.useState([]);
/*TODO: v0*/


/*TODO: v1*/
let defaultDate = today(getLocalTimeZone());
const [isSelected_v1, setIsSelected_v1] = React.useState(false);
const _classCheck_v1 = classNames({
'border-[#f31260]': isSelected_v1,
'bg-red-100': isSelected_v1
});
let [_date, setDate] = React.useState(defaultDate);
/*TODO: v1*/


/*TODO: v2*/
const [isSelected_v2, setIsSelected_v2] = React.useState(false);
const _classCheck_v2 = classNames({
'border-[#f31260]': isSelected_v2,
'bg-red-100': isSelected_v2
});
/*TODO: v2*/


/*TODO: v3*/
const [isSelected_v3, setIsSelected_v3] = React.useState(false);
const _classCheck_v3 = classNames({
'border-[#f31260]': isSelected_v3,
'bg-red-100': isSelected_v3
});
/*TODO: v3*/
return (
<>
<div className='ModalError_v0'>


<div onClick={e => {
setIsSelected(!isSelected_v0);
}}
className={`${_classCheck} cursor-pointer rounded-lg gap-2 p-4 border-2  h-auto hover:bg-red-100`}
>
<div className="__checkbox_v0">
<Checkbox isSelected={isSelected_v0} radius="full" color="danger" onValueChange={setIsSelected}>
<span className="text-base font-light text-default-600">Incorrectly SKU</span>
</Checkbox>
</div>

<div className="flex flex-row mt-8 __checkbox_v1_d">
<div className="w-full">

<div className="flex flex-col w-full gap-2 mb-4 ml-4">
      <CheckboxGroup
        className="gap-1"
        label="Choose Error:"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}        
      >
        <CustomCheckbox value="Wrong SKU" isDisabled={!isSelected_v0}>Wrong SKU</CustomCheckbox>
        <CustomCheckbox value="Mixed SKU" isDisabled={!isSelected_v0}>Mixed SKU</CustomCheckbox>
      </CheckboxGroup>
    </div>



<div className="flex flex-row items-center mb-4">
<span className="text-default-600 ml-4 tracking-[1px] mr-4">Should :</span>
<div className="bg-green-300 w-[315px] h-[55px] mt-2  border-1 rounded-full border-green-500 flex items-center pl-4 mb-2">
<div className="text-sm font-light text-green-600">{_data._itemName}</div>
</div>
</div>

<div className="flex flex-row items-center">
<span className="text-default-600 ml-4 tracking-[1px] mr-4 mt-[-1.5rem]">Is :</span>
<div className="flex flex-col w-full max-w-xs gap-2 mt-2 ml-10">
<Autocomplete
isRequired
isDisabled={!isSelected_v0}
label="Incorrectly with"
radius="full"
color={'danger'}
defaultItems={HL_items}
placeholder="Search an item"
className=""
listboxProps={{
itemClasses: {
base: ['rounded-medium', 'h-[45px]']
}
}}
selectedKey={value}
onSelectionChange={setValue}
startContent={<BsSearch size={25} />}
>
{item => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
</Autocomplete>
<p className="mt-2 ml-6 text-default-500 text-small">Selected: {value}</p>
</div>
</div>


</div>
</div>
</div>





<div onClick={e => {
setIsSelected_v1(!isSelected_v1);
}} className={` mt-3 ${_classCheck_v1} cursor-pointer rounded-lg gap-2 p-4 border-2  h-auto hover:bg-red-100`}>



<div className="__checkbox_v1">
<Checkbox isSelected={isSelected_v1} radius="full" color="danger" onValueChange={setIsSelected_v1}>
<span className="text-base font-light text-default-600">Date invalid</span>
</Checkbox>
</div>



<div className="flex flex-row mt-8">

<div className="w-full">
<div className="flex flex-row items-center mb-4">
<span className="text-default-600 ml-4 tracking-[1px] mr-4">Should :</span>
<div className="bg-green-300 w-[315px] h-[55px] mt-2  border-1 rounded-full border-green-500 flex items-center pl-4 mb-2">
<div className="text-sm font-light text-green-600">Starting {_data.MHD}</div>
</div>
</div>



<div className="flex flex-row items-center">
<span className="text-default-600 ml-4 tracking-[1px] mr-4 mt-[-1.5rem]">Is :</span>
<div className="flex flex-col w-full max-w-xs gap-2 mt-2 ml-10">
<DatePicker isDisabled={!isSelected_v1} value={_date}  label="Birth date" radius='full' className='w-[315px]' onChange={(e)=>{setDate(e)}} />
<p className="mt-2 ml-6 text-default-500 text-small">Date: {(_date.day == defaultDate.day ? "" : `${_date.day}-${_date.month}-${_date.year}`)}</p>
</div>
</div>

</div>

</div>






</div>











<div onClick={e => {
setIsSelected_v2(!isSelected_v2);
}} className={` mt-3 ${_classCheck_v2} cursor-pointer rounded-lg gap-2 p-4 border-2  h-auto hover:bg-red-100`}>



<div className="__checkbox_v2">
<Checkbox isSelected={isSelected_v2} radius="full" color="danger" onValueChange={setIsSelected_v2}>
<span className="text-base font-light text-default-600">Is damaged or Bad Quality</span>
</Checkbox>
</div>


</div>




<div onClick={e => {
setIsSelected_v3(!isSelected_v3);
}} className={` mt-3 ${_classCheck_v3} cursor-pointer rounded-lg gap-2 p-4 border-2  h-auto hover:bg-red-100`}>



<div className="__checkbox_v2">
<Checkbox isSelected={isSelected_v3} radius="full" color="danger" onValueChange={setIsSelected_v2}>
<span className="text-base font-light text-default-600">Missing SKU</span>
</Checkbox>
</div>


</div>




</div>
</>
);


};
const _ModalError_share=()=>{
const [groupSelected, setGroupSelected] = React.useState([]);
return (
<><div className='ModalError_v1'>

<div className="flex flex-col w-full gap-1">
<CheckboxGroup
value={groupSelected}
onChange={setGroupSelected}
classNames={{
base: "w-full"
}}
>

<Checkbox
data-class="_label_Share_error_5432125"
aria-label="Schichtleiter"
classNames={{
base: clsx(
"inline-flex max-w-md w-full bg-content1 m-0",
"hover:bg-content2 items-center justify-start",
"cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
"data-[selected=true]:border-success-400"
),
label: "w-full",
}}
value={"Schichtleiter"}
color='default'
>

<div className="flex justify-between w-full gap-2">
<div className='flex items-center gap-4'>
<div className=' w-[60px] h-[60px] rounded-full bg-yellow-200 text-yellow-600 flex justify-center items-center'>SL</div>
<div className='font-light text-default-500'>Share with Schichtleiter</div>
</div>

<div className="flex flex-col items-end gap-1">
</div>



</div>



</Checkbox>

<Checkbox
data-class="_label_Share_error_5432125"
aria-label="Supervisor"
classNames={{
base: clsx(
"inline-flex max-w-md w-full bg-content1 m-0",
"hover:bg-content2 items-center justify-start",
"cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
"data-[selected=true]:border-success-400"
),
label: "w-full",
}}
value={"Supervisor"}
color='default'
>

<div className="flex justify-between w-full gap-2">
<div className='flex items-center gap-4'>
<div className=' w-[60px] h-[60px] rounded-full bg-orange-200 text-orange-600 flex justify-center items-center'>SV</div>
<div className='font-light text-default-500'>Share with Supervisor</div>
</div>

<div className="flex flex-col items-end gap-1">
</div>



</div>



</Checkbox>

<Checkbox
data-class="_label_Share_error_5432125"
aria-label="Qualitycontrol"
classNames={{
base: clsx(
"inline-flex max-w-md w-full bg-content1 m-0",
"hover:bg-content2 items-center justify-start",
"cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
"data-[selected=true]:border-success-400"
),
label: "w-full",
}}
value={"Qualitycontrol"}
color='default'
>

<div className="flex justify-between w-full gap-2">
<div className='flex items-center gap-4'>
<div className=' w-[60px] h-[60px] rounded-full bg-gray-400 text-gray-700 flex justify-center items-center'>QC</div>
<div className='font-light text-default-500'>Share with Quality control</div>
</div>

<div className="flex flex-col items-end gap-1">
</div>



</div>



</Checkbox>



</CheckboxGroup>


</div>





</div></>
)

}

const _ModalError_acted=()=>{
const [selected, setSelected] = React.useState([]);

return (
<><div className='ModalError_v2'>

<div className="flex flex-col gap-2 p-4">
<CheckboxGroup
color="default"
value={selected}
onValueChange={setSelected}
>
<Checkbox className='mb-2 font-light' value="SKU-out">I took the SKU out of the shelf.</Checkbox>
<Checkbox className='mb-2 font-light' value="talk_supervisor">I'll talk to supervisor about this Wrong.</Checkbox>
<Checkbox className='mb-2 font-light' value="did_nothing">I did nothing</Checkbox>
</CheckboxGroup>
</div>





</div></>
)

}
