
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'StorgeSession',
    storage: sessionStorage,
  });
  

export const StorgeSession = atom({
    key: 'isStorgeSession',
    default: false,
    effects_UNSTABLE : [persistAtom]
});