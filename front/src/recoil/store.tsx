// Atom Store

import { atom } from "recoil";

export const showItem = atom<boolean>({
  key: 'showitem',
  default: false
});