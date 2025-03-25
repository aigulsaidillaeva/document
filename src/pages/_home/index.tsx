import React from "react";

import Layout from "@theme/Layout";
import Image from "@theme/IdealImage";
import { translate } from "@docusaurus/Translate";
import { Hero } from "@site/src/features/hero";
import { Card, Section } from "@site/src/shared/ui";
import imgScheme from "@site/static/img/visual_schema.jpg";
// NOTE: Locate at index before of specific route-mapping while Node/SSR building
// "_" for excluding file from routing
import { features, concepts } from "./_config";
import { Companies } from "./companies";
import styles from "./styles.module.scss";

export default function HomePage() {
    // NOTE: use siteConfig for getting config
    // const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Welcome"
            description="Architectural methodology for frontend projects"
        >
            <Hero />
            <main>
                <Section title={translate({ id: "pages.home.features.title" })}>
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            size={12 / features.length}
                            {...feature}
                        />
                    ))}
                </Section>
                <Section
                    title={translate({ id: "pages.home.concepts.title" })}
                    withAltBg
                >
                    {concepts.map((concept) => (
                        <Card
                            key={concept.title}
                            size={12 / concepts.length}
                            {...concept}
                        />
                    ))}
                </Section>

                <Companies />
            </main>
        </Layout>
    );
}
