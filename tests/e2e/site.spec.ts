import { test, expect } from "@playwright/test"

const sitePath = (route: string) =>
  `${process.env.PLAYWRIGHT_BASE_PATH || ""}${route}`

test("navigates from home to a post, the blog, and about after hydration", async ({
  page,
}) => {
  const errors: string[] = []
  page.on("pageerror", error => errors.push(error.message))
  await page.goto(sitePath("/"))
  await expect(page).toHaveTitle("Home | Tim Whitney")
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Home",
  )
  const firstPost = page.locator("main article h3 a").first()
  const title = await firstPost.innerText()
  await firstPost.click()
  await expect(page.locator("main h1")).toHaveText(title)
  await expect(page).toHaveTitle(`${title} | Tim Whitney`)
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    title,
  )
  await expect(page.locator("main article section")).not.toBeEmpty()
  await page.getByRole("link", { name: "Blog", exact: true }).click()
  await expect(page.getByRole("heading", { name: "Blog Posts" })).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Dev Blog", exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Personal Blog", exact: true }),
  ).toBeVisible()
  await page.getByRole("link", { name: "About", exact: true }).click()
  await expect(
    page.getByRole("heading", { name: "Tim Whitney", exact: true }),
  ).toBeVisible()
  await expect(page.locator(".work--article").first()).toBeVisible()
  await expect(page).toHaveTitle("About | Tim Whitney")
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "About",
  )
  expect(errors).toEqual([])
})

test("serves full post content and metadata without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(sitePath("/"))
  const firstPost = page.locator("main article h3 a").first()
  const title = await firstPost.innerText()
  await firstPost.click()
  await expect(page.locator("main h1")).toHaveText(title)
  await expect(page).toHaveTitle(`${title} | Tim Whitney`)
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    title,
  )
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /\S/,
  )
  await expect(page.locator("main article section")).not.toBeEmpty()
  await context.close()
})

test("keeps the shared layout within desktop and mobile viewport bounds", async ({
  page,
}) => {
  for (const route of ["/", "/blog/", "/about/", "/404.html"]) {
    await page.goto(sitePath(route))
    await expect(page.locator("#site-header")).toBeVisible()
    await expect(page.getByRole("main")).toBeVisible()
    const bounds = await page.getByRole("main").boundingBox()
    const viewport = page.viewportSize()
    if (!bounds || !viewport) throw new Error("Missing page layout bounds")
    expect(bounds.x).toBeGreaterThanOrEqual(0)
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport.width)
  }
})

test("serves a navigable 404 and valid RSS post links", async ({
  page,
  request,
}) => {
  const response = await page.goto(sitePath("/missing-page/"))
  expect(response?.status()).toBe(404)
  await expect(page.getByRole("heading", { name: "NOT FOUND" })).toBeVisible()
  await page.getByRole("link", { name: "Blog", exact: true }).click()
  await expect(page).toHaveTitle("Blog | Tim Whitney")
  const feed = await request.get(sitePath("/rss.xml"))
  expect(feed.ok()).toBe(true)
  const xml = await feed.text()
  expect(xml).toContain("<rss")
  expect(xml).toContain("<content:encoded>")
  const links = [...xml.matchAll(/<item>[\s\S]*?<link>(.*?)<\/link>/g)].map(
    match => new URL(match[1]).pathname,
  )
  expect(links.length).toBeGreaterThan(0)
  for (const link of links)
    expect((await request.get(sitePath(link))).ok()).toBe(true)
})
