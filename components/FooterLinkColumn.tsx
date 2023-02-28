import Link from 'next/link';

export default function FooterLinkColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ title: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#EDEDED] text-lg font-medium mb-8">{title}</span>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          target={link.external ? '_blank' : '_self'}
          className="text-[#5A5A5A] text-lg flex flex-row items-center gap-2 hover:text-[#EDEDED] transition-colors duration-300"
        >
          <span className="-mb-[1px]">{link.title}</span>
          {link.external && (
            <svg
              width="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5936 5.66482C7.5936 5.66482 7.61714 2.24844 7.62637 0.918229C7.62755 0.80709 7.58314 0.706901 7.51084 0.634601C7.43854 0.562301 7.33835 0.517889 7.22721 0.519071C5.89738 0.527917 2.48859 0.5514 2.48859 0.5514C2.37935 0.552189 2.27965 0.597664 2.20707 0.669494C2.13334 0.743228 2.08747 0.844828 2.08628 0.956725C2.08468 1.179 2.26241 1.35749 2.48278 1.35628L6.25153 1.32906L0.638566 6.94203C0.480401 7.10019 0.47856 7.35509 0.634457 7.51098C0.790355 7.66688 1.04525 7.66504 1.20341 7.50687L6.81638 1.89391L6.78948 5.67062C6.7879 5.88986 6.9664 6.06683 7.18867 6.06523C7.30095 6.06442 7.40255 6.01855 7.4759 5.94444C7.54811 5.87223 7.5932 5.77367 7.5936 5.66482Z"
                fill="#5A5A5A"
              />
            </svg>
          )}
        </Link>
      ))}
    </div>
  );
}
