import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions for the VidNexus platform.
 * It enables interactive 3D visuals related to AI-generated videos.
 * 
 * @returns {Object} - Contains methods for initializing and updating 3D scenes.
 */
export function use3D() {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    // Initialize the 3D scene
    initScene();

    // Return cleanup function to dispose of the 3D objects on unmount
    return () => {
      cleanup();
    };
  }, []);

  /
   * Initializes the 3D scene with lighting, camera, and objects.
   */
  const initScene = () => {
    sceneRef.current = new THREE.Scene();

    // Set up camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Set up renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Create lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    // Add 3D object representing AI video technology
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff4500 }); // Orange
    const cube = new THREE.Mesh(geometry, material);
    sceneRef.current.add(cube);

    // Start the animation loop
    animate();
  };

  /
   * Animation loop to render the scene continuously.
   */
  const animate = () => {
    requestAnimationFrame(animate);
    if (sceneRef.current && cameraRef.current && rendererRef.current) {
      // Rotate the cube to represent dynamic AI technology
      if (sceneRef.current.children.length > 1) {
        const cube = sceneRef.current.children[1];
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  /
   * Cleans up the 3D scene to prevent memory leaks.
   */
  const cleanup = () => {
    if (rendererRef.current) {
      rendererRef.current.dispose();
      document.body.removeChild(rendererRef.current.domElement);
    }
    sceneRef.current = null;
    cameraRef.current = null;
    rendererRef.current = null;
  };

  return {
    initScene,
    cleanup,
  };
}