

"use client" ; 
import {legacy_createStore,applyMiddleware} from 'redux'

import thunkMiddleware from 'redux-thunk'

import _allstores from "./main"
import logger from 'redux-logger'



export const _store=legacy_createStore(_allstores , applyMiddleware(logger))
