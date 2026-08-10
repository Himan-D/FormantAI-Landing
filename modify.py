import re

with open('scratch_old_top.tsx', 'r') as f:
    old_content = f.read()

with open('src/top-section.tsx', 'r') as f:
    new_content = f.read()

# Extract the animated character block
match = re.search(r'(<div class="sc-fd00cb3-0 cxurXC sc-dae695fe-4 hBwXC"><h2 class="sc-ed4608bb-0 bXHLJU">.*?</h2></div>)', old_content)
if match:
    animated_block = match.group(1)
    
    # Replace HYSTERESIS with FORMANT AI if possible. But there are spans.
    # It's better to just leave it as is or do a simple replace on the character attributes and spans if I want to change it.
    # Actually let's just inject the animated block right before the new marketing stunt.
    
    # Let's find where to insert it in new_content
    insert_point = r'<div class="sc-fd00cb3-0 cxurXC sc-dae695fe-4 hBwXC" style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;">'
    
    modified = new_content.replace(insert_point, animated_block + insert_point)
    
    with open('src/top-section.tsx', 'w') as f:
        f.write(modified)
    print("Injected successfully")
else:
    print("Could not find the animated block in old content")
