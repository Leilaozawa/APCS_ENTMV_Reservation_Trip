import { create } from 'zustand'

const useDateAllerStore = create((set) => ({
  dateAller: '',
  setDateAller: (nouvDateAller) => set({ dateAller: nouvDateAller }),
}))


export default useDateAllerStore;