// reducers/index.js
import {combineReducers} from 'redux' // 利用combineReducers 合并reducers
import {routerReducer} from 'react-router-redux' // 将routerReducer一起合并管理
import {updateJson} from './JsonReducer'
import {updateFormData} from './FormReducer'
import {updateBusData} from './BusReducer'
import {updateUserData} from './UserReducer'

export default combineReducers({
    updateFormData,
    updateJson,
    updateBusData,
    updateUserData,
    routing: routerReducer
})