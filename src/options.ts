import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const options: ISourceOptions = {
  background: {
    color: "#212121",
  },
  particles: {
    shape: {
      type: "circle",
    },
    color: {
      value: ["#0084D1"],
    },
    size: {
      animation: {
        enable: true,
        startValue: "min",
        speed: 1,
      },
      value: {
        min: 50,
        max: 200,
      },
    },
    move: {
      enable: true,
      direction: MoveDirection.left,
      angle: {
        value: 5,
        offset: 0,
      },
      speed: {
        min: 2,
        max: 3,
      },
      outModes: {
        default: OutMode.destroy,
        bottom: OutMode.none,
      },
    },
  },
  emitters: {
    position: {
      x: 100,
      y: 0,
    },
    rate: {
      quantity: 1,
      delay: 1,
    },
  },
}
