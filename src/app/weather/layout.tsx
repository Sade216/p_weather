import React, { ReactNode } from "react";

import { Container } from "@/shared/ui";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    return <Container>{children}</Container>;
}

export default Layout;
