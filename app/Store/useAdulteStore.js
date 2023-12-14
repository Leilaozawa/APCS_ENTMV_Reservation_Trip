import { create } from 'zustand'

const useAdulteStore = create((set) => ({
  adulte: '',
  setAdulte: (nouveauNbrAdulte) => set({ adulte: nouveauNbrAdulte }),
}))


export default useAdulteStore;