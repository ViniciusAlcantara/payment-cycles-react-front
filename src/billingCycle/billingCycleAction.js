import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabAction'

const BASE_URL='http://localhost:3003/api/billingCycles'
const INITIAL = {
    credits: [{}],
    debits: [{}]
}

export function getList() {
    const request = axios.get(BASE_URL)
    return {
        type: 'FETCH_LIST',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/${id}`, values)
            .then(resp => {
                toastr.success('Success', 'Operation realized with success!')
                dispatch(init())
            })
            .catch(error => {
                console.log(error)
                error.response.data.errors.forEach(e => toastr.error('Error', e))
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL)
    ]
}