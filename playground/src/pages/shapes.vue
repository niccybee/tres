<script setup lang="ts">
import { BasicShadowMap, CubicBezierCurve3, DoubleSide, NoToneMapping, SRGBColorSpace, Vector3 } from 'three'
import { TresCanvas } from '/@/'
import {
  Plane,
  Tube,
  Box,
  Sphere,
  Torus,
  Ring,
  TorusKnot,
  Tetrahedron,
  Icosahedron,
  Octahedron,
  Dodecahedron,
  Circle,
  Cone,
} from '@tresjs/cientos'

const state = reactive({
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  physicallyCorrectLights: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
})

const planeRef = shallowRef()
const boxRef = shallowRef()
const torusRef = shallowRef()
const torusKnotRef = shallowRef()
const circleRef = shallowRef()
const tubeRef = shallowRef()
const ringRef = shallowRef()
const tetrahedronRef = shallowRef()
const icosahedronRef = shallowRef()
const octahedronRef = shallowRef()
const dodecahedronRef = shallowRef()

watch(planeRef, plane => {
  console.log('plane', plane.value.position)
})
watch(boxRef, box => {
  console.log('box', box.value.position)
})
watch(torusRef, torus => {
  console.log('torus', torus.value.position)
})
watch(torusKnotRef, torusKnot => {
  console.log('torusKnot', torusKnot.value.position)
})
watch(circleRef, circle => {
  console.log('circle', circle.value.position)
})
watch(tubeRef, tube => {
  console.log('tube', tube.value.position)
})
watch(ringRef, ring => {
  console.log('ring', ring.value.position)
})
watch(tetrahedronRef, tetrahedron => {
  console.log('tetrahedron', tetrahedron.value.position)
})
watch(icosahedronRef, icosahedron => {
  console.log('icosahedron', icosahedron.value.position)
})
watch(octahedronRef, octahedron => {
  console.log('octahedron', octahedron.value.position)
})
watch(dodecahedronRef, dodecahedron => {
  console.log('dodecahedron', dodecahedron.value.position)
})

const tubePath = new CubicBezierCurve3(
  new Vector3(-1, 0, 0),
  new Vector3(-0.5, -1, 0),
  new Vector3(0.5, 1, 0),
  new Vector3(1, 0, 0),
)
</script>

<template>
  <TresCanvas v-bind="state">
    <TresPerspectiveCamera :position="[5, 5, 5]" :fov="75" :aspect="1" :near="0.1" :far="1000" />

    <TresAmbientLight :color="0xffffff" :intensity="1" />
    <TresDirectionalLight :position="[0, 8, 4]" :intensity="0.7" cast-shadow />
    <Plane ref="planeRef" :args="[12, 8]" :position="[-2, 4, 0]" receive-shadow>
      <TresMeshToonMaterial color="teal" />
    </Plane>
    <Box ref="boxRef" :arg0s="[1, 1, 1]" :position="[0, 6, 0]" cast-shadow>
      <TresMeshToonMaterial color="orange" />
    </Box>
    <Sphere ref="sphereRef" :args="[1, 32, 16]" :position="[2, 6, 0]" cast-shadow>
      <TresMeshToonMaterial color="pink" />
    </Sphere>
    <Torus ref="torusRef" :args="[0.75, 0.4, 16, 80]" :position="[-2, 6, 0]" cast-shadow>
      <TresMeshToonMaterial color="cyan" />
    </Torus>
    <TorusKnot ref="torusKnotRef" :args="[0.6, 0.2, 64, 8]" :position="[-2, 6, 2]" cast-shadow>
      <TresMeshToonMaterial color="lime" />
    </TorusKnot>
    <Circle ref="circleRef" :args="[0.9, 32]" :position="[0, 6, 2]" :rotation="[Math.PI, 0, 0]" cast-shadow>
      <TresMeshToonMaterial color="lightsalmon" :side="DoubleSide" />
    </Circle>
    <Cone ref="coneRef" :args="[1, 1, 6]" :position="[2, 6, 2]" :rotation="[Math.PI, 0, 0]" cast-shadow>
      <TresMeshToonMaterial color="slateblue" />
    </Cone>
    <Tube ref="tubeRef" :args="[tubePath, 20, 0.2, 8, false]" :position="[2, 6, -2]" cast-shadow>
      <TresMeshToonMaterial color="lightblue" />
    </Tube>
    <Ring ref="ringRef" :args="[0.5, 1, 32]" :position="[0, 6, -2]" :rotation="[Math.PI, 0, 0]" cast-shadow>
      <TresMeshToonMaterial color="purple" :side="DoubleSide" />
    </Ring>
    <Tetrahedron ref="tetrahedronRef" :args="[1, 0]" :position="[-2, 6, -2]" cast-shadow>
      <TresMeshToonMaterial color="yellow" />
    </Tetrahedron>
    <Icosahedron ref="icosahedronRef" :args="[1, 0]" :position="[-4, 6, -2]" cast-shadow>
      <TresMeshToonMaterial color="red" />
    </Icosahedron>
    <Octahedron ref="octahedronRef" :args="[1, 0]" :position="[-4, 6, 0]" cast-shadow>
      <TresMeshToonMaterial color="greenyellow" />
    </Octahedron>
    <Dodecahedron ref="dodecahedronRef" :args="[1, 0]" :position="[-4, 6, 2]" cast-shadow>
      <TresMeshToonMaterial color="deeppink" />
    </Dodecahedron>
  </TresCanvas>
</template>
