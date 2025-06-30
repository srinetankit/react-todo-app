import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.error("Error : ", error);
            return initialValue;
        }
    })
}

const setValue = (value) => {
    try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
        console.error("Error : ", error);
    }

}

return [storedValue, setValue]

export default useLocalStorage;