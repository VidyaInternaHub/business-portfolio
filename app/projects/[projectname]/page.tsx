export default async function Page({
  params,
}: {
  params: Promise<{ projectname: string }>;
}) {
  const projectname = (await params).projectname;
  return <div>My Post: {projectname}</div>;
}
