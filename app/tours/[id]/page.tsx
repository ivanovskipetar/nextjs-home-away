import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4"></section>
      {/* remote image*/}
      <div>
        <Image
          src={url}
          alt="tour"
          width={192}
          height={192}
          className="w-48 h-48 object-cover rounded"
        />
        <h2>Remote image</h2>
      </div>
    </div>
  );
}

export default Page;
