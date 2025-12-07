// demo/src/types.d.ts
declare module "yoga-exercises" {
  import type { SvelteComponentTyped } from "svelte";
  import type { Writable } from "svelte/store";

  export class CycleExercises extends SvelteComponentTyped<any> {}
  export class SetValue extends SvelteComponentTyped<any> {}
  export class Popup extends SvelteComponentTyped<any> {}
  export class SelectExercisesArea extends SvelteComponentTyped<any> {}
  export class NextPageButton extends SvelteComponentTyped<any> {}

  export const timer: Writable<number>;
  export const rotateTimer: Writable<number>;
  export const exerciseEnabled: Writable<boolean[]>;
  export const pastFeelingReported: Writable<number>;
  export const currentFeelingReported: Writable<number>;
  export const statusMessage: Writable<string>;
}
