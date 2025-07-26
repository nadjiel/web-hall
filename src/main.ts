import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { options } from "./options";

import "./style.css";

const div = document.querySelector("#tsparticles")! as HTMLElement;

await loadBasic(tsParticles);

tsParticles.load({
  element: div,
  options: options
});
