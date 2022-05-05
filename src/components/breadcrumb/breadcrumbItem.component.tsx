import {
  BreadcrumbItem as BreadcrumbItemChakra,
  BreadcrumbLink,
} from "@chakra-ui/react";
import NextLink from "next/link";

type BreadcrumbItemProps = {
  label: string;
  to: string;
};

export function BreadcrumbItem({ label, to }: BreadcrumbItemProps) {
  return (
    <BreadcrumbItemChakra>
      <NextLink href={to} passHref>
        <BreadcrumbLink>{label}</BreadcrumbLink>
      </NextLink>
    </BreadcrumbItemChakra>
  );
}
