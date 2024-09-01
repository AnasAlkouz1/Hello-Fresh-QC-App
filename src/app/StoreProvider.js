
"use client";

import { Provider } from "react-redux";
import { _store } from "../../context/redux";
import { NextUIProvider } from "@nextui-org/react";
    import { useRouter } from 'next/navigation';



export function ReduxProvider({ children }) {
    const router = useRouter();

return (
<>
<Provider store={_store}>
<NextUIProvider navigate={router.push}>
{children}
</NextUIProvider>
</Provider>
</>
)

}