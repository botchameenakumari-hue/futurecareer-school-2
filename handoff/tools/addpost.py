import sys,json
cat,slug,title,desc,mins=sys.argv[1:6]
p='/home/user/futurecareer-school-2/src/config/blog.ts'; b=open(p).read()
q=lambda s:json.dumps(s,ensure_ascii=False)
entry=f"""  {{
    categorySlug: '{cat}',
    slug: '{slug}',
    title: {q(title)},
    description:
      {q(desc)},
    publishedAtISO: '2026-10-14',
    readTimeMinutes: {mins},
  }},
"""
if f"slug: '{slug}'" in b: print('already'); sys.exit()
i=b.index("export const BLOG_PUBLISHED_POSTS"); j=b.index("\n];",i); open(p,'w').write(b[:j+1]+entry+b[j+1:])
