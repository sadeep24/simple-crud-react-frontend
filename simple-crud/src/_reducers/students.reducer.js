import {studentConstants} from '../_constants';

export function students(state={},action){
    switch(action.type){
        case studentConstants.GETALL_REQUEST:
            return{
                loading:true
            };
        case studentConstants.GETALL_SUCCESS:
            return{
                items:action.students
            };
        case studentConstants.GETALL_FAILURE:
             return{
                 error:action.error
             };
        case studentConstants.DELETE_REQUEST:
             return{
                ...state,
                items: state.items.map(student =>
                    student.id === action.id
                        ? { ...student, deleting: true }
                        : student
                )
             };
        case studentConstants.DELETE_SUCCESS:
            return{
                items:state.items.filter(student=>student.id!=action.id)
            };
        case studentConstants.DELETE_FAILURE:
            return{
                ...state,
                items: state.items.map(user=>{
                    if(user.id===action.id){
                        const{ deleting,...studentCopy}=user;

                        return{...studentCopy,deleteError:action.error};
                    }
                })

            }
    }
}