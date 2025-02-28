import { computed } from 'vue'
import { OrthographicCamera, PerspectiveCamera } from 'three'
import { describe, test, expect, vi, afterEach } from 'vitest'
import { withSetup } from '/@/utils/test-utils'
import { CameraType, useCamera } from '.'
import { useTresProvider } from '../useTres'

useTresProvider()

/* const [composable, app] = withSetup(() => useCamera()) */
const aspectRatio = computed(() => 1)
/* app.provide('aspect-ratio', aspectRatio) */

describe.skip('useCamera', () => {
  /* afterEach(() => {
    composable.clearCameras()
    app.unmount()
  })
  describe('createCamera', () => {
    test('should create a camera', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Perspective)
      expect(camera).toBeDefined()
    })
    test('should create a perspective camera', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Perspective)
      expect(camera.type).toBe('PerspectiveCamera')
    })
    test('should create a perspective camera with default options', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Perspective)
      expect((camera as PerspectiveCamera).fov).toBe(45)
      expect((camera as PerspectiveCamera).near).toBe(0.1)
      expect((camera as PerspectiveCamera).far).toBe(1000)
    })
    test('should create a perspective camera with custom options', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Perspective, {
        fov: 60,
        near: 1,
        far: 100,
      })
      expect((camera as PerspectiveCamera).fov).toBe(60)
      expect((camera as PerspectiveCamera).near).toBe(1)
      expect((camera as PerspectiveCamera).far).toBe(100)
    })
    test('should create an orthographic camera', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Orthographic)
      expect(camera.type).toBe('OrthographicCamera')
    })
    test('should create an orthographic camera with default options', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Orthographic)
      expect((camera as OrthographicCamera).near).toBe(0.1)
      expect((camera as OrthographicCamera).far).toBe(1000)
      expect((camera as OrthographicCamera).left).toBe(-100)
      expect((camera as OrthographicCamera).right).toBe(100)
      expect((camera as OrthographicCamera).top).toBe(100)
      expect((camera as OrthographicCamera).bottom).toBe(-100)
    })

    test('should create an orthographic camera with custom options', () => {
      const { createCamera } = composable
      const camera = createCamera(CameraType.Orthographic, {
        near: 1,
        far: 100,
        left: -50,
        right: 50,
        top: 50,
        bottom: -50,
      })
      expect((camera as OrthographicCamera).near).toBe(1)
      expect((camera as OrthographicCamera).far).toBe(100)
      expect((camera as OrthographicCamera).left).toBe(-50)
      expect((camera as OrthographicCamera).right).toBe(50)
      expect((camera as OrthographicCamera).top).toBe(50)
      expect((camera as OrthographicCamera).bottom).toBe(-50)
    })
  })
  describe('activeCamera', () => {
    test('should return the latest camera', () => {
      const { createCamera, activeCamera } = composable
      createCamera(CameraType.Perspective)
      expect(activeCamera.value.type).toBe('PerspectiveCamera')
    })
    test('should return the latest camera if used more than once', () => {
      const { createCamera, activeCamera } = composable
      createCamera(CameraType.Perspective)
      createCamera(CameraType.Orthographic)
      expect(activeCamera.value.type).toBe('OrthographicCamera')
    })
  })
  describe('updateCamera', () => {
    test('should update the current camera with aspect ratio change', () => {
      const { activeCamera, createCamera, updateCamera } = composable
      createCamera(CameraType.Perspective)
      const updateProjectionMatrix = vi.spyOn(activeCamera.value, 'updateProjectionMatrix')
      updateCamera()
      expect(updateProjectionMatrix).toHaveBeenCalled()
    })
  }) */
})

// TODO: find a way to test this with useTresProvider approach
