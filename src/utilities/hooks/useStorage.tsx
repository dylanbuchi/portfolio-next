import { LOCAL_STORAGE_STR, StorageType } from 'constants/storage';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const getStorageObject = (storage: StorageType) => {
  return storage === LOCAL_STORAGE_STR ? localStorage : sessionStorage;
};

const useLocalStorage = <T,>(
  storageType: StorageType,
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const storage = getStorageObject(storageType);

  const [value, setValue] = useState<T>(() => {
    let currentValue: T;

    try {
      currentValue = JSON.parse(storage.getItem(key) ?? String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  return [value, setValue];
};

export default useLocalStorage;
