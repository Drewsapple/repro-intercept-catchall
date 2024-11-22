export default function Page({
  params,
}: {
  params: {
    catchall: string[];
  };
}) {
  return (
    <div>
      <div>Loaded directly, no intercept</div>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  );
}
