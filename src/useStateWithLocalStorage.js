import React from "react";

const useStateWithLocalStorage = (localStorageKey, defaultValue = null) => {
  const [value, setValue] = React.useState(
    JSON.parse(
      localStorage.getItem(localStorageKey) || JSON.stringify(defaultValue)
    )
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return [value, setValue];
};

export default useStateWithLocalStorage;
