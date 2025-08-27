/// <reference types="astro/client" />

declare global {
  interface Window {
    appState: {
      currentPage: string | null;
      navigationHistory: string[];
      isTransitioning: boolean;
    };
    menuState: {
      footerVisible: boolean;
      initialized: boolean;
    };
  }
}

export {};