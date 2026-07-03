import { useTranslation } from "react-i18next"

export function useLocalizedText() {
  const { i18n } = useTranslation()

  function localize(text: string, i18nMap?: Record<string, string>): string {
    if (!i18nMap) return text
    return i18nMap[i18n.language] ?? text
  }

  function localizeList(
    list: string[],
    i18nMap?: Record<string, string[]>,
  ): string[] {
    if (!i18nMap) return list
    return i18nMap[i18n.language] ?? list
  }

  return { localize, localizeList }
}
