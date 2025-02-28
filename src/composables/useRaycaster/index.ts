import { useTres } from '/@/composables'
import { Raycaster, Vector2 } from 'three'
import { onUnmounted, Ref, ref, ShallowRef, shallowRef } from 'vue'

/**
 * Raycaster composable return type
 *
 * @export
 * @interface UseRaycasterReturn
 */
export interface UseRaycasterReturn {
  /**
   * Raycaster instance
   *
   * @type {ShallowRef<Raycaster>}
   * @memberof UseRaycasterReturn
   */
  raycaster: ShallowRef<Raycaster>
  /**
   * Pointer position
   *
   * @type {Ref<Vector2>}
   * @memberof UseRaycasterReturn
   */
  pointer: Ref<Vector2>
}

/**
 * Composable to provide raycaster support and pointer information
 *
 * @see https://threejs.org/docs/index.html?q=raycas#api/en/core/Raycaster
 * @export
 * @return {*} {UseRaycasterReturn}
 */
export function useRaycaster(): UseRaycasterReturn {
  const raycaster = shallowRef(new Raycaster())
  const pointer = ref(new Vector2())
  const currentInstance = ref(null)
  const { setState, state } = useTres()

  setState('raycaster', raycaster.value)
  setState('pointer', pointer)
  setState('currentInstance', currentInstance)

  function onPointerMove(event: MouseEvent) {
    pointer.value.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.value.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  state?.renderer?.domElement.addEventListener('pointermove', onPointerMove)

  onUnmounted(() => {
    state?.renderer?.domElement.removeEventListener('pointermove', onPointerMove)
  })
  return {
    raycaster,
    pointer,
  }
}
