const LocalStorage = {
  SetLocalStorage: (key: string, value: string) => {
    localStorage.setItem(`${key}`, value);
  },
  
  GetLocalStorage: (key: string) => {
    localStorage.getItem(key);
  },

  DelLocalStorage: (key: string) => {
    localStorage.removeItem(key);
  }
};

export default LocalStorage;