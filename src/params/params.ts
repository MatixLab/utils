/**
 * Utility functions for handling request parameters.
 */

/**
 * Represents the parameters for a paginated query.
 * @template T - The type of the query parameters.
 */
export type GetPageParams<T> = T & {
  take: number
  skip: number
}

/**
 * Returns an object containing the search parameters from a request URL.
 * @param url - The request url.
 * @returns An object containing the search parameters.
 */
export const getSearchParams = (url: string) => {
  return Object.fromEntries(new URL(url).searchParams)
}

/**
 * Returns the current page number from a string.
 * @param page - The page number as a string.
 * @returns The current page number as a number.
 */
export const getCurrentPage = (page?: string | null) => {
  return Math.max(page && !Number.isNaN(Number(page)) ? Number.parseInt(page || '1', 10) : 1, 1)
}

/**
 * Returns an object containing the parameters for a paginated query.
 * @template T - The type of the query parameters.
 * @param url - The URL to get the page parameters from.
 * @param take - The number of items to take per page.
 * @returns An object containing the parameters for a paginated query.
 */
export const getPageParams = <T extends object>(url: string, take: number) => {
  const { page, ...params } = getSearchParams(url)

  const currentPage = getCurrentPage(page)
  const skip = (currentPage - 1) * take

  return { take, skip, ...params } as GetPageParams<T>
}

/**
 * Returns a link to a specific page of a paginated query.
 * @param searchParams - The search parameters object.
 * @param pathname - The pathname of the URL.
 * @param page - The page number to link to.
 * @returns A link to the specified page of the paginated query.
 */
export const getPageLink = (searchParams: URLSearchParams, pathname: string, page: number) => {
  searchParams.set('page', page.toString())

  return `${pathname}?${searchParams.toString()}`
}
