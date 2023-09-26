import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

const goals = [
  {
    id: 0,
    title: "Newest technology and meta",
    icon: (
      <svg
        width="100%"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.56246 3.04124L9.60027 3.14849L9.70187 3.1996C10.5079 3.60506 11.0456 4.40063 11.0456 5.30572V10.6451C11.0456 11.5501 10.5079 12.3457 9.70187 12.7512L9.60027 12.8023L9.56246 12.9095L9.06857 14.3104C8.91891 14.7349 8.49172 15.0346 7.99548 15.0346H3.3657C2.86946 15.0346 2.44227 14.7349 2.29261 14.3104L1.79873 12.9095L1.76091 12.8023L1.65932 12.7512C0.853326 12.3457 0.315572 11.5501 0.315572 10.6451V5.30572C0.315572 4.40063 0.853325 3.60506 1.65932 3.1996L1.76091 3.14849L1.79873 3.04123L2.29261 1.6404C2.44227 1.2159 2.86946 0.916158 3.3657 0.916158H7.99548C8.49172 0.916158 8.91891 1.2159 9.06857 1.6404L9.56246 3.04124ZM2.86409 2.54215L2.73143 2.91841H3.13039H8.23079H8.62975L8.49709 2.54215L8.26178 1.87474L8.19533 1.68626H7.99548H3.3657H3.16585L3.0994 1.87474L2.86409 2.54215ZM3.13039 13.0324H2.73143L2.86409 13.4086L3.0994 14.076L3.16585 14.2645H3.3657H7.99548H8.19533L8.26178 14.076L8.49709 13.4086L8.62975 13.0324H8.23079H3.13039ZM6.66888 5.97313C6.66888 5.43387 6.21127 5.02335 5.68059 5.02335C5.1499 5.02335 4.69229 5.43387 4.69229 5.97313V7.97539C4.69229 8.23256 4.80049 8.47577 4.98743 8.6525L6.04632 9.65363C6.43085 10.0172 7.04809 10.0172 7.43262 9.65363C7.82614 9.28158 7.82614 8.67145 7.43262 8.2994L6.66888 7.57731V5.97313Z"
          stroke="currentColor"
          strokeWidth="0.61"
        />
      </svg>
    ),
  },
  {
    id: 1,
    title: "Make a better networking",
    icon: (
      <svg
        width="100%"
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.37367 10.7695C8.94149 7.78099 7.06293 6.18895 5.09145 6.18895C3.11997 6.18895 1.24142 7.78099 0.809237 10.7695C0.728358 11.3288 1.17932 11.788 1.71274 11.788H8.47017C9.00358 11.788 9.45455 11.3288 9.37367 10.7695Z"
          fill="currentColor"
        />
        <path
          d="M10.0466 11.1659C9.87565 9.32144 9.20007 7.86661 8.23544 6.90268C8.87678 6.43052 9.62211 6.18895 10.3794 6.18895C12.18 6.18895 13.9129 7.55459 14.3413 10.1383C14.4348 10.7023 13.9784 11.1659 13.4446 11.1659H10.0466Z"
          fill="currentColor"
        />
        <path
          d="M2.60299 3.07833C2.60299 1.70398 3.71712 0.589844 5.09148 0.589844C6.46583 0.589844 7.57997 1.70398 7.57997 3.07833C7.57997 4.45269 6.46583 5.56682 5.09148 5.56682C3.71712 5.56682 2.60299 4.45269 2.60299 3.07833Z"
          fill="currentColor"
        />
        <path
          d="M8.20209 3.3894C8.20209 2.18683 9.17696 1.21197 10.3795 1.21197C11.5821 1.21197 12.5569 2.18683 12.5569 3.3894C12.5569 4.59196 11.5821 5.56682 10.3795 5.56682C9.17696 5.56682 8.20209 4.59196 8.20209 3.3894Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Be more productive",
    icon: (
      <svg
        width="100%"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.64671 0.568502H3.64671H7.71446C8.22373 0.568495 8.6275 0.568698 8.95304 0.595296C9.28822 0.622681 9.57118 0.679766 9.82932 0.811295C10.2485 1.02486 10.5892 1.36564 10.8028 1.78478L11.0083 1.6801L10.8028 1.78478C10.9343 2.04292 10.9914 2.32588 11.0188 2.66106C11.0454 2.9866 11.0456 3.39035 11.0456 3.89962V7.9674C11.0456 8.47668 11.0454 8.88043 11.0188 9.20598C10.9914 9.54115 10.9343 9.82411 10.8028 10.0823C10.5892 10.5014 10.2485 10.8422 9.82932 11.0557C9.57118 11.1873 9.28823 11.2444 8.95304 11.2717C8.6275 11.2983 8.22375 11.2985 7.71448 11.2985H3.6467C3.13742 11.2985 2.73367 11.2983 2.40813 11.2717C2.07295 11.2444 1.78999 11.1873 1.53185 11.0557L1.42717 11.2612L1.53185 11.0557C1.11271 10.8422 0.77193 10.5014 0.558365 10.0823C0.426837 9.82411 0.369752 9.54115 0.342366 9.20597C0.315769 8.88043 0.315565 8.47667 0.315573 7.9674V3.89963V3.89963C0.315565 3.39036 0.315769 2.9866 0.342366 2.66106C0.369752 2.32588 0.426837 2.04292 0.558365 1.78478C0.77193 1.36564 1.11271 1.02486 1.53185 0.811295C1.78999 0.679766 2.07295 0.622681 2.40813 0.595296C2.73367 0.568698 3.13744 0.568495 3.64671 0.568502ZM8.51812 5.16504C8.87344 4.80972 8.87344 4.23363 8.51812 3.87831C8.1628 3.52299 7.58671 3.52299 7.23139 3.87831L5.05107 6.05864L4.43946 5.44703C4.08414 5.09171 3.50805 5.09171 3.15273 5.44703C2.79741 5.80235 2.79741 6.37844 3.15273 6.73376L4.4077 7.98873C4.76302 8.34406 5.33911 8.34406 5.69443 7.98873L8.51812 5.16504Z"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
    ),
  },
];

export default function Goals({
  setActiveStep,
  stepIndex,
  setGoalsDone,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
  setGoalsDone: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selected, setSelected] = useState<string[]>([goals[0].title]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-4xl font-medium">
          What are your main goals?
        </h2>
        <p className="text-[#5c5c5c]">
          What are you looking to get out of Profit Saloon?
        </p>
      </div>
      <div key="goals-form" className="mt-10 flex flex-col items-start gap-6">
        <CheckboxGroup
          label="Select your goals"
          classNames={{
            base: "w-full",
            label: "w-full text-[#5c5c5c]",
          }}
          value={selected}
          onValueChange={setSelected}
        >
          {goals.map((goal, index) => (
            <Checkbox
              key={goal.id}
              color="default"
              aria-label={goal.title}
              className="profit-checkbox"
              classNames={{
                base: cn(
                  "inline-flex w-[500px] m-0 bg-black bg-gradient-to-r from-transparent to-transparent",
                  "items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 px-4 py-3 border-[1px] border-[#282828] transition-all duration-200 ease-out data-[selected=true]:via-[#174B3B]/30"
                ),
              }}
              value={goal.title}
            >
              <div className="w-[500px] text-white flex flex-row items-center gap-4 text-base">
                <span className="w-4">{goal.icon}</span>
                <span>{goal.title}</span>
              </div>
            </Checkbox>
          ))}
        </CheckboxGroup>
        <div className="flex flex-row items-center gap-4">
          <button
            type="submit"
            onClick={() => {
              setLoading(true);
              user?.update({
                unsafeMetadata: {
                  ...user.unsafeMetadata,
                  goals: selected,
                },
              });
              setTimeout(() => {
                setLoading(false);
                setActiveStep(stepIndex + 1);
                setGoalsDone(true);
              }, 500);
            }}
            className="px-6 py-2 rounded-full bg-white text-black text-sm flex flex-row items-center gap-3"
          >
            {loading && (
              <CircularProgress
                size="sm"
                color="default"
                aria-label="Loading..."
                classNames={{
                  svg: "w-4 h-4",
                }}
              />
            )}
            <span>Continue</span>
          </button>
          <button
            onClick={() => {
              setActiveStep(stepIndex + 1);
              setGoalsDone(true);
            }}
            className="text-[#5C5C5C]"
          >
            Skip
          </button>
        </div>
      </div>
    </motion.div>
  );
}
