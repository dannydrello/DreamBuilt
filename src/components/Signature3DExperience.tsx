import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useTheme } from '../context/ThemeContext';

interface StageMeta {
  number: string;
  name: string;
  tagline: string;
  description: string;
  clientPerspective: string;
}

const STAGES: StageMeta[] = [
  {
    number: '01',
    name: 'Architectural Line Drawing',
    tagline: 'Translating human rituals into pure geometric boundary and solar orientation',
    description: 'We begin with primary architectural lines: capturing sightlines, privacy barriers, and solar paths. Fine structural drafts establish the datum of the plinth and the sheltered courtyard.',
    clientPerspective: 'In this stage, you review spatial flow and room adjacencies without distraction from decorative materials.'
  },
  {
    number: '02',
    name: 'Physical Massing Study',
    tagline: 'Evaluating residential volume, ceiling heights, and landscape presence',
    description: 'Crafted like an architectural studio basswood study model. Solid unadorned volumes reveal proportion, sunlight falloff, and how the residence anchors naturally to the site contours.',
    clientPerspective: 'You feel the physical scale of the roof overhangs, protected entryways, and courtyard enclosure.'
  },
  {
    number: '03',
    name: 'Resolved Architecture & Glazing',
    tagline: 'Specifying limestone plinths, cedar cladding, and expansive high-performance glass',
    description: 'The structure resolves into authentic tactile materiality. Purbeck limestone anchors the ground, cedar battens wrap the living volume, and floor-to-ceiling glazing opens the interior to garden views.',
    clientPerspective: 'You begin to see exactly how your home will look and feel from the garden and the approach.'
  },
  {
    number: '04',
    name: 'Warm Inhabitation & Landscape',
    tagline: 'Interior warmth, glowing hearth, reflecting water, and mature foliage',
    description: 'The house comes alive as an inhabited home. Warm interior illumination washes across oak joinery, the central fireplace glows, and the courtyard garden reflects changing skies.',
    clientPerspective: 'You can imagine waking up, brewing coffee, and stepping out onto the sheltered terrace.'
  }
];

export const Signature3DExperience: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isEvening, setIsEvening] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const stageGroupsRef = useRef<{
    lineGroup: THREE.Group;
    massGroup: THREE.Group;
    resolvedGroup: THREE.Group;
    inhabitedGroup: THREE.Group;
  } | null>(null);
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    dirLight: THREE.DirectionalLight;
    interiorLights: THREE.PointLight[];
  } | null>(null);
  const animFrameIdRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);

  // Initialize Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === 'dark' ? 0x121311 : 0xF4F1EB);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(16, 11, 18);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.08;
    controls.minDistance = 8;
    controls.maxDistance = 35;
    controls.target.set(0, 1.5, 0);
    controlsRef.current = controls;

    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.8);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xFFF7EB, 1.6);
    dirLight.position.set(14, 18, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    const lineGroup = new THREE.Group();
    const massGroup = new THREE.Group();
    const resolvedGroup = new THREE.Group();
    const inhabitedGroup = new THREE.Group();

    scene.add(lineGroup);
    scene.add(massGroup);
    scene.add(resolvedGroup);
    scene.add(inhabitedGroup);

    stageGroupsRef.current = { lineGroup, massGroup, resolvedGroup, inhabitedGroup };

    // Geometries
    const plinthGeo = new THREE.BoxGeometry(14, 0.4, 11);
    const plinthPos = new THREE.Vector3(0, 0.2, 0);
    const livingGeo = new THREE.BoxGeometry(9, 3.2, 4.5);
    const livingPos = new THREE.Vector3(-1.5, 2.0, 1.8);
    const bedGeo = new THREE.BoxGeometry(4.2, 2.8, 6.5);
    const bedPos = new THREE.Vector3(3.2, 1.8, -1.2);
    const roofLivingGeo = new THREE.BoxGeometry(10.2, 0.35, 5.8);
    const roofLivingPos = new THREE.Vector3(-1.5, 3.75, 1.8);
    const roofBedGeo = new THREE.BoxGeometry(5.0, 0.3, 7.2);
    const roofBedPos = new THREE.Vector3(3.2, 3.35, -1.2);
    const basinGeo = new THREE.BoxGeometry(4, 0.15, 3);
    const basinPos = new THREE.Vector3(-0.8, 0.42, -1.8);
    const glassGeo = new THREE.BoxGeometry(7.8, 2.7, 0.08);
    const glassPos = new THREE.Vector3(-1.5, 1.85, 4.05);

    // 1. Line Drawing
    const lineMat = new THREE.LineBasicMaterial({
      color: theme === 'dark' ? 0xD8D0C3 : 0x20221F,
      transparent: true,
      opacity: 0.85
    });
    const fineLineMat = new THREE.LineBasicMaterial({ color: 0x977B58, transparent: true, opacity: 0.55 });

    const addEdges = (geo: THREE.BufferGeometry, pos: THREE.Vector3, mat = lineMat, group = lineGroup) => {
      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(edges, mat);
      line.position.copy(pos);
      group.add(line);
      return line;
    };

    addEdges(plinthGeo, plinthPos);
    addEdges(livingGeo, livingPos);
    addEdges(bedGeo, bedPos);
    addEdges(roofLivingGeo, roofLivingPos);
    addEdges(roofBedGeo, roofBedPos);
    addEdges(basinGeo, basinPos);
    addEdges(glassGeo, glassPos, fineLineMat);

    const gridHelper = new THREE.GridHelper(20, 20, 0x977B58, 0x484B46);
    gridHelper.position.y = 0.01;
    lineGroup.add(gridHelper);

    // 2. Massing Model
    const woodBoardMat = new THREE.MeshStandardMaterial({ color: 0xE2D9C8, roughness: 0.85, metalness: 0.05 });
    const woodRoofMat = new THREE.MeshStandardMaterial({ color: 0xD0C4AF, roughness: 0.9 });
    const massPlinthMat = new THREE.MeshStandardMaterial({ color: 0xEDE7DC, roughness: 0.92 });

    const addMassMesh = (geo: THREE.BufferGeometry, mat: THREE.Material, pos: THREE.Vector3) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      massGroup.add(mesh);
      return mesh;
    };

    addMassMesh(plinthGeo, massPlinthMat, plinthPos);
    addMassMesh(livingGeo, woodBoardMat, livingPos);
    addMassMesh(bedGeo, woodBoardMat, bedPos);
    addMassMesh(roofLivingGeo, woodRoofMat, roofLivingPos);
    addMassMesh(roofBedGeo, woodRoofMat, roofBedPos);
    addMassMesh(basinGeo, woodRoofMat, basinPos);

    // 3. Resolved Materials & Glazing
    const limestoneMat = new THREE.MeshStandardMaterial({ color: 0xC6BEB0, roughness: 0.88 });
    const cedarWallMat = new THREE.MeshStandardMaterial({ color: 0x7E5B3D, roughness: 0.75 });
    const darkBronzeMat = new THREE.MeshStandardMaterial({ color: 0x2A2722, roughness: 0.4, metalness: 0.6 });
    const zincRoofMat = new THREE.MeshStandardMaterial({ color: 0x484B46, roughness: 0.55, metalness: 0.35 });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xB5D2DC,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6
    });

    const addResolvedMesh = (geo: THREE.BufferGeometry, mat: THREE.Material, pos: THREE.Vector3) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      resolvedGroup.add(mesh);
      return mesh;
    };

    addResolvedMesh(plinthGeo, limestoneMat, plinthPos);
    addResolvedMesh(livingGeo, cedarWallMat, livingPos);
    addResolvedMesh(bedGeo, limestoneMat, bedPos);
    addResolvedMesh(roofLivingGeo, zincRoofMat, roofLivingPos);
    addResolvedMesh(roofBedGeo, zincRoofMat, roofBedPos);
    addResolvedMesh(glassGeo, glassMat, glassPos);

    const waterMat = new THREE.MeshStandardMaterial({ color: 0x3E555C, roughness: 0.1, metalness: 0.8 });
    addResolvedMesh(basinGeo, waterMat, basinPos);

    // Window mullions
    const mullionGeo1 = new THREE.BoxGeometry(0.08, 2.7, 0.12);
    const m1 = new THREE.Mesh(mullionGeo1, darkBronzeMat);
    m1.position.set(-3.5, 1.85, 4.07);
    resolvedGroup.add(m1);
    const m2 = new THREE.Mesh(mullionGeo1, darkBronzeMat);
    m2.position.set(-1.5, 1.85, 4.07);
    resolvedGroup.add(m2);
    const m3 = new THREE.Mesh(mullionGeo1, darkBronzeMat);
    m3.position.set(0.5, 1.85, 4.07);
    resolvedGroup.add(m3);

    // 4. Inhabited Home
    const cloneGroup = resolvedGroup.clone(true);
    inhabitedGroup.add(cloneGroup);

    // Olive Tree
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.22, 2.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x483D33, roughness: 0.9 })
    );
    trunk.position.set(-0.8, 1.4, -0.2);
    trunk.castShadow = true;
    inhabitedGroup.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x58664D, roughness: 0.82 });
    const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), foliageMat);
    f1.position.set(-0.8, 2.8, -0.2);
    f1.scale.set(1.2, 0.9, 1.1);
    f1.castShadow = true;
    inhabitedGroup.add(f1);

    // Warm Interior Point Lights
    const interiorLights: THREE.PointLight[] = [];
    const hearthLight = new THREE.PointLight(0xFF8B3D, 2.2, 8, 1.5);
    hearthLight.position.set(-2, 1.5, 2.2);
    inhabitedGroup.add(hearthLight);
    interiorLights.push(hearthLight);

    const diningLight = new THREE.PointLight(0xFFC785, 1.8, 7, 1.5);
    diningLight.position.set(-0.2, 2.2, 1.2);
    inhabitedGroup.add(diningLight);
    interiorLights.push(diningLight);

    lightsRef.current = { ambient, dirLight, interiorLights };

    // Initial Stage
    lineGroup.visible = true;
    massGroup.visible = false;
    resolvedGroup.visible = false;
    inhabitedGroup.visible = false;

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;
      clock.getDelta();

      if (controls && isRotating) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
      } else if (controls) {
        controls.autoRotate = false;
      }

      controls?.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Update theme background in Three.js
  useEffect(() => {
    if (!sceneRef.current) return;
    const isDark = theme === 'dark';
    if (activeStage === 1) {
      sceneRef.current.background = new THREE.Color(isDark ? 0x121311 : 0xF4F1EB);
    } else if (activeStage === 2) {
      sceneRef.current.background = new THREE.Color(isDark ? 0x161815 : 0xF0ECE4);
    } else if (activeStage === 3 || activeStage === 4) {
      sceneRef.current.background = new THREE.Color(isEvening || isDark ? 0x121311 : 0xEDE8DF);
    }
  }, [theme, activeStage, isEvening]);

  // Stage changes
  useEffect(() => {
    const groups = stageGroupsRef.current;
    if (!groups) return;

    groups.lineGroup.visible = activeStage === 1;
    groups.massGroup.visible = activeStage === 2;
    groups.resolvedGroup.visible = activeStage === 3;
    groups.inhabitedGroup.visible = activeStage === 4;

    if (lightsRef.current) {
      const { ambient, dirLight, interiorLights } = lightsRef.current;
      if (isEvening && (activeStage === 3 || activeStage === 4)) {
        ambient.intensity = 0.25;
        ambient.color.setHex(0x3B4856);
        dirLight.intensity = 0.4;
        dirLight.color.setHex(0x5E6D7E);
        interiorLights.forEach((light) => {
          light.intensity = 3.5;
        });
      } else {
        ambient.intensity = activeStage === 1 ? 1.0 : 0.8;
        ambient.color.setHex(0xFFFFFF);
        dirLight.intensity = activeStage === 1 ? 0.8 : 1.6;
        dirLight.color.setHex(0xFFF7EB);
        interiorLights.forEach((light) => {
          light.intensity = 1.6;
        });
      }
    }
  }, [activeStage, isEvening]);

  const currentStageMeta = STAGES[activeStage - 1];

  return (
    <section 
      id="spatial-experience" 
      aria-label="From imagination to inhabitation interactive 3D model study"
      className="relative bg-[#F4F1EB] dark:bg-[#121311] text-[#20221F] dark:text-[#F4F1EB] border-y border-[#D8D0C3] dark:border-white/10 py-20 px-4 md:px-8 lg:px-12 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D8D0C3] dark:border-white/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#977B58] font-mono font-medium mb-2">
              Signature 3D Experience · Conceptual Study
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#20221F] dark:text-white tracking-tight">
              From Imagination to Inhabitation
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-6 text-sm text-[#20221F]/70 dark:text-white/60 font-mono">
            <span className="hidden sm:inline">Interactive 4-Stage Study</span>
            <span className="text-[#977B58]">Rotate · Inspect · Transform</span>
          </div>
        </div>

        {/* Main 3D Container & Editorial Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 3D Viewport Column */}
          <div 
            ref={containerRef}
            className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#EAE5DC] dark:bg-[#1A1C19] border border-[#D8D0C3] dark:border-white/10 rounded-sm overflow-hidden shadow-inner group"
          >
            {webglSupported ? (
              <canvas 
                ref={canvasRef} 
                className="w-full h-full cursor-grab active:cursor-grabbing block"
                aria-label={`Interactive 3D model: ${currentStageMeta.name}`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-sm font-serif mb-1">3D Conceptual Study</span>
                <p className="text-xs text-white/70 max-w-md font-mono">
                  Hardware 3D acceleration suspended.
                </p>
              </div>
            )}

            {/* Overlaid Viewport HUD Controls */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-mono font-medium bg-[#20221F]/90 text-white backdrop-blur-sm border border-white/10 rounded-sm">
                Stage {currentStageMeta.number} / 04
              </span>
              <span className="hidden sm:inline px-2 py-1 text-[11px] font-mono text-white/90 bg-[#20221F]/70 backdrop-blur-sm border border-white/10 rounded-sm">
                Drag to rotate · Scroll to zoom
              </span>
            </div>

            {/* Bottom Floating Control Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 bg-[#20221F]/90 dark:bg-[#121311]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-sm text-white">
              
              {/* Stage Stepper Tabs */}
              <div className="flex items-center gap-1 sm:gap-2">
                {STAGES.map((s, idx) => {
                  const stageNum = idx + 1;
                  const isActive = activeStage === stageNum;
                  return (
                    <button
                      key={s.number}
                      onClick={() => setActiveStage(stageNum)}
                      className={`px-2.5 sm:px-3 py-1 text-xs font-mono font-medium transition-all rounded-sm whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#F4F1EB] text-[#20221F] font-semibold shadow-sm'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                      aria-label={`Switch to stage ${s.number}: ${s.name}`}
                    >
                      <span className="text-[10px] mr-1 opacity-70">{s.number}</span>
                      <span className="hidden md:inline">{s.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Auxiliary Controls (Day/Evening + Auto-rotate) */}
              <div className="flex items-center gap-2">
                {(activeStage === 3 || activeStage === 4) && (
                  <button
                    onClick={() => setIsEvening(!isEvening)}
                    className="px-2.5 py-1 text-xs border border-white/20 hover:border-white/40 text-white rounded-sm transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer font-mono"
                  >
                    <span>{isEvening ? '☀️ Day' : '🌙 Dusk'}</span>
                  </button>
                )}

                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`px-2.5 py-1 text-xs font-mono border border-white/20 hover:border-white/40 rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                    isRotating ? 'text-white bg-white/10' : 'text-white/60'
                  }`}
                >
                  {isRotating ? 'Pause Orbit' : 'Orbit'}
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Explanation Column */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch bg-[#FAF8F5] dark:bg-[#1A1C19] border border-[#D8D0C3] dark:border-white/10 p-6 sm:p-8 rounded-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D0C3] dark:border-white/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#977B58]">
                  Transformation {currentStageMeta.number}
                </span>
                <span className="text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
                  Concept Study
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#20221F] dark:text-white mb-3 leading-snug">
                {currentStageMeta.name}
              </h3>

              <p className="text-sm font-serif italic text-[#68705C] dark:text-[#B79A73] mb-4 leading-relaxed">
                "{currentStageMeta.tagline}"
              </p>

              <div className="space-y-4 text-xs text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans">
                <p>{currentStageMeta.description}</p>
                <div className="p-3.5 bg-[#F4F1EB] dark:bg-[#121311] border-l-2 border-[#977B58] text-[11px] text-[#20221F]/90 dark:text-white/80">
                  <span className="font-semibold block text-[#20221F] dark:text-white mb-0.5">
                    Your Experience as Client:
                  </span>
                  {currentStageMeta.clientPerspective}
                </div>
              </div>
            </div>

            {/* Quick Controls */}
            <div className="pt-6 mt-6 border-t border-[#D8D0C3] dark:border-white/10 flex items-center justify-between font-mono">
              <button
                disabled={activeStage === 1}
                onClick={() => setActiveStage((prev) => Math.max(1, prev - 1))}
                className="text-xs font-medium text-[#20221F] dark:text-white disabled:opacity-30 hover:text-[#977B58] transition-colors cursor-pointer"
              >
                ← Prev
              </button>

              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveStage(step)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      activeStage === step ? 'w-5 bg-[#977B58]' : 'bg-[#D8D0C3] dark:bg-white/20'
                    }`}
                    aria-label={`Jump to stage ${step}`}
                  />
                ))}
              </div>

              <button
                disabled={activeStage === 4}
                onClick={() => setActiveStage((prev) => Math.min(4, prev + 1))}
                className="text-xs font-medium text-[#20221F] dark:text-white disabled:opacity-30 hover:text-[#977B58] transition-colors cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
