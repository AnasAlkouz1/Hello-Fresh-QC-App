
"use client" ;

let _state = {
_count: 0
}

export let _k_function = (state=_state, action) => { 
switch (action.type) {
case "add":
return {
...state, _count: state._count + 1
}
case "_remove":
return {
...state, _count: state._count - 1
}
default:return state
}
}

