export let GET_DATA_CITIES = 'GET_DATA_CITIES';
export let GET_DATA_SUCCESS_CITIES = 'GET_DATA_SUCCESS_CITIES';
export let GET_DATA_LOADING_CITIES = 'GET_DATA_LOADING_CITIES';


export const getDataLoadingCities = () => ({
    type: GET_DATA_LOADING_CITIES
});

export const getDataSuccessCities = (data) => ({
    type: GET_DATA_SUCCESS_CITIES,
    data
});

export const getDataCities = () => async(dispatch) => {
    try {
        dispatch(getDataLoadingCities());
        let res = await fetch('http://localhost:8080/cities');
        let data = await res.json();
        dispatch(getDataSuccessCities(data));
    } catch (error) {
        console.log(error);
    }
}