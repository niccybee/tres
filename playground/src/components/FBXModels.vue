<script setup lang="ts">
import { Color, SRGBColorSpace } from 'three'
import { TresCanvas } from '/@/'
import { OrbitControls, useTweakPane, FBXModel, useFBX } from '@tresjs/cientos'

const bgColor = new Color('#F78B3D')
useTweakPane()

const jeepRef = ref()

const model = await useFBX(
  'https://raw.githubusercontent.com/Tresjs/assets/main/models/fbx/low-poly-truck/Jeep_done.fbx',
)
model.position.set(0, 4, 0)
model.scale.set(0.01, 0.01, 0.01)
model.updateMatrixWorld()

watch(jeepRef, ({ model }) => {
  model.scale.set(0.01, 0.01, 0.01)
  model.rotation.y = -Math.PI / 2
})
</script>

<template>
  <TresCanvas
    :clear-color="bgColor"
    shadows
    alpha
    window-size
    power-preference="high-performance"
    :output-encoding="SRGBColorSpace"
  >
    <TresPerspectiveCamera :position="8" :fov="45" :near="0.1" :far="10000" />
    <OrbitControls />

    <TresAmbientLight :color="0xffffff" :intensity="0.75" />
    <TresMesh v-bind="model" />
    <Suspense>
      <FBXModel
        ref="jeepRef"
        path="https://raw.githubusercontent.com/Tresjs/assets/main//models/low-poly-truck/Jeep_done.fbx"
      />
    </Suspense>
  </TresCanvas>
</template>
