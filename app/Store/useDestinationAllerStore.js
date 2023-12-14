import { create } from 'zustand'

const useDestinationAllerStore = create((set) => ({
  destinationAller: '',
  setDestinationAller: (nouvDestinationAller) => set({ destinationAller: nouvDestinationAller }),
}))


export default useDestinationAllerStore;