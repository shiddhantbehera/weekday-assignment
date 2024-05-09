import { Typography } from "@mui/material";

interface EstimatedSalaryProps {
  minSalary: number | null;
  maxSalary: number | null;
  currencyCode: string;
}

const formatCurrency = (value: number, currencyCode: string): string => {
  if (currencyCode !== "USD") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currencyCode,
      notation: "compact",
    }).format(value);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    notation: "compact",
  }).format(value * 1_000);
};

export default function EstimatedSalary({
  minSalary,
  maxSalary,
  currencyCode,
}: EstimatedSalaryProps) {
  let dispValue = "";

  if (minSalary !== null && maxSalary !== null) {
    const range = `${formatCurrency(
      minSalary,
      currencyCode
    )} - ${formatCurrency(maxSalary, currencyCode)}`;
    dispValue = `${range} ✅`;
  } else if (maxSalary !== null) {
    dispValue = `< ${formatCurrency(maxSalary, currencyCode)}`;
  } else if (minSalary !== null) {
    dispValue = `> ${formatCurrency(minSalary, currencyCode)}`;
  } else {
    dispValue = "-";
  }

  return <Typography>{`Estimated Salary: ${dispValue}`}</Typography>;
}
