import { GetStaticPropsContext } from "next"
import { DrupalMenuLinkContent } from "next-drupal"
import { drupal } from "lib/drupal"

export async function getMenus(context: GetStaticPropsContext): Promise<{
  main: DrupalMenuLinkContent[]
  footer: DrupalMenuLinkContent[]
}> {
  // Return empty menus if Drupal base URL is not configured
  if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
    return {
      main: [],
      footer: [],
    }
  }

  const { tree: main } = await drupal.getMenu("main", {
    locale: context.locale,
    defaultLocale: context.defaultLocale,
  })
  const { tree: footer } = await drupal.getMenu("footer", {
    locale: context.locale,
    defaultLocale: context.defaultLocale,
  })

  return {
    main,
    footer,
  }
}
