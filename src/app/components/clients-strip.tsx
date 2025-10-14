// resources/js/components/clients-strip.tsx
import React from 'react';

type Client = {
  name: string;
  href?: string;
  logoSrc: string;
};

const CLIENTS: Client[] = [
  { name: 'OVO', logoSrc: '/images/clients/ovo.svg', href: 'https://ovo.id' },
  {
    name: 'Mandiri Taspen',
    logoSrc: '/images/clients/mantap.png',
    href: 'https://www.bankmandiritaspen.co.id/',
  },
  {
    name: 'PT SMI',
    logoSrc: '/images/clients/smi.png',
    href: 'https://ptsmi.co.id/',
  },
  {
    name: 'Adidata',
    logoSrc: '/images/clients/adidata.png',
    href: 'https://www.adidata.co.id/',
  },
];

type Props = {
  title?: string;
  variant?: 'grid' | 'marquee';
};

export default function ClientsStrip({
  title = 'Trusted by teams at',
  variant = 'grid',
}: Props) {
  const Item = ({ c }: { c: Client }) => {
    const Img = (
      <img
        src={c.logoSrc}
        alt={c.name}
        loading="lazy"
        width={120}
        height={48}
        className="h-8 w-auto opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
        aria-hidden={c.href ? undefined : false}
      />
    );

    return (
      <li className="flex items-center justify-center">
        {c.href ? (
          <a
            href={c.href}
            target="_blank"
            rel="noreferrer"
            aria-label={c.name}
            className="focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-md"
          >
            {Img}
          </a>
        ) : (
          Img
        )}
      </li>
    );
  };

  if (variant === 'marquee') {
    const loop = [...CLIENTS, ...CLIENTS];
    return (
      <section aria-label="Client logos" className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm text-muted-foreground">
          {title}
        </p>
        <div className="relative overflow-hidden">
          <ul className="flex min-w-full gap-6 [animation:scroll_30s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:[animation:none]">
            {loop.map((c, i) => (
              <Item key={`${c.name}-${i}`} c={c} />
            ))}
          </ul>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section aria-label="Client logos" className="mx-auto max-w-6xl">
      <p className="mb-8 text-center text-sm text-muted-foreground">{title}</p>
      <ul className="flex gap-12">
        {CLIENTS.map((c) => (
          <Item key={c.name} c={c} />
        ))}
      </ul>
    </section>
  );
}
