import * as React from "react";
import { createPortal } from "react-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Expand, Minimize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductImageGalleryProps = {
  images: string[];
  productTitle: string;
};

type FullscreenViewerProps = {
  slides: string[];
  initialIndex: number;
  productTitle: string;
  onClose: () => void;
};

function FullscreenViewer({
  slides,
  initialIndex,
  productTitle,
  onClose,
}: FullscreenViewerProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [active, setActive] = React.useState(initialIndex);
  const hasMultiple = slides.length > 1;

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (!api || slides.length < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        api.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        api.scrollNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, api, slides.length]);

  React.useEffect(() => {
    if (!api) return;
    api.scrollTo(initialIndex, false);
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, initialIndex]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-fullscreen-gallery-title"
      className="fixed inset-0 z-[320]"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" aria-hidden />

      <div className="relative flex h-[100dvh] w-full flex-col">
        {/* Top bar */}
        <div className="relative z-[330] flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-white/60">
            {productTitle}
          </span>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="h-10 gap-1.5 rounded-full bg-white/10 px-4 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
            aria-label="Close fullscreen"
          >
            <X className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Close</span>
          </Button>
        </div>

        <p id="product-fullscreen-gallery-title" className="sr-only">
          {productTitle} — fullscreen image {active + 1} of {slides.length}
        </p>

        {/* Carousel */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: hasMultiple,
              duration: 20,
              startIndex: initialIndex,
            }}
            className="h-full w-full"
          >
            <CarouselContent className="-ml-0 h-full">
              {slides.map((src, i) => (
                <CarouselItem key={`fs-${i}`} className="flex min-h-0 basis-full pl-0">
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={src}
                      alt={`${productTitle} — image ${i + 1}`}
                      draggable={false}
                      className="max-h-[calc(100dvh-14rem)] max-w-full select-none object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Bottom thumbnail strip */}
        {hasMultiple ? (
          <div className="relative z-[325] flex flex-col items-center gap-4 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex max-w-full justify-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {slides.map((src, i) => (
                <button
                  key={`fs-thumb-${i}`}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                  aria-selected={active === i}
                  className={cn(
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all",
                    active === i
                      ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                      : "opacity-50 hover:opacity-100"
                  )}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" draggable={false} />
                </button>
              ))}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-widest text-white/60 tabular-nums">
              {active + 1} / {slides.length}
            </span>
          </div>
        ) : (
          <div className="h-6" />
        )}
      </div>
    </div>
  );
}

export function ProductImageGallery({
  images,
  productTitle,
}: ProductImageGalleryProps) {
  const slides = React.useMemo(() => images.filter(Boolean), [images]);

  const [selected, setSelected] = React.useState(0);
  const [fullscreen, setFullscreen] = React.useState<{ index: number; key: number } | null>(null);
  const [zoom, setZoom] = React.useState<{ x: number; y: number } | null>(null);
  const mobileStripRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);
  const imageWrapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSelected((i) => (slides.length ? Math.min(i, slides.length - 1) : 0));
  }, [slides.length]);

  React.useEffect(() => {
    const strip = mobileStripRef.current;
    if (!strip) return;
    const el = strip.querySelector<HTMLElement>(`[data-thumb-index="${selected}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selected]);

  const openFullscreen = React.useCallback((imageIndex: number) => {
    setFullscreen((prev) => ({ index: imageIndex, key: (prev?.key ?? 0) + 1 }));
  }, []);

  const goPrev = React.useCallback(() => {
    if (slides.length < 2) return;
    setSelected((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = React.useCallback(() => {
    if (slides.length < 2) return;
    setSelected((i) => (i + 1) % slides.length);
  }, [slides.length]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (fullscreen) return;
      const t = e.target as HTMLElement | null;
      if (t?.closest?.("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen, goPrev, goNext]);

  if (!slides.length) return null;

  const hasMultiple = slides.length > 1;
  const currentSrc = slides[selected];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null || slides.length < 2) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const dx = end - start;
    if (Math.abs(dx) < 48) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="w-full">
      <div
        className="flex w-full flex-col gap-4 lg:flex-row lg:items-start"
        role="region"
        aria-label={`${productTitle} product images`}
      >
        {/* Desktop vertical thumbnail rail */}
        {hasMultiple ? (
          <div
            className="hidden lg:flex w-20 shrink-0 flex-col gap-3 overflow-y-auto pr-1 max-h-[36rem] [scrollbar-width:thin]"
            role="tablist"
            aria-label="Product image thumbnails"
          >
            {slides.map((src, i) => (
              <button
                key={`thumb-${i}`}
                type="button"
                role="tab"
                aria-selected={selected === i}
                aria-label={`Image ${i + 1} of ${slides.length}`}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setSelected(i)}
                className={cn(
                  "relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  selected === i
                    ? "ring-2 ring-engineering-navy ring-offset-2 ring-offset-secondary"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <img src={src} alt="" draggable={false} className="h-full w-full object-contain p-2" />
              </button>
            ))}
          </div>
        ) : null}

        {/* Main image */}
        <div className="relative min-w-0 flex-1">
          <div
            ref={imageWrapRef}
            className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-white"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseEnter={(e) => onMouseMove(e)}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setZoom(null)}
          >
            <button
              type="button"
              onClick={() => openFullscreen(selected)}
              className="absolute inset-0 flex cursor-zoom-in items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-label={`Open image ${selected + 1} in full screen`}
            >
              <img
                key={currentSrc}
                src={currentSrc}
                alt={`${productTitle} — product image ${selected + 1}`}
                draggable={false}
                className={cn(
                  "h-full w-full select-none object-contain p-8 transition-transform duration-300 ease-out sm:p-12",
                  zoom ? "scale-[1.6]" : "scale-100"
                )}
                style={
                  zoom
                    ? { transformOrigin: `${zoom.x}% ${zoom.y}%` }
                    : undefined
                }
              />
            </button>

            {/* Expand button */}
            <button
              type="button"
              onClick={() => openFullscreen(selected)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-engineering-navy shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105"
              aria-label="View full screen"
            >
              <Expand className="h-4 w-4" />
            </button>

            {/* Counter pill */}
            {hasMultiple ? (
              <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-engineering-navy/85 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md tabular-nums">
                {selected + 1} / {slides.length}
              </div>
            ) : null}

          </div>

          {/* Mobile thumbnail strip */}
          {hasMultiple ? (
            <div
              ref={mobileStripRef}
              className="mt-4 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
              role="tablist"
              aria-label="Product image thumbnails"
            >
              {slides.map((src, i) => (
                <button
                  key={`m-thumb-${i}`}
                  type="button"
                  role="tab"
                  data-thumb-index={i}
                  aria-selected={selected === i}
                  aria-label={`Image ${i + 1} of ${slides.length}`}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white transition-all",
                    selected === i
                      ? "ring-2 ring-engineering-navy ring-offset-2 ring-offset-secondary"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={src} alt="" draggable={false} className="h-full w-full object-contain p-1.5" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {fullscreen !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <FullscreenViewer
            key={fullscreen.key}
            slides={slides}
            initialIndex={fullscreen.index}
            productTitle={productTitle}
            onClose={() => setFullscreen(null)}
          />,
          document.body
        )}
    </div>
  );
}
