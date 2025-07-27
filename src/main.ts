import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";

import { options } from "./options";

import "./style.css";

const div = document.querySelector("#tsparticles")! as HTMLElement;

await loadBasic(tsParticles);
await loadEmittersPlugin(tsParticles);

tsParticles.load({
  element: div,
  options: options
});
