
import { motion } from "motion/react";

const floating = {
  animate: { y: [0, -8, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function ArchitectureVisual() {
  return (
    <div
      className="architecture-scene relative mx-auto w-full max-w-[650px]"
      role="img"
      aria-label="Arquitectura Full Stack representada mediante tres capas isométricas conectadas: frontend, backend y bases de datos"
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-blue-500/10 blur-[85px]" />
      <div className="pointer-events-none absolute top-[18%] right-[8%] size-[55%] rounded-full bg-violet-600/10 blur-[90px]" />

      <motion.svg
        viewBox="0 0 650 520"
        className="relative z-10 h-auto w-full overflow-visible"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.15 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#063F67" stopOpacity=".88" />
            <stop offset="52%" stopColor="#123F7B" stopOpacity=".72" />
            <stop offset="100%" stopColor="#6325A6" stopOpacity=".78" />
          </linearGradient>

          <linearGradient id="middleGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0C355B" stopOpacity=".58" />
            <stop offset="100%" stopColor="#52228E" stopOpacity=".6" />
          </linearGradient>

          <linearGradient id="bottomGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#065780" stopOpacity=".67" />
            <stop offset="100%" stopColor="#52218C" stopOpacity=".65" />
          </linearGradient>

          <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="55%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#C056F5" />
          </linearGradient>

          <linearGradient id="sideGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0284C7" stopOpacity=".45" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity=".25" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>

          <pattern
            id="gridPattern"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M22 0H0V22"
              fill="none"
              stroke="#38BDF8"
              strokeOpacity=".08"
              strokeWidth=".7"
            />
          </pattern>
        </defs>

        <g opacity=".55">
          <ellipse
            cx="335"
            cy="265"
            rx="245"
            ry="155"
            fill="none"
            stroke="#2563EB"
            strokeOpacity=".4"
          />
          <ellipse
            cx="335"
            cy="265"
            rx="198"
            ry="125"
            fill="none"
            stroke="#38BDF8"
            strokeOpacity=".14"
          />
          <path
            d="M120 266C75 215 93 148 165 119L301 64"
            fill="none"
            stroke="#0EA5E9"
            strokeOpacity=".6"
          />
          <path
            d="M470 111C568 142 596 216 574 291"
            fill="none"
            stroke="#8B5CF6"
            strokeOpacity=".55"
          />
        </g>

        <g stroke="#38BDF8" strokeOpacity=".4" strokeDasharray="5 7">
          <path d="M325 185V335" />
          <path d="M395 190V370" />
          <path d="M250 200V350" />
        </g>

        <motion.g {...floating}>
          <path
            d="M166 149L332 67Q343 61 356 68L508 143Q522 151 507 161L350 242Q338 249 326 242L166 165Q151 157 166 149Z"
            fill="#38BDF8"
            opacity=".28"
            filter="url(#glow)"
          />
          <path
            d="M166 142L332 60Q343 54 356 61L508 136Q522 144 507 154L350 235Q338 242 326 235L166 158Q151 150 166 142Z"
            fill="url(#topGlass)"
            stroke="url(#edgeGlow)"
            strokeWidth="1.7"
          />
          <path
            d="M166 158L326 235Q338 242 350 235L507 154V167L350 248Q338 255 326 248L166 171Z"
            fill="url(#sideGlow)"
            stroke="url(#edgeGlow)"
            strokeOpacity=".4"
          />
          <path
            d="M291 135L273 148L291 161M381 135L399 148L381 161M355 125L319 174"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <g>
          <path
            d="M173 254L330 175Q341 169 353 175L502 251Q516 259 501 268L350 346Q338 353 326 346L173 270Q158 262 173 254Z"
            fill="url(#middleGlass)"
            stroke="url(#edgeGlow)"
            strokeOpacity=".65"
            strokeWidth="1.4"
          />
          <path
            d="M173 270L326 346Q338 353 350 346L501 268V281L350 359Q338 366 326 359L173 283Z"
            fill="url(#sideGlow)"
            opacity=".65"
          />

          <g transform="translate(275 220)">
            <rect
              width="130"
              height="98"
              rx="12"
              fill="#08192E"
              fillOpacity=".8"
              stroke="#38BDF8"
              strokeOpacity=".65"
            />
            <path
              d="M0 24H130"
              stroke="#38BDF8"
              strokeOpacity=".4"
            />
            <circle cx="16" cy="12" r="4" fill="#22D3EE" />
            <circle cx="30" cy="12" r="4" fill="#60A5FA" />
            <circle cx="44" cy="12" r="4" fill="#A78BFA" />
            <rect
              x="14"
              y="37"
              width="47"
              height="18"
              rx="4"
              fill="#38BDF8"
              fillOpacity=".13"
              stroke="#38BDF8"
              strokeOpacity=".45"
            />
            <rect
              x="70"
              y="37"
              width="44"
              height="45"
              rx="4"
              fill="#8B5CF6"
              fillOpacity=".12"
              stroke="#A78BFA"
              strokeOpacity=".35"
            />
            <path
              d="M16 67H57M16 77H49"
              stroke="#38BDF8"
              strokeOpacity=".65"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g>
          <path
            d="M150 365L316 282Q330 275 344 282L500 360Q516 369 500 379L343 462Q330 469 316 462L150 381Q134 373 150 365Z"
            fill="#38BDF8"
            opacity=".19"
            filter="url(#glow)"
          />
          <path
            d="M150 358L316 275Q330 268 344 275L500 353Q516 362 500 372L343 455Q330 462 316 455L150 374Q134 366 150 358Z"
            fill="url(#bottomGlass)"
            stroke="url(#edgeGlow)"
            strokeWidth="1.5"
          />
          <path
            d="M150 374L316 455Q330 462 343 455L500 372V386L343 469Q330 476 316 469L150 388Z"
            fill="url(#sideGlow)"
          />

          <g transform="translate(311 336)">
            <ellipse
              cx="26"
              cy="10"
              rx="27"
              ry="10"
              fill="#0B2445"
              stroke="#60A5FA"
              strokeWidth="1.6"
            />
            <path
              d="M-1 10V57C-1 71 53 71 53 57V10"
              fill="#10315B"
              fillOpacity=".65"
              stroke="#60A5FA"
              strokeWidth="1.5"
            />
            <path
              d="M-1 27C-1 41 53 41 53 27M-1 43C-1 57 53 57 53 43"
              fill="none"
              stroke="#60A5FA"
              strokeOpacity=".8"
            />
          </g>
        </g>

        <g fontFamily="Arial, sans-serif" fontSize="15">
          <path
            d="M459 104L533 80H559"
            fill="none"
            stroke="#8B5CF6"
            strokeOpacity=".65"
          />
          <circle cx="533" cy="80" r="3.5" fill="#A78BFA" />
          <rect
            x="505"
            y="47"
            width="124"
            height="38"
            rx="10"
            fill="#101B32"
            stroke="#8B5CF6"
            strokeOpacity=".3"
          />
          <text x="521" y="71" fill="#CBD5E1">
            Frontend
          </text>
          <circle cx="610" cy="66" r="4" fill="#8B5CF6" />

          <path
            d="M484 270L549 283"
            fill="none"
            stroke="#3B82F6"
            strokeOpacity=".65"
          />
          <rect
            x="529"
            y="267"
            width="100"
            height="39"
            rx="10"
            fill="#101B32"
            stroke="#3B82F6"
            strokeOpacity=".35"
          />
          <text x="547" y="291" fill="#CBD5E1">
            Backend
          </text>

          <path
            d="M175 365L98 398H75"
            fill="none"
            stroke="#38BDF8"
            strokeOpacity=".65"
          />
          <circle cx="98" cy="398" r="3.5" fill="#38BDF8" />
          <rect
            x="8"
            y="382"
            width="140"
            height="41"
            rx="10"
            fill="#101B32"
            stroke="#38BDF8"
            strokeOpacity=".35"
          />
          <text x="23" y="407" fill="#CBD5E1">
            Base de datos
          </text>

          <path
            d="M180 238L112 224H84"
            fill="none"
            stroke="#38BDF8"
            strokeOpacity=".45"
          />
          <circle cx="112" cy="224" r="3.5" fill="#38BDF8" />
          <rect
            x="4"
            y="206"
            width="124"
            height="38"
            rx="10"
            fill="#101B32"
            stroke="#38BDF8"
            strokeOpacity=".25"
          />
          <text x="18" y="230" fill="#CBD5E1">
            Arquitectura
          </text>
        </g>
      </motion.svg>
    </div>
  );
}
