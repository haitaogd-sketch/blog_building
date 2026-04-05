import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Neo-brutalism 主题色 - 鲜艳、高对比度
      colors: {
        // 主色调
        'neo-yellow': '#FFE156',
        'neo-pink': '#FF6B9D',
        'neo-blue': '#4ECDC4',
        'neo-orange': '#FF9F43',
        'neo-green': '#26DE81',
        'neo-purple': '#A55EEA',
        'neo-red': '#FC5C65',
        // 深色背景
        'neo-dark': '#1A1A2E',
        'neo-darker': '#16213E',
        // 边框和文字
        'neo-black': '#0F0F0F',
        'neo-white': '#FFFFFF',
        // 原有的
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
      },
      // Neo-brutalism 边框
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      // Neo-brutalism 阴影 - 偏移的实色阴影
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #0F0F0F',
        'neo': '6px 6px 0px 0px #0F0F0F',
        'neo-lg': '8px 8px 0px 0px #0F0F0F',
        'neo-xl': '10px 10px 0px 0px #0F0F0F',
        'neo-2xl': '12px 12px 0px 0px #0F0F0F',
        'neo-yellow': '6px 6px 0px 0px #FFE156',
        'neo-pink': '6px 6px 0px 0px #FF6B9D',
        'neo-blue': '6px 6px 0px 0px #4ECDC4',
        'neo-orange': '6px 6px 0px 0px #FF9F43',
        'neo-green': '6px 6px 0px 0px #26DE81',
        'neo-purple': '6px 6px 0px 0px #A55EEA',
        // 按下状态阴影
        'neo-pressed': '2px 2px 0px 0px #0F0F0F',
      },
      // 字体间距
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        '31': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      // 圆角 - neo-brutalism 通常使用方形或轻微圆角
      borderRadius: {
        'neo': '0px', // 完全方形
        'neo-sm': '4px',
        'neo-md': '8px',
      },
      // 间距
      spacing: {
        '28': '7rem',
      },
      // 背景图片
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neo-grid': 'linear-gradient(to right, #0F0F0F 1px, transparent 1px), linear-gradient(to bottom, #0F0F0F 1px, transparent 1px)',
      },
      // 背景大小 - 用于网格背景
      backgroundSize: {
        'neo-grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
export default config;
