const invokeJsonFromKeys = () => {
  const getKeyValue = (data, key) => {
    if (Array.isArray(data)) {
      return data.map(item => getKeyValue(item, key));
    } else if (typeof data === "object" && data !== null) {
      if (key in data) {
        return data[key];
      }
      for (const k in data) {
        const value = getKeyValue(data[k], key);
        if (value !== undefined) {
          return value;
        }
      }
    }
  };
  return (jsonString, keys) => getKeyValue(jsonString, keys);
};
export default invokeJsonFromKeys;
