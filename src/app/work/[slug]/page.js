export default async function Page({ params }) {
  const { slug } = await params
  return <div className="min-h-[100vh] z-10000 bg-red-50 flex items-center justify-center" >My Post: {slug}</div>
}