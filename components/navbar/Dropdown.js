
import React from 'react'
import {
Dropdown,
DropdownTrigger,
DropdownMenu,
DropdownSection,
DropdownItem
} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button"
import {NavbarItem} from "@nextui-org/navbar";
import Link from "next/link"

export const ChevronDown = ({fill, size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};




const icons = {
chevron: <ChevronDown fill="currentColor" size={16} />,
};

export const _Dropdown=()=>{
return(
<Dropdown>
<NavbarItem>
    <DropdownTrigger>
    <Button
        disableRipple
        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
        endContent={icons.chevron}
        radius="sm"
        variant="light"
    >
        QC Checking
    </Button>
</DropdownTrigger>
</NavbarItem>
<DropdownMenu
aria-label="..."
className="w-[340px]"
itemClasses={{
base: "gap-4",

}}
>


<DropdownItem 
href='/router/hybrid_check'
key="/router/hybrid_check"
description="Rack audit for Hybrid line Start."
startContent={<div className='flex flex-row items-center justify-center border border-green-400 rounded-full pl-14 w-14 h-14 bg-slate-200'><p className='pr-[55px] font-light text-green-600 text-lg'>HL</p></div>}
>

<p className='text-green-400'>Hybrid Check</p>

</DropdownItem>


    <DropdownItem isDisabled className='my-3'  href='/router/kitting_check'
    key="Kitting Check"
    description="Rack audit for kitting Start."
    startContent={<div className='flex flex-row items-center justify-center border border-green-400 rounded-full pl-14 w-14 h-14 bg-slate-200'><p className='pr-[55px] font-light text-green-600 text-lg'>KT</p></div>}
    
    >
    <p className='text-green-400'>Kitting Check</p>
    </DropdownItem>



</DropdownMenu>
</Dropdown>
)


}





