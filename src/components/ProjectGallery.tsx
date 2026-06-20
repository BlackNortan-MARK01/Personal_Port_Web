"use client";

import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  label?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  alt: string;
}

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (images.length === 0) return null;

  const multiple = images.length > 1;
  const current = images[index];

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  const arrows = (small: boolean) =>
    multiple && (
      <>
        <button
          onClick={prev}
          aria-label="Previous image"
          className={`absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-background/80 hover:bg-background border border-foreground/10 rounded-full backdrop-blur-sm transition-colors print:hidden ${
            small ? "w-10 h-10" : "w-12 h-12"
          }`}
        >
          <ChevronLeft className={`text-foreground/70 ${small ? "w-5 h-5" : "w-6 h-6"}`} />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-background/80 hover:bg-background border border-foreground/10 rounded-full backdrop-blur-sm transition-colors print:hidden ${
            small ? "w-10 h-10" : "w-12 h-12"
          }`}
        >
          <ChevronRight className={`text-foreground/70 ${small ? "w-5 h-5" : "w-6 h-6"}`} />
        </button>
      </>
    );

  const dots = multiple && (
    <div className="flex gap-1.5">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          aria-label={`Go to image ${i + 1}`}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            i === index ? "bg-foreground" : "bg-foreground/30"
          }`}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 p-2">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-background border border-foreground/5">
          <img src={current.src} alt={alt} className="w-full h-full object-contain" />

          {arrows(true)}
        </div>

        <div className="mt-2 grid grid-cols-3 items-center print:hidden">
          <span className="justify-self-start text-xs text-foreground/50 truncate">{current.label ?? ""}</span>
          <div className="justify-self-center">{dots}</div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Expand image"
            className="justify-self-end p-1.5 bg-background/80 hover:bg-background border border-foreground/10 rounded-lg backdrop-blur-sm transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5 text-foreground/70" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm print:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={alt}
              className="w-full max-h-[85vh] object-contain rounded-2xl border border-foreground/10 shadow-2xl"
            />

            {arrows(false)}

            {current.label && (
              <span className="absolute bottom-3 left-4 text-sm text-foreground/70 bg-background/70 px-2 py-0.5 rounded-md backdrop-blur-sm">
                {current.label}
              </span>
            )}

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background border border-foreground/10 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-4 h-4 text-foreground/70" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
