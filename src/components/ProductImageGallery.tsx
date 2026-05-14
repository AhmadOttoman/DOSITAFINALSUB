import * as React from "react";
import { createPortal } from "react-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";
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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
      <div className="absolute inset-0 bg-black/93 backdrop-blur-[2px]" aria-hidden />

      <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden pb-[max(1rem,env(safe-area-inset-bottom,0px))] pl-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pr-3 sm:pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:pl-14 sm:pr-14">
        <div className="relative mx-auto flex min-h-0 max-h-[100dvh] w-full flex-1 items-center justify-center">
          <div className="pointer-events-none absolute right-1 top-1 z-[330] sm:right-6 sm:top-6">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={onClose}
              className="pointer-events-auto h-10 gap-1.5 rounded-full border border-white/40 bg-black/65 px-3.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-md hover:bg-black/85 hover:text-white md:text-sm"
              aria-label="Exit fullscreen and return"
            >
              <Minimize2 className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden />
              <span>Exit view</span>
              <span className="sr-only">&nbsp;(or press Escape)</span>
            </Button>
          </div>

          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={onClose}
            className="pointer-events-auto absolute left-3 top-[max(0.5rem,env(safe-area-inset-top,0px))] z-[330] flex h-9 w-9 rounded-full border-white/35 bg-black/55 text-white shadow-md backdrop-blur-sm hover:bg-black/80 hover:text-white sm:hidden"
            aria-label="Exit fullscreen"
          >
            <X className="h-4 w-4" />
          </Button>

          <p id="product-fullscreen-gallery-title" className="sr-only">
            {productTitle} — fullscreen image {active + 1} of {slides.length}
          </p>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: hasMultiple,
              duration: 20,
              startIndex: initialIndex,
            }}
            className="h-full w-full max-h-[calc(100dvh-5rem)]"
          >
            <CarouselContent className="-ml-0 h-full">
              {slides.map((src, i) => (
                <CarouselItem key={`fullscreen-slide-${i}`} className="flex min-h-0 basis-full shrink-0 pl-0">
                  <div className="flex max-h-[calc(100dvh-9rem)] w-full flex-1 flex-col items-center justify-center sm:max-h-[calc(100dvh-8rem)]">
                    <img
                      src={src}
                      alt={`${productTitle} — fullscreen image ${i + 1}`}
                      draggable={false}
                      className="max-h-[calc(100dvh-10rem)] max-w-[calc(100vw-2rem)] select-none object-contain sm:max-h-[calc(100dvh-8rem)] sm:max-w-[calc(100vw-8rem)]"
                    />
                    {slides.length > 1 ? (
                      <span className="mt-2 text-[11px] font-medium uppercase tracking-widest text-white/65">
                        {active + 1} / {slides.length}
                      </span>
                    ) : null}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {hasMultiple ? (
              <>
                <CarouselPrevious
                  variant="outline"
                  className="absolute left-0 top-1/2 z-[325] hidden h-12 w-12 -translate-y-1/2 rounded-full border-white/35 bg-black/45 text-white shadow-lg backdrop-blur-sm hover:bg-black/65 hover:text-white md:flex [&_svg]:text-white"
                  aria-label="Previous image"
                />
                <CarouselNext
                  variant="outline"
                  className="absolute right-0 top-1/2 z-[325] hidden h-12 w-12 -translate-y-1/2 rounded-full border-white/35 bg-black/45 text-white shadow-lg backdrop-blur-sm hover:bg-black/65 hover:text-white md:flex [&_svg]:text-white"
                  aria-label="Next image"
                />
              </>
            ) : null}
          </Carousel>
        </div>
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
  const [fullscreen, setFullscreen] = React.useState<{
    index: number;
    key: number;
  } | null>(null);
  const mobileStripRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);

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
    setFullscreen((prev) => ({
      index: imageIndex,
      key: (prev?.key ?? 0) + 1,
    }));
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

  const thumbClass = (active: boolean) =>
    cn(
      "relative shrink-0 overflow-hidden rounded border bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      active
        ? "border-engineering-navy ring-2 ring-engineering-navy/15 ring-offset-1"
        : "border-border/80 hover:border-muted-foreground/40"
    );

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

  return (
    <div className="space-y-3">
      {/* Shopify-style: vertical thumbs (desktop) + main media */}
      <div
        className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-3"
        role="region"
        aria-label={`${productTitle} product images`}
      >
        {/* Desktop: vertical thumbnail rail (left, Dawn-style) */}
        {hasMultiple ? (
          <div
            className="hidden lg:flex w-16 shrink-0 flex-col gap-2 overflow-y-auto py-0.5 pr-1 max-h-[min(560px,65vh)]"
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
                className={cn(thumbClass(selected === i), "aspect-square w-14")}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}

        {/* Main media — square canvas, white bg, swipe on touch */}
        <div className="relative min-w-0 flex-1">
          <div
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-md border border-border/60 bg-white",
              "shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            )}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              onClick={() => openFullscreen(selected)}
              className="group absolute inset-0 flex cursor-zoom-in items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`Open image ${selected + 1} in full screen`}
            >
              <img
                key={currentSrc}
                src={currentSrc}
                alt={`${productTitle} — product image ${selected + 1}`}
                draggable={false}
                className="max-h-full max-w-full object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute right-2.5 top-2.5 flex items-center gap-1 rounded border border-border/70 bg-white/95 px-2 py-1 text-[11px] font-medium text-muted-foreground shadow-sm md:text-xs">
                <Maximize2 className="h-3 w-3 shrink-0" aria-hidden />
                Click to expand
              </span>
            </button>

            {hasMultiple ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/95 text-engineering-navy shadow-sm transition-colors hover:bg-white md:left-3 md:h-10 md:w-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/95 text-engineering-navy shadow-sm transition-colors hover:bg-white md:right-3 md:h-10 md:w-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>

          {/* Mobile: dot indicators (Shopify-style) */}
          {hasMultiple ? (
            <div
              className="mt-3 flex justify-center gap-1.5 lg:hidden"
              role="tablist"
              aria-label="Select product image"
            >
              {slides.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected === i}
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    selected === i
                      ? "w-5 bg-engineering-navy"
                      : "bg-border hover:bg-muted-foreground/40"
                  )}
                />
              ))}
            </div>
          ) : null}

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
            {hasMultiple ? (
              <span className="tabular-nums">
                {selected + 1} / {slides.length}
              </span>
            ) : (
              <span />
            )}
            <button
              type="button"
              onClick={() => openFullscreen(selected)}
              className="text-engineering-navy underline-offset-4 hover:text-primary hover:underline"
            >
              Open media gallery
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: horizontal thumbnail strip */}
      {hasMultiple ? (
        <div className="lg:hidden">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            More images
          </p>
          <div
            ref={mobileStripRef}
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Product image thumbnails"
          >
            {slides.map((src, i) => (
              <button
                key={`thumb-m-${i}`}
                type="button"
                role="tab"
                data-thumb-index={i}
                aria-selected={selected === i}
                aria-label={`Image ${i + 1} of ${slides.length}`}
                onClick={() => setSelected(i)}
                className={cn(thumbClass(selected === i), "h-16 w-16 shrink-0")}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}

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
