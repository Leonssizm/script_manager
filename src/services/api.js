import axios from '@/plugins/axios/index.js'

export async function getAllScripts(){

    return await axios.get('rest/scripts')
    
}

export async function updateScript(scriptId, scriptData){
    
    return await axios.post(`rest/controller/u${scriptId}`, scriptData)
}