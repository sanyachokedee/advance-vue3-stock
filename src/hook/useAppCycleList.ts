import { SwipeDirection, useCycleList } from '@vueuse/core'
import { nextTick } from 'process'
import { ref, computed } from 'vue'

export function useAppCycleList(list: unknown[], options:any) {
    const cycleList = useCycleList(list, options)

    const direction = ref()

    const isForward = computed(() => direction.value === 'forwrd')
    const isBackward = computed(() => direction.value === 'backward')

    function next() {
        direction.value = 'forward'
        cycleList.next();
    }

    function prev() {
        direction.value = 'backward'
        cycleList.prev();
    }

    return {
        ...cycleList,
        next,
        prev,
        isForward,
        isBackward
    }
}