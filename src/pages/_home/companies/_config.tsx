export type Company = {
    /* URL to your company website */
    url: string;
    /* Image path to your company logo */
    src: string;
    /* Name of your company */
    alt: string;
};
/**
 * Companies using Feature-Sliced Design
 * @see https://github.com/feature-sliced/documentation/issues/131
 * @see static/img/companies
 */
export const companies: Company[] = [
    {
        url: "https://balalyk.edu.gov.kg/",
        src: "balaluk.svg",
        alt: "red_mad_robot",
    },
    {
        url: "https://kundoluk.edu.gov.kg/",
        src: "kundoluk.png",
        alt: "KODE",
    },
    {
        url: "https://2020.edu.gov.kg/",
        src: "vuz.png",
        alt: "vuz",
    },
    {
        url: "https://ibilim.edu.gov.kg/",
        src: "ibilim.png",
        alt: "FXDD",
    },
    {
        url: "https://asula.edu.gov.kg/",
        src: "asula.png",
        alt: "asula",
    },
    {
        url: "https://open.edu.gov.kg/",
        src: "open.svg",
        alt: "open",
    },
    {
        url: "https://ibilim.edu.gov.kg/",
        src: "ibilim.png",
        alt: "FXDD",
    },
    {
        url: "https://asula.edu.gov.kg/",
        src: "asula.png",
        alt: "asula",
    },
    {
        url: "https://open.edu.gov.kg/",
        src: "open.svg",
        alt: "open",
    },
   
];

const japaneseCompanies: Company[] = [
    {
        url: "https://hapins.net/",
        src: "ja/hapins.png",
        alt: "HapInS",
    },
];

const koreanCompanies: Company[] = [];

export const localeToCompaniesMap: Record<string, Company[]> = {
    ru: companies,
    en: companies,
    ja: japaneseCompanies,
    ko: koreanCompanies,
};
