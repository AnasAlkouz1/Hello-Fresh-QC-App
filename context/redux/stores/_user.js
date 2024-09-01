

"use client" ;

let _state = {
_user_is_logged: false,
_user_Chipnumber:""
}

export let _user_function = (state=_state, action) => { 
switch (action.type) {
case "login":
return {
...state, _user_is_logged: true,_user_Chipnumber:action._data
}
case "logout":
return {
...state, _user_is_logged: false,_user_Chipnumber:""
}
default:return state
}
}