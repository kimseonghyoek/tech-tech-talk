// Atom Store

import { atom } from "recoil";

export const showItem = atom<boolean>({
  key: 'showitem',
  default: false
});

export const checkLogin = atom<boolean>({
  key: 'login',
  default: false
})