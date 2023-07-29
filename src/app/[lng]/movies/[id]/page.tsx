import type { Metadata } from "next";
// async function getInfo(id: string) {
//    const res = await fetch(`https://someapi/product/${id}`);
//   return res.json();
// }
// export async function generateMetadata({ params }): Promise<Metadata> {
//   const product = await getInfo(params.id);
//   return { title: product.title };
// }

export default function Page({ params }: { params: { id: string } }) {
  return <div>Movie: {params.id}</div>;
}
