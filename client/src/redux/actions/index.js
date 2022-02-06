import axios from "axios";
// export const ACTION = "ACTION";
// estos son ejemplos

export function getAllProducts(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/getAllProducts');
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: json.data
        })
    }
}

export function createProduct(payload){
    return async function (dispatch) {
        var response = await axios.post('http://localhost:3001/createProduct', payload);
        // console.log(response);
        return response;
    }
}


// export function postProduct(payload) {
// 	return async function (dispatch) {
// 		axios.post(`/createProduct`, payload).then(r => {
// 			dispatch({ type: 'POST_NEW_PRODUCT', payload: r.data });
// 		});
// 	};
// }
