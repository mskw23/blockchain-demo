import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NAV_OPTIONS } from "./breadcrumb.const";

export function BreadcrumbComponent() {
  const { pathname } = useRouter();
  return (
    <Breadcrumb>
      {NAV_OPTIONS.map(({ label, to }) => (
        <BreadcrumbItem isCurrentPage={to === pathname} key={label}>
          <NextLink href={to} passHref>
            <BreadcrumbLink color={to === pathname ? "blue.200" : "inherit"}>
              {label}
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
