#!/usr/bin/env python3
import os
import re
import urllib.request
import urllib.error

POSTS_SRC = "/Users/robby/Documents/Projects/about-me/blog/posts"
THUMBNAILS_DIR = "/Users/robby/Documents/Projects/about-me/assets/images/blog-thumbnails"

def download_image(url, save_path):
    # Configure user-agent to avoid HTTP 403 on standard requests
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            with open(save_path, 'wb') as out_file:
                out_file.write(response.read())
        return True
    except urllib.error.HTTPError as e:
        return False
    except Exception as e:
        print(f"      Error downloading {url}: {e}")
        return False

def get_youtube_thumbnail(youtube_id, slug):
    save_path = os.path.join(THUMBNAILS_DIR, f"{slug}.jpg")
    
    # Try maxresdefault first (Full HD, 1280x720)
    maxres_url = f"https://img.youtube.com/vi/{youtube_id}/maxresdefault.jpg"
    # Fallback to hqdefault (Standard, 480x360)
    hq_url = f"https://img.youtube.com/vi/{youtube_id}/hqdefault.jpg"

    # print(f"    - Downloading thumbnail for video {youtube_id}...")
    if download_image(maxres_url, save_path):
        # print(f"      ✓ Downloaded maxresdefault for {slug}")
        return f"assets/images/blog-thumbnails/{slug}.jpg"
    elif download_image(hq_url, save_path):
        # print(f"      ✓ Downloaded hqdefault (fallback) for {slug}")
        return f"assets/images/blog-thumbnails/{slug}.jpg"
    else:
        print(f"      ❌ Failed to download any thumbnail for {slug} (ID: {youtube_id})")
        return None

def main():
    if not os.path.exists(POSTS_SRC):
        print(f"Error: {POSTS_SRC} does not exist.")
        return
    if not os.path.exists(THUMBNAILS_DIR):
        os.makedirs(THUMBNAILS_DIR, exist_ok=True)

    # 1. Audit current placeholder sizes and map files
    size_to_filenames = {}
    for fname in os.listdir(THUMBNAILS_DIR):
        fpath = os.path.join(THUMBNAILS_DIR, fname)
        if os.path.isfile(fpath) and not fname.startswith("."):
            fsize = os.path.getsize(fpath)
            size_to_filenames.setdefault(fsize, []).append(fname)
    
    placeholder_sizes = {size for size, fnames in size_to_filenames.items() if len(fnames) > 1}
    placeholder_filenames = set()
    for size in placeholder_sizes:
        placeholder_filenames.update(size_to_filenames[size])

    print(f"Audited assets. Found {len(placeholder_filenames)} placeholder files used as duplicates.")

    # 2. Iterate through all markdown posts and update if targeted
    markdown_files = [f for f in os.listdir(POSTS_SRC) if f.endswith(".md")]
    updated_count = 0
    skipped_count = 0
    errors_count = 0

    for fname in markdown_files:
        slug = fname[:-3]
        fpath = os.path.join(POSTS_SRC, fname)
        
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # Parse frontmatter to check if it's a placeholder
        parts = content.split("---")
        if len(parts) < 3:
            continue

        fm_text = parts[1]
        fm = {}
        for line in fm_text.split("\n"):
            if ":" in line:
                key, val = line.split(":", 1)
                fm[key.strip()] = val.strip().strip('"').strip("'")

        thumbnail = fm.get("thumbnail")
        youtube_id = fm.get("youtubeId")

        # Skip if it doesn't use a placeholder thumbnail or doesn't have youtubeId
        if not thumbnail:
            continue

        thumb_base = os.path.basename(thumbnail)
        is_placeholder = thumb_base in placeholder_filenames

        # Check if we should process it
        if not is_placeholder:
            skipped_count += 1
            continue

        if not youtube_id:
            print(f"  ⚠️ Warning: Post '{slug}' uses placeholder but lacks a youtubeId. Skipped.")
            skipped_count += 1
            continue

        print(f"  ➜ Processing: '{slug}' (YouTube ID: {youtube_id})")
        
        # Download YouTube thumbnail
        new_thumb_path = get_youtube_thumbnail(youtube_id, slug)
        
        if new_thumb_path:
            # Replace the thumbnail line in the frontmatter
            # Use regex to replace thumbnail: "..." or thumbnail: ...
            new_fm_text = re.sub(
                r'(thumbnail\s*:\s*).*',
                rf'\1"{new_thumb_path}"',
                fm_text
            )
            
            # Reconstruct the file content
            new_content = parts[0] + "---" + new_fm_text + "---" + "---".join(parts[2:])
            
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            
            print(f"    ✓ Successfully updated thumbnail path in: {fname}")
            updated_count += 1
        else:
            errors_count += 1

    print(f"\nMigration Complete Summary:")
    print(f"  - Successfully updated posts: {updated_count}")
    print(f"  - Skipped posts (already unique/custom): {skipped_count}")
    print(f"  - Failed downloads/errors: {errors_count}")

if __name__ == "__main__":
    main()
