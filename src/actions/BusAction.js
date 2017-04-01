/**
 * Created by yons on 2017/3/13.
 */

import {ADDBUS,ADDBUSLINES } from '../constants'
import 'whatwg-fetch'
export const addBus= busData => {
    return {
        type: ADDBUS,
        busData
    }
};
export const addBusLines = busLinesData => {
    return {
        type:ADDBUSLINES,
        busLinesData
    }
};
function fetchAddBusData(data) {
    return (dispatch) => {
        return fetch("http://localhost:8080/Json/addJson", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json", "charset": "utf-8"}
        })
    }
}
function fetchAddBusLinesData(data) {
    return (dispatch)=>{
        return fetch("http://localhost:8085/Json/add",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json","charset":"utf-8"}
            }
        )
    }

}
export function fetchAddBus(data) {
    return (dispatch,getState)=>{
        return dispatch(fetchAddBusData(data))
    }
}
export function fetchAddBusLines(data) {
    return (dispatch,getState)=>{
        return dispatch(fetchAddBusLinesData(data))
    }

}
