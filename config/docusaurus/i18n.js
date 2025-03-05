const { DEFAULT_LOCALE } = require("./consts");

/** @type {import('@docusaurus/types').DocusaurusConfig["i18n"]} */
const i18n = {
    defaultLocale: DEFAULT_LOCALE,
    locales: ["ru", "en", "ky"],
    localeConfigs: {
        ru: {
            label: "Русский",
        },
        en: {
            label: "English",
        },
        ky: {
            label: "KG",
        },
    },
};

module.exports = { i18n };
