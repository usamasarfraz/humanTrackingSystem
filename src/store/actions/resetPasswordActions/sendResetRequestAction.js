export default (data,navigation)=>{
    return {
        type: 'RESET_REQUEST',
        data: data,
        navigation: navigation
    }
}