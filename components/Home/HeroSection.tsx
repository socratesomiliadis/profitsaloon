import Image from "next/image";
import Link from "next/link";

function NewsBtn({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="p-[1px] overflow-hidden rounded-full bg-gradient-to-b from-[#c3c3c3] to-[#818181]/0"
    >
      <div className="bg-gradient-to-b from-[#F0F0F0] via-white to-[#f8f8f8] rounded-full overflow-hidden px-8 py-3 flex flex-row items-center whitespace-nowrap gap-2">
        <span className="w-4">
          <svg
            width="100%"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75784 5.18725V3.89044H6.81498V5.18725H4.75784Z"
              fill="#282828"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.643555 1.29681C0.643555 0.580603 1.25756 0 2.01498 0H9.55784C10.3153 0 10.9293 0.580603 10.9293 1.29681V5.18725H12.9864C13.7438 5.18725 14.3578 5.76785 14.3578 6.48406V9.40189C14.3578 10.6553 13.2833 11.6713 11.9578 11.6713H3.04355C1.71807 11.6713 0.643555 10.6553 0.643555 9.40189V1.29681ZM11.9578 10.3745C12.5259 10.3745 12.9864 9.93905 12.9864 9.40189V6.48406H10.9293V9.40189C10.9293 9.93905 11.3898 10.3745 11.9578 10.3745ZM3.38641 8.42928C3.38641 8.07118 3.69342 7.78088 4.07213 7.78088H7.5007C7.87941 7.78088 8.18641 8.07118 8.18641 8.42928C8.18641 8.78739 7.87941 9.07769 7.5007 9.07769H4.07213C3.69342 9.07769 3.38641 8.78739 3.38641 8.42928ZM4.07213 2.59363C3.69342 2.59363 3.38641 2.88393 3.38641 3.24203V5.83566C3.38641 6.19376 3.69342 6.48406 4.07213 6.48406H7.5007C7.87941 6.48406 8.18641 6.19376 8.18641 5.83566V3.24203C8.18641 2.88393 7.87941 2.59363 7.5007 2.59363H4.07213Z"
              fill="#282828"
            />
          </svg>
        </span>
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
}

export default function MainSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center relative min-h-[80vh] w-screen px-4 lg:px-0">
      <div className="w-[50vw] -mt-[1%]">
        <svg
          width="100%"
          viewBox="0 0 1019 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M502.654 5.92447L500.345 11.843H492.384H484.503L490.394 6.14641C496.364 0.449799 495.568 0.893692 487.209 8.06993L482.831 11.843L474.87 11.769C467.387 11.769 467.068 11.6951 469.138 10.6593C470.332 10.0674 471.288 9.40161 471.288 9.17966C471.288 8.95772 470.014 9.47559 468.422 10.2894C465.237 12.065 467.944 11.917 430.687 11.769C422.567 11.6951 415.243 11.6951 414.367 11.6951C413.491 11.6951 402.744 11.6951 390.484 11.6951C378.224 11.6951 367.318 11.6211 366.203 11.6951C365.089 11.6951 349.008 11.769 330.379 11.917L296.545 12.1389L325.204 12.5828C340.967 12.8048 352.988 13.1007 351.873 13.1747C350.759 13.3226 350.281 13.5446 350.679 13.7665C351.157 13.9145 354.899 13.6186 359.118 13.1007C368.193 12.065 406.326 12.2129 404.416 13.3226C402.903 14.2104 402.983 14.2104 409.59 13.1007C413.013 12.5828 420.099 12.2869 427.9 12.4349C439.683 12.6568 440.479 12.7308 438.648 13.7665C437.294 14.5064 437.215 14.7283 438.25 14.4324C443.265 12.8048 445.813 12.5828 454.172 12.7308L463.486 12.9527L453.137 18.2794L442.867 23.6801L428.219 23.6061H413.571L424.955 19.4632C431.164 17.1697 436.18 15.1722 436.021 15.0242C435.861 14.8763 430.05 16.7998 423.044 19.2412L410.386 23.6801L388.255 23.5322L366.124 23.3102L384.513 18.9453C394.544 16.5039 402.664 14.4324 402.505 14.2844C402.346 14.1364 392.952 16.134 381.568 18.7973L360.869 23.6801L327.115 23.6061L293.361 23.5322L321.542 19.0193C337.066 16.5039 349.326 14.3584 348.928 14.2844C348.45 14.1364 334.121 16.2079 317.084 18.8713L286.036 23.6801L235.564 23.5322L185.092 23.3102L200.616 21.6826C247.585 16.7998 269.319 14.4324 267.886 14.2104C267.01 14.1364 245.436 16.2079 219.961 18.8713L173.708 23.6801L96.9642 23.6061C54.7713 23.5322 21.0169 23.3842 21.8926 23.2362C22.7683 23.1622 46.8103 21.4607 75.2309 19.4632C103.731 17.5396 126.022 15.838 124.907 15.6901C123.713 15.5421 107.95 16.5039 89.879 17.7616C25.7934 22.2005 14.6481 22.9403 7.32406 23.3842C-12.021 24.7159 6.36875 25.1597 78.256 25.2337C146.242 25.3077 155.318 25.4557 147.675 26.2695C124.35 28.8588 2.38828 41.4358 1.27375 41.4358C0.557266 41.4358 0 41.7317 0 42.1756C0 42.6935 27.306 42.9154 80.2463 42.9894C124.35 42.9894 160.094 43.1373 159.617 43.2853C158.661 43.6552 2.14945 68.0692 0.875703 68.0692C0.398047 68.0692 0 68.5871 0 69.179C0 70.1407 9.63274 70.2887 80.1666 70.4367C156.034 70.6586 160.094 70.7326 155.238 71.8423C152.372 72.5081 116.469 80.9421 75.4697 90.5597C34.4709 100.177 0.636875 108.019 0.398047 108.019C0.159219 108.019 0 108.685 0 109.499C0 110.979 0.636875 110.979 80.5647 111.127L161.209 111.349L155.636 113.346C152.532 114.456 142.58 118.007 133.346 121.188C102.537 131.99 61.9361 146.342 33.0379 156.478C17.2752 162.1 3.4232 166.983 2.22906 167.353C0.477656 167.945 0 168.537 0 170.238V172.384L78.8929 172.532L157.786 172.754L79.2113 213.814L0.716484 254.873L6.92602 255.095L13.1355 255.317L90.3566 213.814L167.578 172.384H231.902C288.982 172.384 299.172 172.606 295.51 174.011C295.112 174.085 275.13 191.249 251.088 211.964C227.046 232.753 205.949 251.026 204.198 252.506L201.014 255.169H207.78H214.547L260.323 213.814L306.098 172.384H370.9C432.199 172.384 435.623 172.458 435.065 173.641C434.747 174.381 427.582 192.285 419.064 213.444C410.546 234.602 403.221 252.654 402.823 253.542C402.107 255.243 402.107 255.243 408.715 255.243H415.481L428.537 218.104C435.782 197.612 442.31 178.968 443.106 176.601L444.539 172.384H509.5H574.461L575.894 176.601C576.69 178.968 583.218 197.612 590.463 218.031L603.519 255.243H610.286C614.027 255.243 616.893 255.021 616.734 254.652C616.495 254.356 609.171 236.304 600.414 214.553C591.657 192.803 584.253 174.381 583.935 173.641C583.378 172.458 586.801 172.384 648.1 172.384H712.902L758.677 213.814L804.453 255.169H811.22H817.986L812.971 250.952C792.193 233.345 722.933 173.345 722.933 172.902C722.853 172.606 751.751 172.384 787.178 172.384H851.422L928.643 213.814L1005.86 255.317L1012.07 255.095L1018.28 254.873L939.789 213.814L861.214 172.754L940.107 172.532L1019 172.384V170.238C1019 168.537 1018.52 167.945 1016.85 167.353C1015.58 166.983 992.251 158.697 964.866 149.079C937.48 139.462 907.228 128.808 897.596 125.405C887.963 122.002 875.305 117.563 869.414 115.492C863.523 113.42 858.508 111.571 858.348 111.349C858.109 111.127 894.173 110.979 938.435 110.979C1018.44 110.979 1019 110.979 1019 109.499C1019 108.685 1018.84 108.019 1018.6 108.019C1018.36 108.019 984.529 100.177 943.53 90.5597C902.532 80.9421 866.628 72.5081 863.762 71.8423C858.906 70.7326 862.966 70.6586 938.833 70.4367C1009.37 70.2887 1019 70.1407 1019 69.179C1019 68.5871 1018.6 68.0692 1018.12 68.0692C1016.77 68.0692 860.339 43.6552 859.383 43.2853C858.985 43.1373 894.65 42.9894 938.833 42.9894C991.694 42.9154 1019 42.6935 1019 42.1756C1019 41.7317 1018.44 41.4358 1017.73 41.4358C1016.61 41.4358 894.65 28.8588 871.325 26.2695C863.682 25.4557 872.758 25.3077 940.824 25.2337C1012.63 25.1597 1031.02 24.7159 1011.68 23.3842C1004.35 22.9403 993.207 22.2005 929.121 17.7616C911.05 16.5039 895.287 15.5421 894.093 15.6901C892.978 15.838 915.349 17.5396 943.769 19.4632C972.269 21.4607 996.232 23.1622 997.107 23.2362C997.983 23.3842 964.229 23.5322 922.036 23.6061L845.292 23.6801L799.039 18.8713C773.564 16.2079 751.99 14.1364 751.115 14.2104C749.682 14.4324 771.415 16.7998 818.384 21.6826L833.908 23.3102L783.436 23.5322L732.964 23.6801L701.916 18.8713C684.88 16.2079 670.55 14.1364 670.072 14.2844C669.674 14.3584 681.934 16.5039 697.458 19.0193L725.639 23.5322L691.805 23.6061L657.971 23.6801L636.238 18.5754C624.217 15.7641 614.266 13.2487 614.027 13.0267C613.072 12.1389 652.399 12.2129 659.882 13.1007C664.101 13.6186 667.923 13.9145 668.321 13.7665C668.798 13.5446 668.241 13.3226 667.127 13.1747C666.012 13.1007 678.033 12.8048 693.796 12.5828L722.455 12.1389L688.621 11.917C669.993 11.769 653.911 11.6951 652.797 11.6951C651.682 11.6211 640.776 11.6951 628.516 11.6951C616.256 11.6951 605.509 11.6951 604.633 11.6951C603.758 11.6951 596.433 11.6951 588.313 11.769C551.056 11.917 553.763 12.065 550.578 10.2894C548.986 9.47559 547.713 8.95772 547.713 9.17966C547.713 9.40161 548.668 10.0674 549.942 10.6593C551.932 11.6951 551.613 11.769 544.13 11.769L536.169 11.843L531.791 8.06993C523.432 0.893692 522.636 0.449799 528.606 6.14641L534.497 11.843H526.616H518.655L516.346 5.92447C515.073 2.59528 513.958 0.079895 513.719 0.227859C513.56 0.449799 514.356 2.96518 515.471 5.99844C516.585 8.95772 517.461 11.4731 517.461 11.6211C517.461 11.769 513.879 11.843 509.5 11.843C505.122 11.843 501.539 11.769 501.539 11.6211C501.539 11.4731 502.415 8.95772 503.529 5.99844C504.644 2.96518 505.44 0.449799 505.281 0.227859C505.042 0.079895 503.927 2.59528 502.654 5.92447ZM633.133 18.5754L652.877 23.3102L630.745 23.5322L608.614 23.6801L595.956 19.2412C588.95 16.7998 583.139 14.8763 582.979 15.0242C582.82 15.1722 587.836 17.1697 594.045 19.4632L605.429 23.6061H590.781L576.133 23.6801L567.296 19.0932C562.44 16.5779 557.743 14.1364 556.947 13.6186C555.673 12.8048 559.734 12.6568 579.158 12.6568C592.214 12.6568 603.041 12.5089 603.2 12.3609C603.758 11.843 612.833 13.6926 633.133 18.5754ZM475.666 18.1315L469.297 23.6061L456.958 23.6801H444.618L454.968 18.1315L465.317 12.6568H473.676H482.035L475.666 18.1315ZM497.718 18.1315L495.568 23.6801H483.229L470.889 23.6061L477.099 18.1315L483.388 12.5828H491.588H499.867L497.718 18.1315ZM519.69 17.6136C520.645 20.4249 521.441 22.8663 521.441 23.1622C521.441 23.4582 516.108 23.6801 509.5 23.6801C502.972 23.6801 497.559 23.4582 497.559 23.1622C497.559 22.8663 498.355 20.4249 499.31 17.6136L501.061 12.5828H509.5H517.939L519.69 17.6136ZM541.901 18.1315L548.111 23.6061L535.771 23.6801H523.432L521.282 18.1315L519.133 12.5828H527.412H535.612L541.901 18.1315ZM564.032 18.1315L574.382 23.6801H562.042L549.703 23.6061L543.334 18.1315L536.965 12.6568H545.324H553.683L564.032 18.1315ZM269.08 26.2695C265.816 26.7874 242.729 30.4125 217.811 34.3335L172.514 41.4358L94.8148 41.3618L17.116 41.2878L36.6203 39.1423C47.3676 38.0326 62.4138 36.405 70.0563 35.5912C77.6988 34.7034 99.9098 32.41 119.414 30.3385C138.918 28.341 156.99 26.3435 159.617 25.9736C162.244 25.6036 189.311 25.3817 219.722 25.3077C267.488 25.3077 274.254 25.4557 269.08 26.2695ZM319.632 33.2978L285.4 41.4358L233.654 41.3618L181.907 41.2878L194.645 39.2163C201.651 38.0326 213.99 36.0351 222.11 34.7774C230.23 33.5197 246.709 30.8564 258.73 28.8588L280.623 25.3077H317.243L353.864 25.2337L319.632 33.2978ZM405.132 25.4557C404.973 25.6036 394.783 29.2288 382.523 33.5937L360.232 41.4358L326 41.3618C296.863 41.2878 292.326 41.1398 295.351 40.326C297.341 39.8082 310.397 36.7009 324.408 33.2978C338.419 29.9686 351.475 26.7874 353.466 26.2695C355.934 25.6036 364.452 25.3077 381.249 25.2337C394.544 25.2337 405.291 25.3077 405.132 25.4557ZM439.364 25.4557C439.205 25.6036 432.279 29.2288 424 33.5937L409.033 41.4358L386.822 41.2878L364.611 41.0659L386.344 33.2238L407.998 25.3077L423.84 25.2337C432.597 25.1597 439.523 25.3077 439.364 25.4557ZM460.779 30.9303C457.117 34.1855 452.898 37.8107 451.226 39.1423L448.36 41.4358L430.368 41.2878L412.297 41.0659L426.865 33.1498L441.434 25.3077L454.41 25.2337L467.387 25.1597L460.779 30.9303ZM491.668 33.2978L488.404 41.4358H469.775H451.226L460.222 33.2978L469.297 25.2337L482.114 25.1597H494.932L491.668 33.2978ZM525.183 32.9278C526.616 36.9969 527.81 40.548 527.81 40.8439C527.81 41.2138 519.61 41.4358 509.5 41.4358C499.469 41.4358 491.19 41.2138 491.19 40.9919C491.19 40.474 496.046 26.4174 496.524 25.6776C496.683 25.3817 502.654 25.2337 509.739 25.3077L522.556 25.5297L525.183 32.9278ZM558.778 33.2978L567.774 41.4358H549.225H530.596L527.333 33.2978L524.069 25.1597H536.886L549.703 25.2337L558.778 33.2978ZM591.816 33.0758L606.703 41.0659L588.632 41.2878L570.64 41.4358L567.774 39.1423C566.102 37.8107 561.883 34.1855 558.221 30.9303L551.613 25.1597H564.271H577.009L591.816 33.0758ZM632.258 33.0758L654.389 41.0659L632.178 41.2878L609.967 41.4358L595 33.5937C586.721 29.2288 579.795 25.6036 579.636 25.4557C579.477 25.3077 586.243 25.1597 594.682 25.1597H610.126L632.258 33.0758ZM666.569 26.5654C669.674 27.3792 683.048 30.5604 696.184 33.7417C709.32 36.8489 721.659 39.8082 723.649 40.326C726.674 41.1398 722.137 41.2878 693 41.3618L658.768 41.4358L636.477 33.5937C624.217 29.2288 614.027 25.6036 613.868 25.4557C613.709 25.3077 624.138 25.1597 637.193 25.1597C657.971 25.1597 661.474 25.3077 666.569 26.5654ZM773.644 31.0783C794.104 34.3335 816.713 37.9586 823.957 39.1423L837.093 41.2878L785.346 41.3618L733.6 41.4358L699.368 33.2978L665.136 25.2337H700.801L736.466 25.1597L773.644 31.0783ZM878.49 27.9711C900.223 30.4125 938.913 34.5555 978.32 38.6245L1001.8 41.0659L924.185 41.2878L846.646 41.4358L801.268 34.3335C776.351 30.4125 753.184 26.7874 749.92 26.2695C744.746 25.4557 751.831 25.3077 800.87 25.4557L857.791 25.6036L878.49 27.9711ZM276.961 43.2113C276.802 43.3593 252.919 49.0559 223.941 55.7883L171.319 68.0692L92.9838 67.9953C49.9947 67.9213 15.6034 67.6993 16.718 67.5514C17.8325 67.4034 52.5422 61.7808 93.9391 55.1224L169.17 43.0634L223.225 42.9894C252.999 42.9154 277.12 43.0634 276.961 43.2113ZM351.873 44.1731C349.485 45.1349 316.447 56.898 291.609 65.5539L284.365 68.0692L232.459 67.9213L180.554 67.6993L190.426 65.4059C205.949 61.7068 245.595 52.1631 265.099 47.4283L283.011 43.0634H318.836C351.794 43.0634 354.421 43.1373 351.873 44.1731ZM404.973 43.3593C404.734 43.5812 394.066 49.2778 381.249 55.9362L358.003 68.0692L324.329 67.9213L290.574 67.6993L324.647 55.3444L358.64 43.0634L382.045 42.9894C394.942 42.9154 405.291 43.1373 404.973 43.3593ZM445.016 44.691C443.902 45.6527 437.374 51.2754 430.448 57.2679L417.87 68.0692H389.927H361.904L385.309 55.4923L408.794 42.9154H427.9H447.007L445.016 44.691ZM487.209 43.5812C487.209 43.8772 485.06 49.4998 482.512 55.9362L477.815 67.6993L449.793 67.9213L421.77 68.0692L435.543 55.5663L449.395 42.9894L468.342 42.9154C478.691 42.9154 487.209 43.2113 487.209 43.5812ZM532.666 54.5306C534.895 60.967 536.965 66.6636 537.204 67.1075C537.443 67.8473 531.552 68.0692 509.5 68.0692C487.448 68.0692 481.557 67.8473 481.796 67.1075C482.035 66.6636 484.105 60.967 486.334 54.5306L490.553 42.9154H509.5H528.447L532.666 54.5306ZM583.457 55.5663L597.23 68.0692L569.207 67.9213L541.185 67.6993L536.488 55.9362C533.94 49.4998 531.791 43.8772 531.791 43.5812C531.791 43.2113 540.309 42.9154 550.738 42.9154L569.605 42.9894L583.457 55.5663ZM633.691 55.4923L657.096 68.0692H629.073H601.13L588.552 57.2679C581.626 51.2754 575.098 45.6527 573.984 44.691L571.993 42.9154H591.1H610.206L633.691 55.4923ZM693.955 55.2704L728.426 67.6993L694.671 67.9213L660.997 68.0692L637.751 55.9362C624.934 49.2778 614.266 43.5812 614.027 43.3593C613.709 43.1373 623.899 42.9154 636.477 42.9154H659.484L693.955 55.2704ZM753.742 47.4283C764.091 49.9437 782.799 54.4566 795.298 57.4158C807.796 60.4491 822.604 64.0002 828.176 65.2579L838.446 67.6993L786.541 67.9213L734.635 68.0692L727.391 65.5539C702.553 56.898 669.515 45.1349 667.127 44.1731C664.579 43.1373 667.127 43.0634 699.607 42.9894L734.795 42.9154L753.742 47.4283ZM920.205 54.4566C959.85 60.819 995.038 66.4416 998.302 66.9595C1003.4 67.7733 992.888 67.9213 926.016 67.9953L847.681 68.0692L795.059 55.7883C766.081 49.0559 742.198 43.3593 742.039 43.2113C741.88 43.0634 765.603 42.9154 794.9 42.9154H848.079L920.205 54.4566ZM275.846 70.9545C273.379 71.9163 241.694 83.0876 206.586 95.4425C189.072 101.583 173.867 106.91 172.752 107.28C171.479 107.798 142.182 107.945 92.3469 107.871L14.0113 107.65L21.0965 106.022C25.077 105.06 34.5505 102.841 42.193 100.991C49.8355 99.1416 63.8467 95.7385 73.2406 93.519C82.6345 91.2995 94.3371 88.4882 99.1137 87.3045C103.97 86.1208 116.469 83.0876 126.977 80.5722C137.485 78.0568 151.258 74.8016 157.627 73.248L169.17 70.4367L223.304 70.3627C253.078 70.3627 276.722 70.6586 275.846 70.9545ZM352.272 70.9545C351.794 71.3244 335.792 79.7584 316.527 89.8199L281.658 108.019L230.628 107.871L179.599 107.65L211.443 96.2563C228.877 89.9679 252.203 81.6079 263.109 77.6129L283.011 70.3627H318.039C337.942 70.2887 352.67 70.5846 352.272 70.9545ZM412.775 72.4342C411.421 73.6179 401.629 82.1258 390.962 91.2995L371.537 108.019H329.662C304.426 108.019 288.266 107.724 288.982 107.28C289.619 106.91 305.382 98.4758 324.01 88.4882L357.844 70.2887H386.504H415.163L412.775 72.4342ZM473.915 77.095C472.402 80.8681 468.979 89.376 466.352 95.9604L461.575 108.019H419.621L377.746 107.945L398.445 89.1541L419.143 70.3627L447.882 70.2887H476.701L473.915 77.095ZM544.926 89.1541L551.375 107.65L530.437 107.871C518.894 107.945 500.106 107.945 488.563 107.871L467.625 107.65L473.835 89.8939C477.258 80.1283 480.204 71.6944 480.443 71.1765C480.681 70.4367 486.971 70.2887 509.58 70.4367L538.398 70.6586L544.926 89.1541ZM620.555 89.1541L641.254 107.945L599.379 108.019H557.425L552.648 95.9604C550.021 89.376 546.598 80.8681 545.085 77.095L542.299 70.2887H571.118L599.857 70.3627L620.555 89.1541ZM694.99 88.4882C713.618 98.4758 729.381 106.91 730.018 107.28C730.734 107.724 714.574 108.019 689.338 108.019H647.463L628.038 91.2995C617.371 82.1258 607.579 73.6179 606.225 72.4342L603.837 70.2887H632.497H661.156L694.99 88.4882ZM758.837 78.7226C771.654 83.3095 795.059 91.7434 810.742 97.3661L839.401 107.65L788.372 107.871L737.342 108.019L702.473 89.8199C683.208 79.7584 667.206 71.3244 666.808 70.9545C666.331 70.5846 680.979 70.2887 700.722 70.2887H735.511L758.837 78.7226ZM867.663 74.8016C878.012 77.243 891.227 80.4242 897.039 81.8299C919.568 87.2305 929.28 89.598 945.759 93.519C955.153 95.7385 969.165 99.1416 976.807 100.991C984.45 102.841 993.923 105.06 997.904 106.022L1004.99 107.65L926.653 107.871C876.818 107.945 847.521 107.798 846.248 107.28C845.133 106.91 829.928 101.583 812.414 95.4425C777.306 83.0876 745.621 71.9163 743.154 70.9545C742.278 70.6586 765.683 70.3627 795.218 70.3627L848.875 70.2887L867.663 74.8016ZM274.254 111.645C273.777 112.014 249.496 124.813 220.2 140.128L167.02 167.945L90.0382 167.797C17.3548 167.575 13.2948 167.501 16.718 166.317C20.2208 165.133 149.666 118.525 163.199 113.568L169.966 111.053H222.508C254.034 110.979 274.652 111.275 274.254 111.645ZM366.999 112.014C366.362 112.606 351.475 125.405 333.961 140.498L302.118 167.945H239.226C199.74 167.945 176.812 167.649 177.529 167.205C178.166 166.835 201.81 154.036 230.071 138.796L281.419 111.127L324.806 111.053C362.143 110.979 367.955 111.127 366.999 112.014ZM459.903 111.867C459.744 112.384 454.57 125.257 448.519 140.35L437.454 167.945H374.164H310.875L313.263 165.873C314.616 164.69 328.787 151.891 344.868 137.39L374.084 110.979H417.233C451.385 110.979 460.222 111.201 459.903 111.867ZM562.599 139.092C567.933 154.332 572.391 167.057 572.391 167.353C572.391 167.723 544.13 167.945 509.5 167.945C474.95 167.945 446.609 167.723 446.609 167.501C446.609 166.909 465.794 112.236 466.272 111.497C466.431 111.201 486.015 111.053 509.659 111.127L552.808 111.349L562.599 139.092ZM674.132 137.39C690.213 151.891 704.384 164.69 705.737 165.873L708.125 167.945H644.836H581.547L570.481 140.35C564.43 125.257 559.256 112.384 559.097 111.867C558.778 111.201 567.615 110.979 601.767 110.979H644.916L674.132 137.39ZM787.416 138.056C815.2 152.926 839.003 165.725 840.277 166.539C842.665 167.871 841.869 167.945 779.774 167.945H716.882L685.039 140.498C667.525 125.405 652.638 112.606 652.001 112.014C651.046 111.127 656.698 110.979 693.955 110.979H736.944L787.416 138.056ZM875.066 120.522C974.817 156.478 999.098 165.281 1002.28 166.317C1005.71 167.501 1001.57 167.575 928.962 167.797L851.98 167.945L798.801 140.128C769.504 124.813 745.223 112.014 744.825 111.645C744.348 111.275 764.807 110.979 796.333 110.979H848.556L875.066 120.522Z"
            fill="url(#paint0_linear_2066_737)"
            fillOpacity="0.14"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2066_737"
              x1="510"
              y1="0.221585"
              x2="510"
              y2="295.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2C2C2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-mt-[8%] flex flex-col items-center gap-4">
        <NewsBtn
          link="/"
          text="New: The mindset course will be free until 06/06"
        />
        <h1 className="text-profitBlack mt-6 text-6xl font-medium">
          Change your life with Profit Saloon
        </h1>
        <p className="text-profitGray text-2xl font-medium">
          Never miss on money, an idea or connection.
        </p>
      </div>
      <div className="mt-44 relative w-full flex flex-row justify-center">
        <div className="absolute w-full h-1/3 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <Image
          src="/static/images/heroMockup.png"
          width={2560}
          height={1440}
          alt=""
          quality={100}
          priority
          className="w-[130%] ml-[12%] max-w-none object-center object-cover"
        />
      </div>
    </section>
  );
}
