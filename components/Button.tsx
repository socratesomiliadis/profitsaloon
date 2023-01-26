import Link from 'next/link';

export default function Button({
  text,
  url,
  external,
  theme,
  hasArrow
}: {
  text: string;
  url: string;
  external?: boolean;
  theme: 'primary' | 'secondary';
  hasArrow?: boolean;
}) {
  return (
    <Link href={url} className={``}>
      <span>{text}</span>
      {hasArrow && (
        <span
          style={{ transform: external ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="16"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.96361 10.8311C8.96361 10.8311 12.4654 7.29142 13.8289 5.91328C13.9432 5.79857 14 5.64771 14 5.49685C14 5.346 13.9432 5.19514 13.8289 5.08043C12.4661 3.70228 8.97217 0.170501 8.97217 0.170501C8.86016 0.0573584 8.71237 0.0007864 8.56536 5.7927e-07C8.41525 5.85832e-07 8.26513 0.0581442 8.15001 0.173645C7.92211 0.403858 7.92133 0.7755 8.1469 1.00414L12.0111 4.90757L0.583366 4.90757C0.261348 4.90757 -2.54769e-07 5.17157 -2.4055e-07 5.49685C-2.26331e-07 5.82214 0.261348 6.08614 0.583366 6.08614L12.0111 6.08614L8.13912 9.99821C7.91433 10.2253 7.91588 10.5961 8.14379 10.8263C8.2589 10.9426 8.40902 11.0008 8.55914 11C8.70615 11 8.85238 10.9442 8.96361 10.8311Z"
              fill="#202020"
            />
          </svg>
        </span>
      )}
    </Link>
  );
}
