// Atom Store

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const showItem = atom<boolean>({
  key: 'showitem',
  default: false
});

export const checkLogin = atom<boolean>({
  key: 'login',
  default: false,
});
