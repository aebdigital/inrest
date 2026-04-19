import { initForms } from "./components/forms";

export function initMain(root = document) {
  if (typeof root?.querySelectorAll === "function") {
    initForms(root);
  }

  if (typeof window !== "undefined") {
    window.INREST = window.INREST || {};
    window.INREST.mainInitialized = true;
  }
}

if (typeof window !== "undefined") {
  window.INREST = window.INREST || {};
  window.INREST.initMain = initMain;
}
