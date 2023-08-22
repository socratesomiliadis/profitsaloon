import { useEffect } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function AppIcon({
  mouseX,
  children,
}: {
  mouseX: MotionValue;
  children: React.ReactNode;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [36, 50, 36]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="w-9 h=9 text-[#818181] hover:text-white cursor-pointer transition-colors duration-300 ease-out"
    >
      {children}
    </motion.div>
  );
}

export default function IconsHover() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="icons-div flex flex-row items-center gap-12"
    >
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17647 0C2.31758 0 0 2.21619 0 4.95V31.05C0 33.7838 2.31759 36 5.17647 36H14.3586C14.2026 35.5777 14.1176 35.1234 14.1176 34.65V26.55C14.1176 25.0442 14.9771 23.7303 16.2525 23.0324C17.1571 19.6226 20.3881 17.1 24.2353 17.1C26.5396 17.1 28.6229 18.005 30.1176 19.4636V4.95C30.1176 2.21619 27.8001 0 24.9412 0H5.17647ZM7.05882 5.4C6.27913 5.4 5.64706 6.00442 5.64706 6.75C5.64706 7.49558 6.27913 8.1 7.05882 8.1H19.2941C20.0738 8.1 20.7059 7.49558 20.7059 6.75C20.7059 6.00442 20.0738 5.4 19.2941 5.4H7.05882ZM7.05882 12.6C6.27913 12.6 5.64706 13.2044 5.64706 13.95C5.64706 14.6956 6.27913 15.3 7.05882 15.3H13.6471C14.4268 15.3 15.0588 14.6956 15.0588 13.95C15.0588 13.2044 14.4268 12.6 13.6471 12.6H7.05882Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.1176 25.5031V25.2C30.1176 22.2177 27.5894 19.8 24.4706 19.8C21.3518 19.8 18.8235 22.2177 18.8235 25.2V25.5031C17.7106 26.0087 16.9412 27.0934 16.9412 28.35V32.85C16.9412 34.5897 18.416 36 20.2353 36H28.7059C30.5252 36 32 34.5897 32 32.85V28.35C32 27.0934 31.2306 26.0087 30.1176 25.5031ZM21.6471 25.2H27.2941C27.2941 23.7088 26.03 22.5 24.4706 22.5C22.9112 22.5 21.6471 23.7088 21.6471 25.2ZM28.7059 27.9H20.2353C19.9754 27.9 19.7647 28.1015 19.7647 28.35V32.85C19.7647 33.0985 19.9754 33.3 20.2353 33.3H28.7059C28.9658 33.3 29.1765 33.0985 29.1765 32.85V28.35C29.1765 28.1015 28.9658 27.9 28.7059 27.9Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 42 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.49992C0 3.35783 3.52576 0 7.875 0H34.125C38.4742 0 42 3.35783 42 7.49992V20.4998C42 24.6419 38.4742 27.9997 34.125 27.9997H7.875C3.52576 27.9997 0 24.6419 0 20.4998V7.49992Z"
            fill="currentColor"
          />
          <path
            d="M8.91273 35.918C12.7112 34.6737 16.7746 33.9996 21.0004 33.9996C25.2263 33.9996 29.2897 34.6737 33.0881 35.918C33.9107 36.1875 34.8068 35.7709 35.0898 34.9875C35.3727 34.2041 34.9353 33.3507 34.1127 33.0812C29.9899 31.7306 25.5805 30.9996 21.0004 30.9996C16.4203 30.9996 12.0109 31.7306 7.88813 33.0812C7.06558 33.3507 6.62814 34.2041 6.91107 34.9875C7.19401 35.7709 8.09018 36.1875 8.91273 35.918Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0C14.2386 0 12 2.12665 12 4.75001V7.8445C12 9.10428 12.5268 10.3125 13.4645 11.2033L17.1716 14.725C18.7337 16.209 21.2663 16.209 22.8284 14.725L26.5355 11.2033C27.4732 10.3125 28 9.10428 28 7.8445V4.75001C28 2.12665 25.7614 0 23 0H17Z"
            fill="currentColor"
          />
          <path
            d="M35 26.6C37.7614 26.6 40 24.4734 40 21.85V16.15C40 13.5267 37.7614 11.4 35 11.4H31.7426C30.4166 11.4 29.1448 11.9005 28.2071 12.7913L24.5 16.313C22.9379 17.797 22.9379 20.203 24.5 21.687L28.2071 25.2088C29.1448 26.0996 30.4166 26.6 31.7426 26.6H35Z"
            fill="currentColor"
          />
          <path
            d="M23 38C25.7614 38 28 35.8733 28 33.25V30.1555C28 28.8957 27.4732 27.6875 26.5355 26.7967L22.8284 23.275C21.2663 21.791 18.7337 21.791 17.1716 23.275L13.4645 26.7967C12.5268 27.6875 12 28.8957 12 30.1555V33.25C12 35.8733 14.2386 38 17 38H23Z"
            fill="currentColor"
          />
          <path
            d="M0 21.85C0 24.4734 2.23858 26.6 5 26.6H8.25736C9.58344 26.6 10.8552 26.0996 11.7929 25.2088L15.5 21.687C17.0621 20.203 17.0621 17.797 15.5 16.313L11.7929 12.7913C10.8552 11.9005 9.58344 11.4 8.25736 11.4H5C2.23858 11.4 0 13.5267 0 16.15V21.85Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 43 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4565 6.37937C11.618 2.70741 15.2654 0 19.6145 0C21.8495 0 23.9005 0.714955 25.5241 1.91028C25.2349 2.04034 24.9489 2.18158 24.6665 2.33413L18.832 5.48659C16.3944 6.80365 14.8758 9.26204 14.8469 11.9378L14.7561 20.3405L12.4183 19.0476C10.9636 18.2432 10.0679 16.7589 10.0679 15.1528V8.90322C10.0679 8.0245 10.2039 7.1779 10.4565 6.37937Z"
            fill="currentColor"
          />
          <path
            d="M39.2721 8.20949C40.3891 10.02 40.7481 12.0424 40.4405 13.9598C40.1535 13.7737 39.8562 13.5973 39.549 13.4313L33.6181 10.2267C31.2455 8.9448 28.3468 8.93095 25.9609 10.1901L17.9597 14.413L17.9861 11.9688C18.0034 10.3633 18.9146 8.8883 20.3772 8.09806L26.2117 4.9456C30.7967 2.46827 36.6447 3.95059 39.2721 8.20949Z"
            fill="currentColor"
          />
          <path
            d="M17.877 22.0663L17.9225 17.8597L21.8841 15.7689L25.8031 17.9361L25.7577 22.1378L21.7915 24.2311L17.877 22.0663Z"
            fill="currentColor"
          />
          <path
            d="M25.0912 14.0763L27.4787 12.8163C28.9102 12.0607 30.6494 12.069 32.073 12.8382L38.0039 16.0428C38.8241 16.4859 39.5443 17.0234 40.1599 17.6306C42.9867 20.4183 43.6424 24.7025 41.4931 28.1863C40.3707 30.0057 38.6616 31.3201 36.7083 32.034C36.734 31.7246 36.7471 31.412 36.7471 31.0967V24.8472C36.7471 22.1704 35.2542 19.6965 32.8297 18.3557L25.0912 14.0763Z"
            fill="currentColor"
          />
          <path
            d="M28.924 19.6619L31.2573 20.9523C32.712 21.7567 33.6077 23.2411 33.6077 24.8472V31.0967C33.6077 31.9755 33.4717 32.8221 33.2191 33.6206C32.0576 37.2925 28.4102 39.9999 24.0611 39.9999C21.8266 39.9999 19.776 39.2853 18.1526 38.0904C18.443 37.9599 18.7302 37.8182 19.0136 37.665L24.8481 34.5126C27.2857 33.1955 28.8043 30.7371 28.8332 28.0613L28.924 19.6619Z"
            fill="currentColor"
          />
          <path
            d="M25.7205 25.5846L25.694 28.0304C25.6767 29.6358 24.7655 31.1109 23.303 31.9011L17.4685 35.0536C16.6482 35.4968 15.7886 35.8128 14.9146 36.0092C10.888 36.9137 6.56299 35.2828 4.40802 31.7897C3.29171 29.9802 2.93247 27.9591 3.23908 26.0428C3.52487 26.2279 3.82079 26.4034 4.12661 26.5687L10.0575 29.7732C12.4301 31.0552 15.3288 31.069 17.7147 29.8098L25.7205 25.5846Z"
            fill="currentColor"
          />
          <path
            d="M18.5845 25.9237L16.197 27.1837C14.7654 27.9392 13.0262 27.9309 11.6027 27.1617L5.67174 23.9572C4.85267 23.5146 4.13325 22.978 3.51819 22.3718C0.68932 19.5841 0.0326006 15.2985 2.1825 11.8137C3.30495 9.99423 5.01398 8.67985 6.96736 7.96596C6.94163 8.27537 6.92853 8.58795 6.92853 8.90322V15.1528C6.92853 17.8296 8.42145 20.3035 10.8459 21.6442L18.5845 25.9237Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 42 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8942 26C25.1945 26 26.2487 24.9926 26.2487 23.75C26.2487 22.5073 25.1945 21.5 23.8942 21.5H17.8772V26H23.8942Z"
            fill="currentColor"
          />
          <path
            d="M17.8772 18.5V14H23.8942C25.1945 14 26.2487 15.0073 26.2487 16.25C26.2487 17.4926 25.1945 18.5 23.8942 18.5H17.8772Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0878906 20C0.0878906 8.95429 9.45796 0 21.0165 0C32.5751 0 41.9452 8.95429 41.9452 20C41.9452 31.0457 32.5751 39.9999 21.0165 39.9999C9.45796 39.9999 0.0878906 31.0457 0.0878906 20ZM13.1683 11C12.3014 11 11.5986 11.6716 11.5986 12.5C11.5986 13.3284 12.3014 14 13.1683 14H14.7379V26H13.1683C12.3014 26 11.5986 26.6715 11.5986 27.5C11.5986 28.3284 12.3014 29 13.1683 29H19.4469V30.5C19.4469 31.3284 20.1496 32 21.0165 32C21.8834 32 22.5862 31.3284 22.5862 30.5V29H23.8942C26.9283 29 29.388 26.6495 29.388 23.75C29.388 22.281 28.7566 20.9529 27.739 20C28.7566 19.0471 29.388 17.719 29.388 16.25C29.388 13.3505 26.9283 11 23.8942 11H22.5862V9.49999C22.5862 8.67156 21.8834 7.99999 21.0165 7.99999C20.1496 7.99999 19.4469 8.67156 19.4469 9.49999V11H13.1683Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="90%"
          height="100%"
          viewBox="0 0 38 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.87512 3.28827C1.99413 1.44089 3.62131 0 5.58853 0H32.4115C34.3787 0 36.0059 1.44089 36.1249 3.28826L37.993 32.2883C38.1227 34.3008 36.4228 36 34.2796 36H3.72037C1.57724 36 -0.122695 34.3008 0.00695338 32.2883L1.87512 3.28827ZM14.2169 10C14.2169 9.17157 13.503 8.5 12.6225 8.5C11.7419 8.5 11.0281 9.17157 11.0281 10C11.0281 14.1421 14.5972 17.5 19 17.5C23.4028 17.5 26.9719 14.1421 26.9719 10C26.9719 9.17157 26.2581 8.5 25.3775 8.5C24.497 8.5 23.7832 9.17157 23.7832 10C23.7832 12.4853 21.6417 14.5 19 14.5C16.3583 14.5 14.2169 12.4853 14.2169 10Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
      <AppIcon mouseX={mouseX}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 44 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.49999C0 0.67157 0.671573 0 1.5 0H42.5C43.3284 0 44 0.67157 44 1.49999C44 2.32842 43.3284 2.99999 42.5 2.99999H40V22.4999C40 26.642 36.6421 29.9999 32.5 29.9999H24.8028L27.2481 33.6678C27.7076 34.3571 27.5213 35.2884 26.832 35.7479C26.1427 36.2074 25.2114 36.0212 24.7519 35.3319L22 31.204L19.2481 35.3319C18.7885 36.0212 17.8572 36.2074 17.1679 35.7479C16.4786 35.2884 16.2924 34.3571 16.7519 33.6678L19.1972 29.9999H11.5C7.35785 29.9999 3.99998 26.642 3.99998 22.4999V2.99999H1.5C0.671573 2.99999 0 2.32842 0 1.49999ZM23.5 9.49996C23.5 8.67153 22.8284 7.99996 22 7.99996C21.1716 7.99996 20.5 8.67153 20.5 9.49996V20.4999C20.5 21.3283 21.1716 21.9999 22 21.9999C22.8284 21.9999 23.5 21.3283 23.5 20.4999V9.49996ZM31 13.4999C31 12.6715 30.3284 11.9999 29.5 11.9999C28.6716 11.9999 28 12.6715 28 13.4999V20.4999C28 21.3283 28.6716 21.9999 29.5 21.9999C30.3284 21.9999 31 21.3283 31 20.4999V13.4999ZM16 17.4999C16 16.6715 15.3284 15.9999 14.5 15.9999C13.6716 15.9999 13 16.6715 13 17.4999V20.4999C13 21.3283 13.6716 21.9999 14.5 21.9999C15.3284 21.9999 16 21.3283 16 20.4999V17.4999Z"
            fill="currentColor"
          />
        </svg>
      </AppIcon>
    </motion.div>
  );
}