"use client";

export default function HeardLoader() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="relative animate-rotate w-16 h-16">
          <span className="absolute block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] rounded-full -translate-x-7 -translate-y-7 animate-shape1"></span>
          <span className="absolute block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] rounded-full translate-x-7 -translate-y-7 animate-shape2"></span>
          <span className="relative block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] scale-[0.98] -rotate-45 animate-shape3"></span>
        </div>

        <div className="mt-8 h-4 w-16 rounded-full bg-[#d9d9d9] border border-[#d9d9d9] animate-shadow"></div>
      </div>

      <style>{`
        @keyframes rotate {
          50% { transform: rotate(360deg); }
          100% { transform: rotate(720deg); }
        }

        @keyframes shape1 {
          60% { transform: translate(-28px, -28px) scale(0.4); }
        }

        @keyframes shape2 {
          40% { transform: translate(28px, -28px) scale(0.4); }
        }

        @keyframes shape3 {
          50% {
            border-radius: 100%;
            transform: scale(0.5) rotate(-45deg);
          }
          100% {
            transform: scale(0.98) rotate(-45deg);
          }
        }

        @keyframes shadow {
          50% {
            transform: translateX(-50%) scale(0.5);
            border-color: #f2f2f2;
          }
        }

        .animate-rotate {
          animation: rotate 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        }

        // .animate-shape1 {
        //   animation: shape1 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        // }

        // .animate-shape2 {
        //   animation: shape2 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        // }

        // .animate-shape3 {
        //   animation: shape3 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        // }

        // .animate-shadow {
        //   animation: shadow 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        // }
      `}</style>
    </>
  );
}
