import { create } from 'zustand'

const useTarifStore = create((set) => ({
  tarif: '',
  setTarif: (nouveauTarif) => set({ tarif: nouveauTarif }),
}))


export default useTarifStore;