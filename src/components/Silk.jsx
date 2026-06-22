/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect, useState } from 'react';
import { Color } from 'three';

const hexToNormalizedRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef(function SilkPlane(
  { uniforms, color, speed, scale, noiseIntensity, rotation, animate },
  ref
) {
  const { viewport } = useThree();

  // Cor-alvo: muda só quando o tema troca. Não recria o material.
  const targetColor = useMemo(() => new Color(...hexToNormalizedRGB(color)), [color]);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  // Sincroniza uniforms escalares mutando o objeto existente (sem recriar material).
  useEffect(() => {
    uniforms.uSpeed.value = speed;
    uniforms.uScale.value = scale;
    uniforms.uNoiseIntensity.value = noiseIntensity;
    uniforms.uRotation.value = rotation;
  }, [uniforms, speed, scale, noiseIntensity, rotation]);

  useFrame((_, delta) => {
    const mat = ref.current?.material;
    if (!mat) return;
    const u = mat.uniforms;

    // Tempo avança quando a aba está visível (frameloop "always").
    if (animate) u.uTime.value += 0.1 * delta;

    // Lerp suave da cor atual rumo à cor-alvo — transição de tema sem tranco.
    const cur = u.uColor.value;
    const dist = Math.abs(cur.r - targetColor.r) + Math.abs(cur.g - targetColor.g) + Math.abs(cur.b - targetColor.b);
    if (dist > 0.001) {
      cur.lerp(targetColor, Math.min(1, delta * 5));
    } else if (!cur.equals(targetColor)) {
      cur.copy(targetColor);
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
});
SilkPlane.displayName = 'SilkPlane';

const Silk = ({ speed = 5, scale = 1, color = '#7B7481', noiseIntensity = 1.5, rotation = 0, dpr = [1, 2] }) => {
  const meshRef = useRef();
  const [frameloop, setFrameloop] = useState('always');

  // Uniforms criados UMA única vez. Trocar de tema nunca recria o material WebGL
  // (que era o que travava no clique) — só atualizamos os valores in-place.
  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Anima continuamente enquanto a aba está visível; pausa totalmente o render
  // quando a aba está oculta (a GPU descansa em segundo plano).
  useEffect(() => {
    const apply = () => setFrameloop(document.hidden ? 'never' : 'always');
    apply();
    document.addEventListener('visibilitychange', apply);
    return () => document.removeEventListener('visibilitychange', apply);
  }, []);

  return (
    <Canvas dpr={dpr} frameloop={frameloop}>
      <SilkPlane
        ref={meshRef}
        uniforms={uniforms}
        color={color}
        speed={speed}
        scale={scale}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
        animate={frameloop === 'always'}
      />
    </Canvas>
  );
};

export default Silk;
