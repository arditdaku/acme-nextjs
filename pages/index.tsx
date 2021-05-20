import Link from "next/link";
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return <div className="font-bold">here</div>;
}
