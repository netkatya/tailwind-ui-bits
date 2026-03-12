"use client";

export default function DotLoader() {
  return (
    <>
      <div className="flex justify-center items-center z-50">
        <div className="spinner flex items-center justify-center gap-1.5">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>

      {/* choose your color in .spinner */}
      <style jsx>{`
        .spinner {
          --clr: rgb(89, 12, 100);
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background-color: var(--clr);
          opacity: 0;
          animation: fade 1s ease-in-out infinite;
        }

        .dot-1 {
          animation-delay: 0s;
        }

        .dot-2 {
          animation-delay: 0.33s;
        }

        .dot-3 {
          animation-delay: 0.66s;
        }

        @keyframes fade {
          0%,
          100% {
            opacity: 1;
          }
          60% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
