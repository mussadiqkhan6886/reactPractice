
const ApiRequest = async (URL, object = null, errMsg = null) => {
    try{
        const response = await fetch(URL, object)
    if(!response.ok) throw Error("Reload Page")
        const data = await response.json()
    }catch(err){
        errMsg = err.message
    }finally{
        return errMsg
    }
  
}

export default ApiRequest
