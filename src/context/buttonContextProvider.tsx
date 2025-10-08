import { ButtonContext, type ContextValue } from "./buttonContext";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { getRandomColor } from "../helpers";

interface Props {
  children: ReactNode;
}

type ButtonInfo = { active: boolean; color: string };
type ButtonState = Record<string, ButtonInfo>;

export const ButtonContextProvider: FC<Props> = ({ children }) => {
  const [button, setButton] = useState<ButtonState>({});

  const timersRef = useRef<
    Record<string, ReturnType<typeof setTimeout> | null>
  >({});

  const setActive = (id: string, active: boolean) =>
    setButton((prev) => ({
      ...prev,
      [id]: { active, color: getRandomColor() },
    }));

  const toggle = useCallback((id: string, ms: number = 2000) => {
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
    }

    setActive(id, true);

    timersRef.current[id] = setTimeout(() => {
      setActive(id, false);
      timersRef.current[id] = null;
    }, ms);
  }, []);

  const ctxValue = useMemo<ContextValue>(
    () => ({
      isActive: (id: string) => button[id]?.active,
      getColor: (id: string) => button[id]?.color,
      toggle,
    }),
    [button, toggle]
  );

  return (
    <ButtonContext.Provider value={ctxValue}>{children}</ButtonContext.Provider>
  );
};
