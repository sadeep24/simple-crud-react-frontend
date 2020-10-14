import {studentConstants} from '../_constants'
import{studentService} from '../_services'
import {history} from '../_helpers'

export const studentActions={
    getAll,
    delete:_delete
}

function getAll(){
    return dispatch=>{
        dispatch(request());

        studentService.getAll()
            .then(
                students=>dispatch(success(students)),
                error=>dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: studentConstants.GETALL_REQUEST } }
    function success(students) { return { type: studentConstants.GETALL_SUCCESS, students } }
    function failure(error) { return { type: studentConstants.GETALL_FAILURE, error } }
}

function _delete(id){
    return dispatch=>{
        dispatch(request(id));
        studentService.delete(id)
            .then(
                student => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))  
            );
    }
    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}