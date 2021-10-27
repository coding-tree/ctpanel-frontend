import { useState, useEffect } from 'react';
import { useSetNewApiCallID } from '../store/customHooks/useSetNewApiCallID';

export const useAPICallsInInterval = () => {
    const setNewApiCallID = useSetNewApiCallID();
  
    const [apiCallsON, handleApiCallsON] = useState(false)
    const handleApiCalls = () => handleApiCallsON(!apiCallsON);
  
    useEffect(() => {
        if (apiCallsON) {
            const intervalID = setInterval(setNewApiCallID, 2000);
            return () => clearInterval(intervalID);
        }
      }, [apiCallsON]);
  
      return { apiCallsON, handleApiCalls }
  }
