



import React from 'react';
import {tv,VisuallyHidden,useCheckbox} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip"
const CheckIcon = (props) =>
(
<svg
aria-hidden="true"
fill="none"
focusable="false"
height="1em"
stroke="currentColor"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
viewBox="0 0 24 24"
width="1em"
{...props}
>
<polyline points="20 6 9 17 4 12" />
</svg>
);
const checkbox = tv({
slots: {
base: "border-default hover:bg-default-200",
content: "text-default-600"
},
variants: {
isSelected: {
true: {
base: "border-danger bg-danger-400 hover:bg-danger-500 hover:border-danger-500",
content: "text-danger-foreground pl-1"
}
},
isFocusVisible: {
true: { 
base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
}
}
}
})
export const CustomCheckbox = (props) => {
const {
children,
isSelected,
isFocusVisible,
getBaseProps,
getLabelProps,
getInputProps,
} = useCheckbox({
...props
})

const styles = checkbox({ isSelected, isFocusVisible })

return (
<label {...getBaseProps()} data-class="_label_c_box_c_error">
<VisuallyHidden>
<input {...getInputProps()} />
</VisuallyHidden>
<Chip
classNames={{
base: styles.base(),
content: styles.content(),
}}
startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
variant="faded"
{...getLabelProps()}
>
{children ? children : isSelected ? "Enabled" : "Disabled"}
</Chip>
</label>
);
}

