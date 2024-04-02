import { toast } from 'react-toastify';

const getItemFromLS = (keyName) => {
  const existedItem = localStorage.getItem(keyName);
  return existedItem ? JSON.parse(existedItem) : [];
};

const saveItemToLS = (keyName, id) => {
  const existedItems = getItemFromLS(keyName);
  if (!existedItems.includes(id)) {
      toast.success('Item Added Sucessfull')
    existedItems.push(id);

    localStorage.setItem(keyName, JSON.stringify(existedItems))
  }else{
    toast.error('Book already exist in the list')
  }
};

export {saveItemToLS, getItemFromLS}