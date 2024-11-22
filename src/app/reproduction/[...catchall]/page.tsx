export default async function Page({
  params,
}: {
  params: Promise<{
    catchall: string[];
  }>;
}) {
  return (
    <div>
      <div>Loaded directly, no intercept</div>
      <pre>{JSON.stringify(await params)}</pre>
    </div>
  );
}
