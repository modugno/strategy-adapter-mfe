import { AppShellType } from "./types";

// detectAppShellType.ts
export function detectAppShellType(): AppShellType | null {
  if ((window as any).native) {
    return 'webview';
  } else if (window.location.href.includes('canal.com')) {
    return 'canal';
  } else if (window.location.href.includes('localhost:')) {
    return 'localhost';
  }
  return null
}
