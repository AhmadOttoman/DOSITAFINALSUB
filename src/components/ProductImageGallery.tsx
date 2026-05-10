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
        {/* Image stage — fullscreen within viewport */}
        <div className="relative mx-auto flex min-h-0 max-h-[100dvh] w-full flex-1 items-center justify-center">
          {/* Exit — top-right corner of the image area */}
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

          {/* Compact close on small screens (primary exit stays top-right) */}
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

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [fullscreen, setFullscreen] = React.useState<{
    index: number;
    key: number;
  } | null>(null);

  const openFullscreen = React.useCallback((imageIndex: number) => {
    setFullscreen((prev) => ({
      index: imageIndex,
      key: (prev?.key ?? 0) + 1,
    }));
  }, []);

  const scrollCarouselTo = React.useCallback(
    (index: number) => {
      if (!slides.length || index < 0 || index >= slides.length) return;
      setSelected(index);
      carouselApi?.scrollTo(index);
    },
    [carouselApi, slides.length]
  );

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const i = carouselApi.selectedScrollSnap();
      setSelected(i);
    };

    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  if (!slides.length) return null;

  const hasMultiple = slides.length > 1;
  const thumbButtonClass =
    "relative aspect-square w-full shrink-0 overflow-hidden rounded-lg border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="hidden flex-col gap-2 overflow-y-auto pr-1 lg:flex lg:w-24 lg:flex-shrink-0 lg:self-stretch lg:max-h-[min(520px,calc(100vh-12rem))]">
          {slides.map((src, i) => (
            <div key={`dt-${src}-${i}`} className="relative">
              <button
                type="button"
                aria-label={`View image ${i + 1} in carousel`}
                onClick={() => scrollCarouselTo(i)}
                className={cn(
                  thumbButtonClass,
                  selected === i
                    ? "border-primary ring-2 ring-primary"
                    : "border-border hover:border-muted-foreground/40"
                )}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover"
                />
              </button>
              <button
                type="button"
                aria-label={`Open image ${i + 1} fullscreen`}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollCarouselTo(i);
                  openFullscreen(i);
                }}
                className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-md border border-border/80 bg-background/95 shadow-sm outline-none backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Maximize2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </button>
            </div>
          ))}
        </div>

        <div className="relative min-w-0 flex-1">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: hasMultiple,
            }}
            className="w-full rounded-xl bg-muted/40 shadow-professional outline outline-1 outline-border/70"
          >
            <CarouselContent className="-ml-0">
              {slides.map((src, i) => (
                <CarouselItem key={`main-${src}-${i}`} className="basis-full pl-0">
                  <button
                    type="button"
                    onClick={() => openFullscreen(i)}
                    aria-label={`View ${productTitle} image ${i + 1} fullscreen`}
                    className="relative block aspect-[4/3] w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 max-sm:aspect-square"
                  >
                    <img
                      src={src}
                      alt={`${productTitle} — image ${i + 1}`}
                      draggable={false}
                      className="h-full w-full object-contain p-6 sm:p-8"
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-md border border-border/80 bg-background/90 px-2 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                      <Maximize2 className="h-3 w-3" aria-hidden />
                      Fullscreen
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            {hasMultiple ? (
              <>
                <CarouselPrevious
                  variant="secondary"
                  className="-left-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border bg-background/95 shadow-card hover:bg-background sm:left-4"
                  aria-label="Previous image"
                />
                <CarouselNext
                  variant="secondary"
                  className="-right-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border bg-background/95 shadow-card hover:bg-background sm:right-4"
                  aria-label="Next image"
                />
              </>
            ) : null}
          </Carousel>
        </div>
      </div>

      {hasMultiple ? (
        <div className="relative lg:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full px-10"
          >
            <CarouselContent className="-ml-2">
              {slides.map((src, i) => (
                <CarouselItem key={`mb-${src}-${i}`} className="basis-[92px] pl-2">
                  <div className="relative w-[84px]">
                    <button
                      type="button"
                      aria-label={`View image ${i + 1} in carousel`}
                      onClick={() => scrollCarouselTo(i)}
                      className={cn(
                        "aspect-square w-full overflow-hidden rounded-md border bg-background outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                        selected === i
                          ? "border-primary ring-2 ring-primary"
                          : "border-border"
                      )}
                    >
                      <img
                        src={src}
                        alt=""
                        draggable={false}
                        className="pointer-events-none h-full w-full object-cover"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label={`Open image ${i + 1} fullscreen`}
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollCarouselTo(i);
                        openFullscreen(i);
                      }}
                      className="absolute bottom-0.5 right-0.5 flex h-6 w-6 items-center justify-center rounded border border-border/80 bg-background/95 shadow-sm outline-none backdrop-blur-sm hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Maximize2 className="h-3 w-3 shrink-0" aria-hidden />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="-left-1 h-9 w-9 rounded-full border-border bg-background/95 opacity-95 shadow-sm"
              aria-label="Thumbnail strip previous"
            />
            <CarouselNext
              variant="outline"
              className="-right-1 h-9 w-9 rounded-full border-border bg-background/95 opacity-95 shadow-sm"
              aria-label="Thumbnail strip next"
            />
          </Carousel>
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
