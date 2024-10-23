export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="flex justify-center items-center text-5xl">
      <h1>{slug}</h1>
    </div>
  );
}
