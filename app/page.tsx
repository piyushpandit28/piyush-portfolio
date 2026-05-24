import { HomePage } from "@/components/home-page"

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<Record<string, never>>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  await params
  await searchParams

  return <HomePage />
}
