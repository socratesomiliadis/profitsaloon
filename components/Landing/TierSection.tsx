import Image from 'next/image';
import TierCard from './TierCard';

export default function TierSection() {
  return (
    <section className="tier-section flex h-[200vh] w-screen flex-col items-center -mt-44 relative noisy">
      <div className="flex flex-col items-center gap-4 z-10">
        <span className="text-center text-4xl font-medium text-[#ededed]">
          Increase your earnings through participation
          <br />
          in our affiliate program.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Participate in a professional community where individuals are
          dedicated <br />
          to building successful businesses, creating strong brands, and
          increasing revenue.
        </p>
      </div>
      <div className="mt-32 flex w-full flex-row items-center gap-10 px-24 3xl:px-64 z-10">
        <TierCard
          title="Student"
          price="28,99"
          fromColor="#3571A9"
          toColor="#02305C"
        />
        <TierCard
          title="Scholar"
          price="88,99"
          fromColor="#881111"
          toColor="#FF7A7A"
        />
        <TierCard
          title="Expert"
          price="988,99"
          fromColor="#95780A"
          toColor="#E8D694"
        />
      </div>
      <Image
        src="/static/images/grain.png"
        width={3000}
        height={3000}
        quality={100}
        className="absolute inset-0 w-full h-full object-cover z-[1] opacity-80"
        alt=""
        priority={true}
      />
      <div className="labels-section z-10">
        <div className="tier-label flex flex-row items-start gap-4 absolute left-[35%] top-[43.7%]">
          <svg
            width="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#EDEDED" />
            <path
              d="M12.5221 11.9006V12.1698C12.5221 12.3184 12.4101 12.439 12.2721 12.439H10.2721C10.1341 12.439 10.0221 12.3184 10.0221 12.1698V11.9006C10.0236 11.4198 10.264 10.9767 10.6521 10.739C10.6017 10.6582 10.5653 10.5682 10.5447 10.4733L9.02227 9.7707L7.49987 10.4738C7.47928 10.5687 7.44284 10.6587 7.3924 10.7396C7.78039 10.9771 8.02067 11.42 8.02241 11.9006V12.1698C8.02241 12.3184 7.91048 12.439 7.77242 12.439H5.77246C5.6344 12.439 5.52246 12.3184 5.52246 12.1698V11.9006C5.52397 11.4198 5.76431 10.9767 6.15248 10.739C5.9185 10.3722 6.00488 9.87069 6.3455 9.61867C6.68613 9.36672 7.1519 9.45974 7.38594 9.82652C7.40447 9.85554 7.42115 9.88577 7.436 9.91714L8.77247 9.30039V8.40099H8.02248C7.88443 8.40099 7.77249 8.28045 7.77249 8.1318V7.8626C7.774 7.38184 8.01434 6.9387 8.40251 6.70104C8.16942 6.33234 8.25809 5.83 8.60049 5.57902C8.9429 5.32804 9.4094 5.42352 9.64248 5.79221C9.81581 6.06639 9.81581 6.42686 9.64248 6.70104C10.0306 6.93868 10.271 7.38184 10.2725 7.8626V8.1318C10.2725 8.28045 10.1606 8.40099 10.0225 8.40099H9.27252V9.30039L10.609 9.91714C10.7984 9.52182 11.2496 9.36667 11.6167 9.57068C11.9838 9.77462 12.1279 10.2604 11.9384 10.6557C11.9246 10.6845 11.9093 10.7123 11.8924 10.739C12.2806 10.9767 12.5206 11.4198 12.5221 11.9006ZM10.8454 7.78376C10.943 7.88885 11.1013 7.88885 11.1989 7.78376C11.5722 7.38104 11.5722 6.72904 11.1989 6.32633C11.0996 6.22304 10.9413 6.22598 10.8454 6.33294C10.7518 6.43725 10.7518 6.60267 10.8454 6.70698C11.0236 6.89938 11.0236 7.21075 10.8454 7.4031C10.7478 7.50819 10.7478 7.6786 10.8454 7.78376ZM11.4471 8.09008C11.3594 8.20491 11.3747 8.3746 11.4814 8.46913C11.588 8.56358 11.7456 8.54712 11.8334 8.43223C12.443 7.63 12.4419 6.47588 11.8307 5.67523C11.7428 5.56046 11.5852 5.54405 11.4786 5.63863C11.3721 5.73321 11.3568 5.9029 11.4447 6.01767C11.9042 6.61951 11.9052 7.48698 11.4471 8.09008ZM6.84721 7.78376C6.94653 7.88705 7.10479 7.8841 7.20071 7.77715C7.29429 7.67284 7.29429 7.50742 7.20071 7.40311C7.02253 7.2107 7.02253 6.89933 7.20071 6.70699C7.29831 6.60135 7.29792 6.43052 7.19982 6.32542C7.10172 6.22033 6.94307 6.22075 6.84547 6.32639C6.4722 6.7291 6.4722 7.3811 6.84547 7.78382L6.84721 7.78376ZM6.40468 8.53022C6.54274 8.52986 6.65439 8.40903 6.65407 8.26037C6.6539 8.19824 6.63381 8.13809 6.5972 8.09008C6.13895 7.48686 6.14001 6.61919 6.59971 6.01729C6.69184 5.90655 6.68319 5.73638 6.58035 5.63718C6.47751 5.53797 6.31947 5.54728 6.22734 5.65803C6.22277 5.66355 6.21836 5.66926 6.21423 5.67515C5.60303 6.47595 5.60185 7.62996 6.21149 8.43216C6.25904 8.49429 6.32991 8.53028 6.40468 8.53022Z"
              fill="#202020"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <span className="text-base text-[#ededed] font-medium">
              Networking
            </span>
            <p className="text-[#818181] text-[12px]">
              Our mission is to provide a built-in platform for individuals{' '}
              <br />
              to connect with like-minded individuals, share ideas, and <br />
              gain access to valuable resources and opportunities that
              <br />
              will help them become successful.
            </p>
          </div>
        </div>
        <div className="tier-label flex flex-row items-start gap-4 absolute left-[37%] top-[60%]">
          <svg
            width="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#EDEDED" />
            <path
              d="M8.49342 12.8229H9.49627L9.45342 12.1286C10.7563 11.9914 11.5191 11.2457 11.5191 10.14C11.5191 9.23143 10.9877 8.43429 9.47913 8.43429H8.71627C7.9877 8.43429 7.72199 8.11714 7.72199 7.68857C7.72199 7.11429 8.19342 6.77143 8.98199 6.77143C9.81342 6.77143 10.242 7.16571 10.2763 7.95429H11.4334C11.3991 6.81429 10.7563 6.02571 9.45342 5.88L9.49627 5.13429H8.49342L8.53627 5.88C7.27627 6.00857 6.55627 6.72857 6.55627 7.74857C6.55627 8.70857 7.18199 9.38571 8.51056 9.38571H9.27342C10.0791 9.38571 10.3363 9.74571 10.3363 10.2C10.3363 10.8343 9.8477 11.2286 9.04199 11.2286C8.18484 11.2286 7.6877 10.7829 7.65342 9.92571H6.47056C6.50484 11.1514 7.21627 11.9657 8.53627 12.12L8.49342 12.8229Z"
              fill="#202020"
            />
          </svg>

          <div className="flex flex-col gap-2">
            <span className="text-base text-[#ededed] font-medium">
              Money Plans
            </span>
            <p className="text-[#818181] text-[12px]">
              Our primary focus is on assisting people in establishing <br />
              and growing side businesses. Our team of experts offer <br />
              guidance, resources, and assistance to help individuals <br />
              transform their interests into successful ventures.
            </p>
          </div>
        </div>
        <div className="tier-label flex flex-row items-start gap-4 absolute left-[61%] top-[55%]">
          <svg
            width="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#EDEDED" />
            <path
              d="M11.7768 6.50249C11.2512 6.26436 10.6963 6.09543 10.1263 6C10.0483 6.13798 9.97773 6.27993 9.91488 6.42528C9.30775 6.33475 8.69034 6.33475 8.0832 6.42528C8.02032 6.27995 7.94975 6.13799 7.87178 6C7.30144 6.09623 6.7462 6.26557 6.22006 6.50374C5.17555 8.033 4.8924 9.52428 5.03397 10.9944C5.64567 11.4416 6.33033 11.7818 7.05819 12C7.22209 11.7819 7.36711 11.5505 7.49173 11.3082C7.25504 11.2207 7.02658 11.1128 6.80902 10.9857C6.86628 10.9446 6.92228 10.9022 6.97639 10.8611C7.60946 11.1558 8.30041 11.3085 8.99999 11.3085C9.69956 11.3085 10.3905 11.1558 11.0236 10.8611C11.0783 10.9054 11.1343 10.9477 11.191 10.9857C10.973 11.113 10.7441 11.2212 10.507 11.3088C10.6314 11.551 10.7765 11.7822 10.9405 12C11.669 11.7826 12.3542 11.4427 12.966 10.995C13.1321 9.29016 12.6822 7.81258 11.7768 6.50249ZM7.67106 10.0903C7.27654 10.0903 6.9506 9.73599 6.9506 9.30012C6.9506 8.86426 7.26521 8.50685 7.6698 8.50685C8.07439 8.50685 8.39782 8.86426 8.39089 9.30012C8.38397 9.73599 8.07314 10.0903 7.67106 10.0903ZM10.3289 10.0903C9.93376 10.0903 9.60908 9.73599 9.60908 9.30012C9.60908 8.86426 9.92369 8.50685 10.3289 8.50685C10.7341 8.50685 11.055 8.86426 11.0481 9.30012C11.0412 9.73599 10.731 10.0903 10.3289 10.0903Z"
              fill="#202020"
            />
          </svg>

          <div className="flex flex-col gap-2">
            <span className="text-base text-[#ededed] font-medium">
              Discord Access
            </span>
            <p className="text-[#818181] text-[12px]">
              We are now offering private access to our Discord server,
              <br />
              filled with like-minded individuals and opportunities for <br />
              networking and collaboration. In this community, people
              <br />
              support each other in their entrepreneurial journey.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/static/images/overlappingCircles.png"
        width={2000}
        height={2000}
        className="mt-[10%] absolute w-[60%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 z-0"
        alt=""
      />
    </section>
  );
}
