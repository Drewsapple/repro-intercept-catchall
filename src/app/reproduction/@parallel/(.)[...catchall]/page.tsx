export default function Page({
  params,
}: {
  params: {
    catchall: string[];
  };
}) {
  return <pre>{JSON.stringify(params)}</pre>;
}
