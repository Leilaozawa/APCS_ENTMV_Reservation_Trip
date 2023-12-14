// store.js
import { create } from 'zustand';

const useVoyageStore = create((set) => ({
  voyageInfo: {
    voyageIsAllerSimple: '',
    voyageDestinationAller: '',
    voyageDestinationRetour: '',
    voyageTarif: '',
    voyagePassagers: {
      adulte: 0,
      jeune: 0,
      enfant: 0,
      bebe: 0,
    },
  },
  setVoyageInfo: (info) => set({ voyageInfo: info }),
}));

export default useVoyageStore;
