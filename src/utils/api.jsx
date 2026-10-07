



export const FullApi = async () => {
    const response  = await fetch("https://api.api-store.workers.dev/api/fitlog");
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    const data  = await response.json();
    return data;  
};


export const SingleApi = async (id) => {
    const response  = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    const data  = await response.json();
    return data; 
};
