import { defineStore } from 'pinia'

export const useCounterStore = defineStore("counter", {
    state: () => {
        return {
            count: 10,
            a:"abcde"
        }
    },

    actions: {
        increment(val: number) {
            this.count += val
        },

        decrement(val: number) {
            console.log('val ='+val)
            this.count -= val
        },

        async waitAndAdd(val: number) {
            setTimeout(() => {
                this.count += val
            },3000)
        }
    },

    getters: {
    // เมือมีการเปลี่ยนแปลงค่าของใน store จะทำในนี้
        doubleCount: (state) => state.count * 2
    }

})
