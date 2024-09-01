"use client"
import React, { useEffect } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";

import {Link} from "@nextui-org/link"
import {Button} from "@nextui-org/button"
import { SiHellofresh } from "react-icons/si";
import {useSelector,useDispatch} from "react-redux"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure} from "@nextui-org/modal";
import {Input} from "@nextui-org/input";
import { _Dropdown } from './Dropdown';
import Navbar_url from '../../Hooks/Navbar_url';
import {useRouter} from "next/navigation"
import "../../public/bootstrap-grid.min.css"
const NavBar = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(true);
const _data=useSelector((state) => {return state._user_function});
const _dispatch=useDispatch()
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {_link}=Navbar_url();
const router = useRouter()

const menuItems = [
// "Profile",
// "Dashboard",
// "Activity",
// "Analytics",
// "System",
// "Deployments",
// "My Settings",
// "Team Settings",
// "Help & Feedback",
// "Log Out",
];
const _Modal=()=>{
const _inputRef=React.useRef()
return(
<>
<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
<ModalContent>
{(onClose) => (
<>
<ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
<ModalBody>
<div className="flex flex-col w-full gap-4 md:flex-nowrap">
<Input ref={_inputRef} type="Chip" label="Chipnummer" placeholder="Please write your Chip Number" />
</div>
</ModalBody>



<ModalFooter>
<Button color="danger" variant="light" onPress={onClose}>
Close
</Button>
<Button color="default" onPress={()=>{
onClose();
_dispatch({type:"login",_data:_inputRef.current.value})
}
}>
Login
</Button>
</ModalFooter>

</>
)}
</ModalContent>
</Modal>
</>
)

}




return (
<>
<_Modal/>
<Navbar className='bg-green-50 h-[80px]' onMenuOpenChange={setIsMenuOpen}>
<NavbarContent>
<NavbarMenuToggle
aria-label={isMenuOpen ? "Close menu" : "Open menu"}
className="sm:hidden"
/>

<NavbarBrand className='cursor-pointer' onClick={(e)=>{router.push("/",{scroll:false})}}>
<SiHellofresh color='#96dc14' size={35} />
<div className='flex flex-row'>        
<p className="ml-2 font-light text-medium">Hello Fresh</p>
</div>

</NavbarBrand>



</NavbarContent>



<NavbarContent className="hidden gap-4 sm:flex" justify="center">

<NavbarItem>
<Link color="foreground" href="#" aria-current="page" isDisabled>
Kitting
</Link>
</NavbarItem>
<NavbarItem>
<Link color="foreground" href="#" isDisabled>
Hybrid
</Link>
</NavbarItem>
<_Dropdown/>

      </NavbarContent>




<NavbarContent justify="end">
<NavbarItem>

{ _data._user_is_logged ? (
<Button as={Link} onClick={(e)=>{_dispatch({type:"logout"})}} color={"danger"}  href="#" variant="flat">
Log out
</Button>
) : (
<Button as={Link} onClick={(e)=>{
onOpen();
}} color={"default"}  href="#" variant="flat">
Login
</Button>
)
}

</NavbarItem>


<NavbarItem>
<div className='flex items-center justify-center w-12 h-12 bg-green-300 border border-green-600 rounded-full '>
<p className='text-[12px] text-green-700'>{_data._user_Chipnumber}</p>
</div>
</NavbarItem>
<div className='flex items-center justify-center w-[60px] h-7 bg-green-500 text-green-200 rounded-3xl text-[12px]'><p>{_link}</p></div>

</NavbarContent>



 
 
      <NavbarMenu className='bg-green-200 pt-7'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                // index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
</>
)
}

export default NavBar



