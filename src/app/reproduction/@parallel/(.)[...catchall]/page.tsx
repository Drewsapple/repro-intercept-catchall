export default async function Page({
  params,
}: {
  params: Promise<{
    catchall: string[];
  }>;
}) {
  return <pre>{JSON.stringify(await params)}</pre>;
}
