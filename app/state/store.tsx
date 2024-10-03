import { store } from 'expo-router/build/global-state/router-store'
import { create } from 'zustand'

type Store = {
    count: number
    inc: () => void
}

export const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
    const { count, inc } = useStore()
    return (
        <div>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
        </div>
    )
}

export default store;