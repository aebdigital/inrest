import { initMain } from "./main";

export async function initFallback() {
  try {
    initMain();
    return true;
  } catch (error) {
    console.error("INREST fallback initialization failed.", error);
    return false;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.INREST?.mainInitialized) {
      initFallback();
    }
  });
}
