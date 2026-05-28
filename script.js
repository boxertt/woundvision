function setLanguage(language) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    const brandName = language === "zh" ? "创视迹" : "WoundTruth";

    document.querySelectorAll("[data-brand-name]").forEach((element) => {
        element.textContent = brandName;
    });

    document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.langPanel === language);
    });

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
        const isActive = button.dataset.langButton === language;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    localStorage.setItem("woundtruth2-language", language);
}

document.addEventListener("DOMContentLoaded", () => {
    const preferred = localStorage.getItem("woundtruth2-language")
        || (navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

    setLanguage(preferred === "zh" ? "zh" : "en");
});
