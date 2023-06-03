import addDocument from "../actions/add";

const seed = [
  {
    title: "Luminastra",
    body: `
Introducing the Astrolume Quantum Radiator - Revolutionizing Energy Transfer and Illumination!
Product Description: The Astrolume Quantum Radiator is a groundbreaking marvel of scientific ingenuity, transcending the boundaries of conventional technology to provide a transformative experience like no other. This visionary product embodies the convergence of advanced quantum principles and luminous innovation, propelling humanity into a future where energy transfer and illumination reach unparalleled heights.
At its core, the Astrolume Quantum Radiator harnesses the power of celestial energy, drawing upon the ethereal cosmic forces that permeate the universe. Through a complex interplay of quantum mechanics and cutting-edge engineering, this radiant masterpiece captivates with its ability to transmit and distribute energy wirelessly, effortlessly illuminating vast spaces with pure, ethereal light.
The Astrolume Quantum Radiator functions as a celestial gateway, harmonizing with the invisible symphony of celestial bodies. Its sophisticated transmutation matrix interfaces directly with the cosmic fabric, resonating with the harmonious frequencies emitted by distant stars and celestial entities. This harmonization generates an intricate quantum flux, enabling the device to tap into limitless reserves of clean, sustainable energy.
Unleashing a spectrum of light that transcends the limitations of ordinary illumination, the Astrolume Quantum Radiator evokes awe-inspiring vistas of vibrant luminescence. Its proprietary Quantum Chroma Emitters (QCE) imbue each ray of light with a kaleidoscope of colors, ranging from the soothing hues of a tranquil dawn to the majestic radiance of a celestial supernova. Immerse yourself in a symphony of light, where shadows fade away, and every corner of your world is bathed in sublime luminosity.
The reason for the creation of the Astrolume Quantum Radiator is to redefine humanity's relationship with energy and light. It emerged from a collective desire to break free from the confines of fossil fuels and traditional power grids, embarking on a journey towards a sustainable future. By leveraging the extraordinary power of the cosmos, this product represents a bold leap forward in the pursuit of clean energy solutions, empowering individuals, communities, and nations to embrace an enlightened path of harmony with nature.
Name: Luminastra - The Celestial Symphony
Luminastra, derived from the Latin words "lumen" meaning light and "astra" meaning stars, perfectly captures the essence of this transformative invention. Just as the stars illuminate the night sky, Luminastra illuminates our lives with a celestial symphony of vibrant, sustainable energy. Its name embodies the fusion of cosmic radiance and scientific brilliance, inviting users to embark on a voyage of discovery and inspiration as they witness the birth of a new era in energy transfer and illumination.
`,
  },
  {
    title: "Luminex VitaGlow",
    body: `
Introducing the revolutionary "Luminex VitaGlow" Energy Enhancer and Mind Booster! This extraordinary device was born out of a desire to unlock the true potential of the human mind and body, empowering individuals to reach new heights of productivity, creativity, and overall well-being.
The Luminex VitaGlow harnesses the power of advanced neuro-energetic technology, seamlessly blending the realms of science and imagination. It incorporates a fusion of three key components: the Lumina Matrix, the Neural Oscillator, and the VitaWave Catalyst, working in perfect harmony to redefine the boundaries of human capabilities.
At the heart of this groundbreaking innovation lies the Lumina Matrix, a complex neural interface that delicately interacts with the intricate network of your brain. This interface, made up of an array of nanoscopic bio-sensors, gently stimulates the neural pathways responsible for cognition, memory, and emotional well-being. Through a series of imperceptible vibrations, it amplifies neural signals, creating a heightened state of mental clarity and focus.
Complementing the Lumina Matrix is the Neural Oscillator, a marvel of engineered precision. This extraordinary device generates a symphony of electromagnetic frequencies, meticulously calibrated to induce the ideal brainwave patterns for specific tasks. Need to excel in a creative pursuit? Engage the "Ingenium" mode, and experience a surge of inspiration and imagination. Struggling with concentration? Activate the "Concentra" mode, and feel your mind sharpen and your productivity soar.
The VitaWave Catalyst, the final piece of this technological masterpiece, utilizes an extraordinary blend of organic compounds and quantum resonators. Through a precise and proprietary formula, it infuses the body with a balanced surge of vitalizing energy, rejuvenating cells, and optimizing metabolic functions. This results in an overall enhancement of physical stamina, mental resilience, and emotional balance, allowing you to perform at your absolute best, day after day.
The Luminex VitaGlow was born from a profound belief in the boundless potential of humanity. It was created to shatter the constraints that hold us back and propel us toward greatness. Whether you're a student seeking academic excellence, an artist yearning for creative breakthroughs, or a professional aiming to maximize productivity, the Luminex VitaGlow will become your ultimate ally in achieving your dreams.
Experience a life-altering transformation as you unlock the hidden depths of your mind and awaken the true power within. Embrace the future with the Luminex VitaGlow Energy Enhancer and Mind Booster – a testament to the limitless possibilities that lie within each and every one of us.
`,
  },
  {
    title: "ZephyrSynth",
    body: `
Introducing the revolutionary new product: ZephyrSynth™
Product Description: ZephyrSynth™ is an awe-inspiring innovation that has transcended the boundaries of traditional musical instruments, propelling musicians into a realm of unparalleled creativity and sonic exploration. This groundbreaking device is a harmonious fusion of cutting-edge technology and ethereal aesthetics, designed to revolutionize the way we perceive and interact with music.
At its core, ZephyrSynth™ is a sentient instrument that harnesses the power of sound manipulation through the ethereal energy of the Zephyrith. The Zephyrith, an otherworldly force, resides within the depths of the device, imbuing it with an almost mystical aura. When activated, ZephyrSynth™ establishes a profound connection between the musician and the sonic universe, channeling the very essence of their imagination into sound waves that transcend the ordinary.
The device features an expanse of shimmering iridescent keys, each intricately crafted with Zephyr Crystals, which respond sensitively to the touch of the musician. As the artist's fingers dance upon the keys, the Zephyr Crystals resonate, transmitting ethereal vibrations that awaken the latent creativity within. This unique interaction triggers a cascade of ethereal harmonies that envelop the listener, transporting them to realms never before imagined.
ZephyrSynth™ boasts an innovative HoloTone™ display, a holographic projection system that materializes vibrant and fluid visual representations of the music being played. These holograms, shaped by the artist's sonic intentions, dance and intertwine in a captivating display, offering a multisensory experience that blurs the boundaries between sound and sight. As artists explore the vast sonic landscapes, the HoloTone™ display becomes a canvas for their imagination, a visual symphony that adds depth and color to their musical journey.
One of the most extraordinary features of ZephyrSynth™ is the Harmonic Intuition Engine (HIE). This remarkable engine taps into the subconscious musical instincts of the musician, unlocking hidden melodies, harmonies, and rhythms that lie dormant within their mind. The HIE analyzes the artist's playing style, adapting and enhancing their compositions with the ethereal touch of the Zephyrith. This symbiotic relationship between human and machine propels the artist's creativity to unprecedented heights, enabling them to effortlessly transcend conventional musical boundaries.
ZephyrSynth™ serves as a catalyst for the evolution of music, empowering musicians to push the boundaries of their craft and embark on a sonic odyssey like no other. It celebrates the spirit of experimentation, urging artists to embrace their audacity and venture into uncharted musical territories. With ZephyrSynth™, artists become sonic explorers, charting new frontiers of creativity and immersing audiences in captivating and transformative musical experiences.
`,
  },
];

async function main() {
  try {
    for (const data of seed) {
      await addDocument(data.title, data.body);
    }
  } catch (err) {
    console.log("> Error while seeding Weaviate:", err);
  }
}

main()
  .then(() => console.log("> Successfully added populated data to Weaviate"))
  .catch((err) => console.log("> Error while running command:", err));
