import type { Example } from "@site/src/entities/example";

export const VERSIONS = {
    V0: "v0",
    V1: "v1",
    V2: "v2",
};

/**
 * List of site examples
 * @remark Add site here only if you're sure that its allowed to share website link / codebase
 * @example How to add new site?
 * 1. Add new item in `examples` const
 * 2. Fill details (required with "*"):
 *  - *title (should be unique)
 *  - *description (shortly)
 *  - *preview (image preview - `/pages/examples/img/{YOUR_SITE}.[png|jpg|jpeg]`)
 *  - *updatetAt (date of adding on examples list, for highlighting first two weeks)
 *  - *version (FSD version which implemented in your codebase)
 *  - website, source (links for your site)
 *  - tech (e.g. used UIKit/state-management tech)
 * 3. Profit!
 */
export const examples: Example[] = [
    {
        title: "Kundoluk",
        description: "School journal system",
        website: "https://kundoluk.edu.gov.kg/",
        preview:
            "https://design.megagroup.ru/storage/672.design/images/site/2022/11/4498530/76250_9.jpg",
        version: VERSIONS.V2,
        updatedAt: "2025-03-24",
        tech: ["education", "school"],
    },
    {
        title: "Balalyk",
        description: "The best solutions from developers in one place",
        source: "https://balalyk.edu.gov.kg/accelerator/",
        preview:
            "https://www.tuz.kg/data/image/big/2018-03-15_07-46-36__734542.jpg",
        version: VERSIONS.V2,
        updatedAt: "2021-11-12",
        tech: ["react", "effector"],
    },
    {
        title: "Ibilim",
        description: "Online learning system",
        website: "https://ibilim.edu.gov.kg/",
        preview:
            "https://kutbilim.kg/wp-content/uploads/2020/11/75babd0a-a6c2-4be3-90b6-bbbd869a8588.png.630x410_q85_crop.png",
        version: VERSIONS.V2,
        updatedAt: "2025-03-24",
        tech: ["education", "elearning"],
    },
    {
        title: "Asula",
        description: "Digital education platform",
        website:
            "https://oshsu.kg/storage/uploads/wuvUjPZtw9wdQRa6r3ru11PJOTkHzjeE4t93AyYY.jpeg",
        preview:
            "https://oshsu.kg/storage/uploads/wuvUjPZtw9wdQRa6r3ru11PJOTkHzjeE4t93AyYY.jpeg",

        version: VERSIONS.V2,
        updatedAt: "2025-03-24",
        tech: ["education", "digital"],
    },
];
