import React, { ReactNode, Suspense } from "react";

import { Container } from "@/shared/ui";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    return (
        <Container>
            <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        </Container>
    );
}

export default Layout;
