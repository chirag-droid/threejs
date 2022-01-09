import { Suspense } from 'react';

import { ContactShadows, Environment, Html, Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { NextPage } from 'next';
import * as THREE from 'three';

import Macbook from '../components/Macbook';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [5, 5, 13] }}
      className={styles.container}
    >
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#d25578" />
      <Suspense
        fallback={
          <Html className={styles.loader}>
            <Loader />
          </Html>
        }
      >
        <Macbook />
        <Environment preset="city" />
        <ContactShadows
          setRotationFromEuler={() => new THREE.Euler(Math.PI / 2, 0, 0)}
          position={[0, -4.5, 0]}
          opacity={0.4}
          width={20}
          height={20}
          blur={2}
          far={4.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default Home;
