// store.ts
import { writable, type Writable } from 'svelte/store';
export const exerciseEnabled = writable<boolean[]>(Array(10).fill(true));
export const timer: Writable<number> = writable(600);