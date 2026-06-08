import type { Preview } from "@storybook/nextjs-vite";

import { DocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";
import React from "react";
import { create } from "storybook/theming";

import "../app/globals.css";

const wukoDark = create({
  base: "dark",
  appBg: "#0f172a",
  appContentBg: "#1e293b",
  appPreviewBg: "#0f172a",
  appBorderColor: "#334155",
  textColor: "#e2e8f0",
  textMutedColor: "#94a3b8",
  colorPrimary: "#5eead4",
  colorSecondary: "#2dd4bf",
  barBg: "#1e293b",
  barTextColor: "#cbd5e1",
  barSelectedColor: "#5eead4",
  barHoverColor: "#94a3b8",
  inputBg: "#1e293b",
  inputBorder: "#334155",
  inputTextColor: "#e2e8f0",
});

const wukoLight = create({
  base: "light",
  appBg: "#f8fafc",
  appContentBg: "#ffffff",
  appPreviewBg: "#f8fafc",
  appBorderColor: "#e2e8f0",
  textColor: "#0f172a",
  textMutedColor: "#64748b",
  colorPrimary: "#0f766e",
  colorSecondary: "#0d9488",
  barBg: "#ffffff",
  barTextColor: "#475569",
  barSelectedColor: "#0f766e",
  barHoverColor: "#64748b",
  inputBg: "#ffffff",
  inputBorder: "#e2e8f0",
  inputTextColor: "#0f172a",
});

const preview: Preview = {
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    docs: {
      container: ({
        children,
        context,
      }: {
        children: React.ReactNode;
        context: DocsContainerProps["context"];
      }) => {
        const storyContext = context.getStoryContext(context.storyById());
        const mode = (storyContext.globals.theme as string) ?? "dark";
        return React.createElement(
          DocsContainer,
          { context, theme: mode === "light" ? wukoLight : wukoDark },
          children,
        );
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) ?? "dark";
      if (typeof document !== "undefined") {
        document.documentElement.dataset.theme = theme;
      }
      return Story();
    },
  ],
};

export default preview;
