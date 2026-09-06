import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    [key: string]: DefineComponent<any, any, any>;
  }
}

export {};
