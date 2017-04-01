/**
 * Created by yons on 2017/3/13.
 */

import {ADDCHILD,ADDUSER } from '../constants'
import 'whatwg-fetch'
export const addBus= busData => {
    return {
        type: ADDCHILD,
        busData
    }
};
export const addBusLines = busLinesData => {
    return {
        type:ADDUSER,
        busLinesData
    }
};
function fetchAddChildData(data) {
    return (dispatch) => {
        return fetch("http://localhost:8080/Json/addJson", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json", "charset": "utf-8"}
        })
    }
}
function fetchAddUserData(data) {
    return (dispatch)=>{
        return fetch("http://localhost:8085/Json/add",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json","charset":"utf-8"}
            }
        )
    }

}
export function fetchAddChild(data) {
    return (dispatch,getState)=>{
        return dispatch(fetchAddChildData(data))
    }
}
export function fetchAddUser(data) {
    return (dispatch,getState)=>{
        return dispatch(fetchAddUserData(data))
    }

}
