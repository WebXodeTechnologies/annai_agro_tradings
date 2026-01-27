import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/constants/index';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Find by slug for SEO-friendly URLs
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) return { title: "Technical Insight Not Found" };

  return {
    title: `${post.title} | Technical Analysis | Annai Agro`,
    description: post.excerpt,
    keywords: post.keywords?.join(", "),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) notFound();

  // Updated JSON-LD to TechArticle for B2B authority
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "Annai Agro Tradings" },
    "publisher": { "@type": "Organization", "name": "Annai Agro Tradings" },
    "description": post.excerpt
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="pt-32 pb-20 bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <Link href="/blog" className="text-[#67944e] font-black uppercase tracking-[0.2em] text-[10px] mb-8 inline-block hover:-translate-x-1 transition-transform">
              ← Back to Insights
          </Link>

          <header className="mb-12">
            <span className="text-[#67944e] font-black uppercase tracking-widest text-xs block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest border-y border-slate-100 py-6">
              <time>{post.date}</time>
              <span className="text-slate-200" aria-hidden="true">•</span>
              <span>{post.readTime} Technical Read</span>
            </div>
          </header>

          <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-16 shadow-2xl border border-slate-100 bg-slate-50">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-w-1200px) 100vw, 1000px"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
            prose-strong:text-[#67944e] prose-p:text-slate-600 prose-p:leading-relaxed">
            
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-[#67944e] pl-8 py-2 italic">
               {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <section key={idx} className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6 text-slate-900">{section.heading}</h2>
                <p className="mb-6">{section.text}</p>
                
                {/* Renders the technical sub-points from the new array structure */}
                {section.subPoints && (
                  <ul className="grid grid-cols-1 gap-4 mt-8 list-none pl-0">
                    {section.subPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-medium text-slate-700">
                        <span className="text-[#67944e] mt-1">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Related Posts Section */}
          <div className="mt-24 border-t border-slate-100 pt-16">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#67944e] mb-10 text-center">More Technical Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2).map(related => (
                <Link key={related.id} href={`/blog/${related.slug}`} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-[#67944e]/30 transition-all">
                  <span className="text-[10px] font-bold text-[#67944e] uppercase tracking-widest mb-3 block">{related.category}</span>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#67944e] transition-colors leading-tight">{related.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <footer className="mt-16 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Inquiry for {post.category}?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Connect with our export team for technical specs and wholesale price lists.</p>
            </div>
            <Link 
              href={post.targetLink}
              className="px-10 py-5 bg-[#67944e] rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap"
            >
              View Specifications
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}