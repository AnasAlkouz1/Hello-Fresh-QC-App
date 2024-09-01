"use client" ;

import {combineReducers} from 'redux'
import { _k_function } from './stores/_K_store'
import { _user_function } from './stores/_user';
import { _changes_function } from './stores/_changes';






export default combineReducers({
_k_store:_k_function,
_user_function:_user_function,
_changes_function:_changes_function
})