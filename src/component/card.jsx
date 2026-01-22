import React from "react";
import useTheme from "../context/theme";


export default function Card({
  imageSrc = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  title = "Xiaomi watch S4 GPS 1.78 inch AMOLED Display",
  price = "$999",
  rating = "4.0",
}) {
  const { themeMode } = useTheme();
  const darkCard = themeMode === "dark";

  return (
    <div
      className={[
        "w-full max-w-[380px] mx-auto overflow-hidden rounded-2xl",
        "border shadow-xl backdrop-blur-xl",
        darkCard
          ? "bg-black text-white border-white/20"
          : "bg-white/70 text-slate-900 border-slate-900/10",
      ].join(" ")}
    >
      {/* Image frame */}
      <div
        className={[
          "w-full h-56 sm:h-60 flex items-center justify-center p-4",
          darkCard ? "bg-white/5" : "bg-slate-900/5",
        ].join(" ")}
      >
        <img
          src={imageSrc}
          alt="product"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="p-5">
        <h5 className="text-lg font-semibold leading-snug">{title}</h5>

        <div className="mt-3">
          <span
            className={[
              "inline-block text-xs font-semibold px-2.5 py-1 rounded",
              darkCard ? "bg-white/15" : "bg-slate-900/5",
            ].join(" ")}
          >
            {rating}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-3xl font-bold">{price}</span>

          <button
            className={[
              "px-5 py-2.5 rounded-lg text-sm font-medium border transition",
              darkCard
                ? "bg-white/10 hover:bg-white/15 border-white/20"
                : "bg-white/70 hover:bg-white/90 border-slate-900/10",
            ].join(" ")}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
