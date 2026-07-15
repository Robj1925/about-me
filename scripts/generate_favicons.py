import os
import subprocess
import struct
import base64

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running command: {cmd}")
        print(result.stderr)
        raise RuntimeError(result.stderr)
    return result.stdout

def create_ico(png_paths, ico_path):
    # ICO Header: 2 bytes reserved (0), 2 bytes type (1), 2 bytes count
    count = len(png_paths)
    ico_data = struct.pack("<HHH", 0, 1, count)
    
    directory = []
    offset = 6 + count * 16
    
    images_data = []
    for path in png_paths:
        with open(path, "rb") as f:
            data = f.read()
        images_data.append(data)
        
        # Get dimensions from filename (e.g. 16.png)
        dim = int(os.path.basename(path).split(".")[0])
        width = 0 if dim >= 256 else dim
        height = 0 if dim >= 256 else dim
        
        size = len(data)
        # Entry: 1B width, 1B height, 1B colors (0), 1B reserved (0), 2B planes (1), 2B bpp (32), 4B size, 4B offset
        entry = struct.pack("<BBBBHHII", width, height, 0, 0, 1, 32, size, offset)
        directory.append(entry)
        offset += size
        
    for entry in directory:
        ico_data += entry
    for img_data in images_data:
        ico_data += img_data
        
    with open(ico_path, "wb") as f:
        f.write(ico_data)
    print(f"Created ICO at {ico_path}")

def main():
    # Source: cobalt tile, bold white "R" (Bricolage Grotesque), rendered at 2048x2048
    # via a chrome-devtools screenshot of scripts/favicon-source.html, matching the
    # site's light/cobalt redesign. Re-render that HTML file to regenerate this PNG.
    src_png = "/Users/robby/Documents/Projects/about-me/scripts/favicon-source.png"
    dest_dir = "/Users/robby/Documents/Projects/about-me/assets/images/favicon"
    os.makedirs(dest_dir, exist_ok=True)
    
    # We will generate temporary PNGs
    tmp_sizes = [16, 32, 48, 96, 180, 192, 512]
    tmp_files = {}
    
    print("Resizing images using sips...")
    for size in tmp_sizes:
        tmp_path = f"/tmp/{size}.png"
        run_cmd(f"sips -z {size} {size} '{src_png}' --out '{tmp_path}'")
        tmp_files[size] = tmp_path
        
    # Copy final PNGs to destination
    print("Copying PNGs to destination...")
    run_cmd(f"cp '{tmp_files[96]}' '{dest_dir}/favicon-96x96.png'")
    run_cmd(f"cp '{tmp_files[180]}' '{dest_dir}/apple-touch-icon.png'")
    run_cmd(f"cp '{tmp_files[192]}' '{dest_dir}/web-app-manifest-192x192.png'")
    run_cmd(f"cp '{tmp_files[512]}' '{dest_dir}/web-app-manifest-512x512.png'")
    
    # Generate ICO
    print("Generating ICO file...")
    ico_pngs = [tmp_files[16], tmp_files[32], tmp_files[48]]
    create_ico(ico_pngs, f"{dest_dir}/favicon.ico")
    
    # Generate SVG with embedded Base64 PNG
    print("Generating SVG file...")
    with open(tmp_files[512], "rb") as f:
        png_base64 = base64.b64encode(f.read()).decode("utf-8")
        
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,{png_base64}" width="512" height="512"/>
</svg>'''
    
    with open(f"{dest_dir}/favicon.svg", "w") as f:
        f.write(svg_content)
    print(f"Created SVG at {dest_dir}/favicon.svg")
    
    # Clean up temp files
    for path in tmp_files.values():
        if os.path.exists(path):
            os.remove(path)
            
    print("Favicon set generated successfully!")

if __name__ == "__main__":
    main()
