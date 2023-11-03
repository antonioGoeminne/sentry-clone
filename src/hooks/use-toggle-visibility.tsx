import { useState } from "react";

export const useToggleVisibility = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggleVisibility = () => setOpen(!open);

  return [open, toggleVisibility];
};
