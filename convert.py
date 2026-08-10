import re

files = ["header", "top-section", "demos", "partners", "contact", "footer"]
for file in files:
    try:
        with open(f"src/{file}.html", "r") as f:
            html = f.read()
    except FileNotFoundError:
        continue
    
    if not html: continue
    
    # Simple replacements
    html = html.replace("class=", "className=")
    html = html.replace("for=", "htmlFor=")
    html = html.replace("tabindex=", "tabIndex=")
    html = html.replace("<!--", "{/*")
    html = html.replace("-->", "*/}")
    
    # SVG attributes
    attrs = ["stroke-width", "stroke-linecap", "stroke-linejoin", "fill-rule", "clip-rule", "stroke-miterlimit", "clip-path"]
    for attr in attrs:
        camel = "".join(word.capitalize() if i > 0 else word for i, word in enumerate(attr.split("-")))
        html = html.replace(f"{attr}=", f"{camel}=")
        
    # Self-closing tags
    html = re.sub(r"<(img|input|br|hr|source|path|circle|rect)([^>]*?)(?<!/)>", r"<\1\2 />", html)
    
    # Just remove styles if they break
    html = re.sub(r'style="([^"]+)"', r'', html)
    
    name = file.replace("-", "").capitalize()
    
    jsx = f"""export default function {name}() {{
  return (
    <>
      {html}
    </>
  );
}}
"""
    with open(f"src/{file}.tsx", "w") as f:
        f.write(jsx)
