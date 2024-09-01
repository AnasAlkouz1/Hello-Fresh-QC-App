

"use client" ;

let _state = {
_state_v0: false,
}

export let _changes_function = (state=_state, action) => { 
switch (action.type) {
case "_change_state_v0":
return {
...state, _state_v0:!state._state_v0
}
default:return state
}
}