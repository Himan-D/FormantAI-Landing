import os

directory = '/Users/himand/FormantAI-Landing/public/blog'

for root, _, files in os.walk(directory):
    for file in files:
        filepath = os.path.join(root, file)
        if not os.path.isfile(filepath):
            continue
            
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            continue
            
        if 'backend' in content or 'Backend' in content:
            new_content = content.replace('backend', 'architecture').replace('Backend', 'Architecture')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
