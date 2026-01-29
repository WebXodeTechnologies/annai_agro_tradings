import { products } from "@/constants/index";
import { TechSpecs } from "@/components/products/TechSpecs";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { InteractiveProductImage } from "@/components/products/InteractiveProductImage";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return { title: "Product Not Found" };

  const keywords = product.seoKeywords ? product.seoKeywords.join(", ") : "";

  // FIX: Metadata must be a string. Pick the first image from the array.
  const mainImage = Array.isArray(product.img) ? product.img[0] : product.img;

  return {
    title: `${product.name} Exporter & Bulk Supplier India | Annai Agro`,
    description: `${product.overview} Reliable B2B ${product.name} supplier from India. HSN Code: ${product.hsn}.`,
    keywords: keywords,
    alternates: {
      canonical: `https://annaiagro.com/products/${id}`,
    },
    openGraph: {
      title: `${product.name} Wholesale Export India`,
      description: product.overview,
      images: [{ url: mainImage }], // Use the first image for social sharing
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  // FIX: Array safety for images
  const images = Array.isArray(product.img) ? product.img : [product.img];
  const mainImage = images[0];

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `https://annaiagro.com${mainImage}`,
    description: product.overview,
    sku: product.hsn,
    brand: { "@type": "Brand", name: "Annai Agro" },
    offers: {
      "@type": "Offer",
      url: `https://annaiagro.com/products/${id}`,
      priceCurrency: "USD", 
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Image Logic */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-4">
              <div className="lg:col-span-5">
                <InteractiveProductImage images={images} name={product.name} className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-10">
            <article>
              <header className="mb-8">
                <span className="text-[#67944e] font-black uppercase tracking-widest text-xs mb-3 block">
                  Export Grade {product.cat}
                </span>
                <h1 className="text-5xl font-black text-slate-900 mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl italic text-slate-400 font-medium">
                  ({product.scientificName})
                </p>
              </header>

              <section className="prose prose-slate">
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                  {product.overview}
                </p>

                <TechSpecs specs={product.specs} hsn={product.hsn} />
              </section>

              {/* Variations */}

              {product.varieties?.length > 0 && (
                <section className="mt-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black uppercase tracking-widest text-[#67944e] whitespace-nowrap">
                      Available Varieties & Grading
                    </h2>
                    <div className="h-px w-full bg-slate-100"></div>
                  </div>

                  <div className="grid gap-4">
                    {product.varieties.map((v) => (
                      <div
                        key={v.name}
                        className="p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-[#67944e] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                      >
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#67944e] transition-colors">
                              {v.name}
                            </h3>
                          </div>

                          <div className="flex gap-2">
                            {/* Dynamic Badge for Heat (Chillies) */}
                            {v.heat && (
                              <span className="bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                {v.heat} Heat
                              </span>
                            )}

                            {/* Dynamic Badge for Curcumin (Turmeric) */}
                            {v.curcumin && (
                              <span className="bg-[#67944e]/10 text-[#67944e] border border-[#67944e]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                Curcumin: {v.curcumin}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                          {v.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
