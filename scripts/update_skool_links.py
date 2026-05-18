import os
import glob
import random

POSTS_DIR = "/Users/robby/Documents/Projects/about-me/blog/posts"
SEARCH_STRING = "Want to learn how to save time and money with AI? -> https://www.skool.com/ai-academy-with-robby-6849/about"

OPTIONS = [
    "🧠 Get 1:1 help from a Software Engineer to automate your workflow → https://www.skool.com/ai-academy-with-robby-6849/about",
    "🚀 Learn to automate like an engineer with direct 1:1 guidance → https://www.skool.com/ai-academy-with-robby-6849/about",
    "🚀 Work 1:1 with a Software Engineer and automate everything you hate doing → https://www.skool.com/ai-academy-with-robby-6849/about",
    "🚀 Work 1:1 with a Software Engineer and let AI handle the busywork → https://www.skool.com/ai-academy-with-robby-6849/about",
    "⚡️ Learn how to automate repetitive work with 1:1 help from a Software Engineer → https://www.skool.com/ai-academy-with-robby-6849/about"
]

def update_files():
    files = glob.glob(os.path.join(POSTS_DIR, "*.md"))
    updated_count = 0
    # To evenly distribute
    for i, filepath in enumerate(files):
        with open(filepath, 'r') as f:
            content = f.read()
        
        if SEARCH_STRING in content:
            new_content = content.replace(SEARCH_STRING, OPTIONS[i % len(OPTIONS)])
            with open(filepath, 'w') as f:
                f.write(new_content)
            updated_count += 1
            
    print(f"Updated {updated_count} files with distributed Skool links.")

if __name__ == "__main__":
    update_files()
