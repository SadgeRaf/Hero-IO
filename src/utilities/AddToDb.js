import { toast } from 'react-toastify';
const getStoredApp = ()=> {
    const storedAppSTR = localStorage.getItem("readList");

    if (storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();
    if (storedAppData.includes(id)){
        toast("Already exists");
    }else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("readList",data);
    }
}

const removeFromDb = (id) => {
  const stored = getStoredApp();
  const updated = stored.filter(appId => parseInt(appId) !== parseInt(id));
  localStorage.setItem('readList', JSON.stringify(updated));
};

export {addToStoredDB,getStoredApp,removeFromDb}