declare module "*.svelte" {
  import { SvelteComponentTyped } from "svelte";
  export default class Component extends SvelteComponentTyped<any> {}
}

declare module "*.png" {
  const value: string;
  export default value;
}
