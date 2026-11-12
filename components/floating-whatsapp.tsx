/** Site-wide WhatsApp contact shortcut. */
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917021042122"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-[55] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.24)] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-105 hover:bg-[#20BD5A] hover:shadow-[0_6px_22px_rgba(0,0,0,0.3)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] motion-reduce:animate-none motion-reduce:transition-none sm:size-16 sm:right-[calc(1.5rem+env(safe-area-inset-right))] lg:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-8 sm:size-9"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.73 12.73 0 0 0 5.15 22.56L3.4 28.8l6.4-1.68a12.78 12.78 0 0 0 6.2 1.58h.01A12.75 12.75 0 0 0 16.02 3.2Zm0 23.35h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.8 1 1.02-3.7-.25-.4a10.58 10.58 0 1 1 8.83 4.81Zm5.81-7.93c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.84-1.6-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.36.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  )
}
