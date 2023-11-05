import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import { FC, ReactNode } from "react";

import { Breadcrumb, CreateButton, PageHeader } from "../../../components";
import { ListProps } from "../types";

export const List: FC<ListProps> = ({
    title,
    resource: resourceFromProps,
    breadcrumb: breadcrumbFromProps,
    children,
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();

    const getUserFriendlyName = useUserFriendlyName();

    const { resource, identifier } = useResource(resourceFromProps);

    const breadcrumb =
        typeof breadcrumbFromProps === "undefined"
            ? globalBreadcrumb
            : breadcrumbFromProps;

    return (
        <>
            <PageHeader
                title={
                    title ??
                    translate(
                        `${identifier}.titles.List`,
                        `List ${getUserFriendlyName(
                            resource?.meta?.label ??
                                resource?.options?.label ??
                                resource?.label ??
                                identifier,
                            "plural",
                        )}`,
                    )
                }
                breadcrumb={
                    typeof breadcrumb !== "undefined" ? (
                        <>{breadcrumb}</> ?? undefined
                    ) : (
                        <Breadcrumb />
                    )
                }
                extra={
                    <>
                        <div className="inline-flex flex-row gap-4">
                            <CreateButton />
                        </div>
                    </>
                }
            />
            <div className="relative pt-2 sm:pt-4 !mt-0">
                {children as ReactNode}
            </div>
        </>
    );
};
