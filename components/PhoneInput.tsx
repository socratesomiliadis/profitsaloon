import { Input } from "@nextui-org/react";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en";
import { Avatar } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

export default function PhoneInput({
  register,
  countryName,
  setCountryName,
  countryCode,
  setCountryCode,
  hasError,
}: {
  register: any;
  countryName: string;
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  hasError: boolean;
}) {
  const labels = en;
  const sorted = getCountries().sort(function (a, b) {
    var textA = labels[a].toUpperCase();
    var textB = labels[b].toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <div className="w-[400px] flex flex-row items-start justify-between gap-1">
      <Select
        size="sm"
        className="w-[120px] bg-transparent"
        label="Country"
        scrollShadowProps={{
          isEnabled: false,
        }}
        onChange={(e) => {
          const countryNumberCode = e.target.value
            .split("(")[1]
            .replace(")", "");
          setCountryCode(countryNumberCode);
          setCountryName(e.target.value.split("(")[0].trim());
        }}
        defaultSelectedKeys={["United States (+1)"]}
        classNames={{
          trigger:
            "bg-gradient-to-r text-white border-[#282828] rounded-xl border-[1px] from-[#121212] via-[#232323] to-[#121212]",
          popover:
            "bg-gradient-to-r w-[250px] text-white border-[#282828] rounded-xl border-[1px] from-[#121212] via-[#232323] to-[#121212]",
        }}
        renderValue={(items) => {
          return items.map((item) => {
            const countryNumberCode = item.key
              ?.toString()
              .split("(")[1]
              .replace(")", "");
            return (
              <div key={item.key} className="flex items-center gap-2">
                {countryNumberCode}
              </div>
            );
          });
        }}
      >
        {sorted.map((country) => (
          <SelectItem
            key={`${labels[country]} (+${getCountryCallingCode(country)})`}
            className="text-white"
            // textValue={`+${getCountryCallingCode(country)}`}
            startContent={
              <Avatar
                alt={`${labels[country]} ${getCountryCallingCode(country)}`}
                className="w-6 h-6"
                src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
              />
            }
          >
            {`${labels[country]} (+${getCountryCallingCode(country)})`}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="tel"
        label="Phone Number"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        size="sm"
        className="w-[276px]"
        errorMessage={hasError && "Please provide a valid phone number"}
        validationState={hasError ? "invalid" : "valid"}
        {...register("phoneNumber", {
          required: true,
          pattern: /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        })}
        classNames={{
          inputWrapper: [
            "bg-gradient-to-r w-[276px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
          ],
        }}
      />
    </div>
  );
}
