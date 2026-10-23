import sys,re
# usage: linkp.py cat/slug "sentence html"
p='/home/user/futurecareer-school-2/src/pages/blog/%s/index.astro'%sys.argv[1]
s=open(p).read(); html=sys.argv[2]
if html.split('href="')[1].split('"')[0] in s: print('skip',sys.argv[1]); sys.exit()
m=re.search(r'\n( *)<h2[^>]*id="faq[^"]*"',s) or re.search(r'\n( *)<section[^>]*id="faq',s)
if not m: print('NOFAQ',sys.argv[1]); sys.exit(1)
ind=m.group(1)
ins=f'\n{ind}<p>\n{ind}  {html}\n{ind}</p>\n'
s=s[:m.start()]+ins+s[m.start():]; open(p,'w').write(s); print('ok',sys.argv[1])
