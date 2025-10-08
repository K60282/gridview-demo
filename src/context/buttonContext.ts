import { createContext } from "react";

export interface ContextValue {
  isActive: (id: string) => boolean;
  getColor: (id: string) => string;
  toggle: (id: string, ms?: number) => void;
}

export const ButtonContext = createContext<ContextValue | null>(null);
