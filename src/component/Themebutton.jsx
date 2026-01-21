import React from "react";
import useTheme from "../context/theme";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const isDarkCard = themeMode === "dark";

  const onChangeButton = (e) => {
    const checked = e.currentTarget.checked;
    if (checked) darkTheme();
    else lightTheme();
  };

  return (
    <div className="glass-card px-3 py-2 inline-flex items-center gap-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeButton}
          checked={isDarkCard}
        />
        <div className="w-11 h-6 bg-black/10 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/50
                        peer-checked:bg-blue-600/80
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                        after:bg-white after:border after:border-white/40 after:rounded-full
                        after:h-5 after:w-5 after:transition-all
                        peer-checked:after:translate-x-full">
        </div>
      </label>

      <span className="text-sm font-medium text-slate-900">
        Switch to dark mode
        <br />
        
      </span>
    </div>
  );
}
