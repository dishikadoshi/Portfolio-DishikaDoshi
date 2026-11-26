import {Canvas,useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {useMemo,useRef} from 'react'
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}
const vs=`uniform float t,p;attribute float s;varying float a;
void main(){vec3 q=position;float d=length(q.xz);
float w=sin(q.x*.35+t*.35)*.7+cos(q.z*.3-t*.25)*.6+sin(d*.45-t*.5)*(.5+p*2.);
q.y=w*(1.+p*1.4)-2.;
vec4 m=modelViewMatrix*vec4(q,1.);gl_PointSize=(1.2+s*1.8)*(14./-m.z);
a=smoothstep(34.,6.,-m.z)*(.25+s*.75);gl_Position=projectionMatrix*m;}`
const fs=`varying float a;void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(mix(vec3(.56,.66,1.),vec3(.95),a*.6),a);}`
function Field(){
  const g=useRef(),mat=useRef()
  const [pos,seed]=useMemo(()=>{const n=170,p=new Float32Array(n*n*3),s=new Float32Array(n*n);let i=0;const r=rng(20260)
    for(let x=0;x<n;x++)for(let z=0;z<n;z++){p.set([(x-n/2)*.32,0,(z-n/2)*.32],i*3);s[i++]=r()}return[p,s]},[])
  useFrame((st,dt)=>{
    const p=THREE.MathUtils.clamp(window.scrollY/(window.innerHeight*1.1),0,1)
    mat.current.uniforms.t.value=st.clock.elapsedTime;mat.current.uniforms.p.value=p
    g.current.rotation.y=THREE.MathUtils.damp(g.current.rotation.y,st.pointer.x*.12+p*.6,2.5,dt)
    st.camera.position.set(0,THREE.MathUtils.damp(st.camera.position.y,3.2-p*1.8+st.pointer.y*.4,3,dt),11-p*6)
    st.camera.lookAt(0,-1+p,0)})
  return <points ref={g}><bufferGeometry><bufferAttribute attach="attributes-position" array={pos} count={pos.length/3} itemSize={3}/>
    <bufferAttribute attach="attributes-s" array={seed} count={seed.length} itemSize={1}/></bufferGeometry>
    <shaderMaterial ref={mat} vertexShader={vs} fragmentShader={fs} transparent depthWrite={false} blending={THREE.AdditiveBlending} uniforms={{t:{value:0},p:{value:0}}}/></points>
}
export default function Scene(){
  return <Canvas className="webgl" dpr={[1,2]} camera={{position:[0,3.2,11],fov:50}} onCreated={({camera})=>camera.lookAt(0,-1,0)}><color attach="background" args={['#0b0c0e']}/><Field/></Canvas>
}