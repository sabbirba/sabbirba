"use client";

import { useEffect } from "react";
export default function UnregisterServiceWorker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    (async () => {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        if (regs && regs.length) {
          for (const reg of regs) {
            try {
              await reg.unregister();
            } catch (e) {}
          }
        }
      } catch (err) {}
    })();
  }, []);
  return null;
}
