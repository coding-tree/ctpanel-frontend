import { useEffect, useState } from "react";
import { useRecoilState, RecoilState, SetterOrUpdater } from "recoil";

const useRecoilInterval = <T>(
  recoilState: RecoilState<T>,
  callback: (setState: SetterOrUpdater<T>) => void,
  interval?: number
): [T, React.Dispatch<React.SetStateAction<number | false>>, any, any] => {
  const [state, setState] = useRecoilState(recoilState);
  const [intervalTime, setIntervalTime] = useState<number | false>(
    interval || false
  );
  const [isIntervalActive, setIntervalStatus] = useState<boolean>(false);

  useEffect(() => {
    if (intervalTime && isIntervalActive) {
      const interval = setInterval(() => callback(setState), intervalTime);
      return () => clearInterval(interval);
    }
  }, [intervalTime, isIntervalActive]);
  return [state, setIntervalTime, isIntervalActive, setIntervalStatus];
};

export default useRecoilInterval;
