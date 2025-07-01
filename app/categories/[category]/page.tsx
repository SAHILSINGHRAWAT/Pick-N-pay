import { notFound } from "next/navigation";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Navbar from "../../components/Navbar";

const categoryMap: Record<string, string> = {
  "groceries": "Groceries",
  "food-products": "Food Products",
  "dairy": "Dairy",
  "nuts-dry-fruits": "Nuts-Dry-Fruits",
  "cosmetics": "Cosmetics",
  "hygiene-products": "Hygiene Products",
  "baby-products": "Baby Products",
  "ration": "Ration",
  "ice-creams": "Ice Creams",
  "chocolates": "Chocolates",
  "frozen-chicken": "Frozen Chicken",
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryKey = params.category;
  const categoryName = categoryMap[categoryKey];
  if (!categoryName) return notFound();

  // Get images from public/categoryKey
  const imagesDir = path.join(process.cwd(), "public", categoryName.replace(/\s+/g, " "));
  let images: string[] = [];
  try {
    images = fs.readdirSync(imagesDir).filter((file) => /\.(jpg|jpeg|png|svg)$/i.test(file));
  } catch {
    images = [];
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pt-32 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-6 text-center drop-shadow-lg">
            {categoryName}
          </h1>
         <div className="sahil  "></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.length > 0 ? (
              images.map((img, idx) => (
                <div
                  key={img}
                  className="rounded-xl shadow-lg bg-white/80 border-2 border-orange-100 p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={`/${categoryName.replace(/\s+/g, "%20")}/${img}`}
                    alt={categoryName + " " + (idx + 1)}
                    width={320}
                    height={320}
                    className="rounded-lg object-cover h-48 w-full mb-3 border-2 border-orange-200 shadow-md"
                  />
                  <span className="text-lg font-semibold text-orange-700 mt-2">
                    {categoryName} #{idx + 1}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-xl py-12">
                No images found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
