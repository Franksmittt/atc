import os

# --- Configuration ---
# Set the root directory for your project
PROJECT_ROOT = r"C:\Users\User1\alberton-tyre-clinic"
# Set the name for the output file
OUTPUT_FILENAME = "project_summary.txt"

# Folders to completely ignore during the scan
EXCLUDE_DIRS = [
    'node_modules',
    '.next',
    '.git',      # Often large and not relevant to the code
    '__pycache__' # Python-specific cache
]

# File extensions to ignore (images, compiled files, etc.)
EXCLUDE_EXTENSIONS = (
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.ico', # Images
    '.bin', '.dat', '.dll', '.exe', '.obj', '.so', '.wasm',  # Binaries/Compiled
    '.zip', '.rar', '.7z', '.tar', '.gz',                    # Archives
    '.lock'                                                  # Lock files (pnpm-lock.yaml is included below, but this is a good general exclusion)
)

# Individual files to always ignore if found in the root or subfolders
EXCLUDE_FILES = [
    OUTPUT_FILENAME, # Don't try to read the file we are writing to
    'pnpm-lock.yaml' # Explicitly excluding this lock file to keep the output cleaner
]

# --- Core Logic ---

def generate_file_tree(root_dir):
    """Generates a string representation of the file tree, excluding specific paths."""
    tree_lines = [f"📁 **PROJECT FILE TREE: {os.path.basename(root_dir)}**"]

    for root, dirs, files in os.walk(root_dir):
        # Modify dirs in-place to skip excluded folders in future iterations
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        # Calculate the current level in the tree
        level = root.replace(root_dir, '').count(os.sep)
        indent = '│   ' * level

        # Add the directory to the tree
        if root != root_dir:
            dir_name = os.path.basename(root)
            tree_lines.append(f"{indent}├── 📁 {dir_name}")
            indent = '│   ' * (level + 1)
        
        # Add files in the current directory
        for file in sorted(files):
            file_path = os.path.join(root, file)
            # Skip excluded files/extensions
            if file.lower() in EXCLUDE_FILES or file.lower().endswith(EXCLUDE_EXTENSIONS):
                continue
            
            tree_lines.append(f"{indent}├── 📄 {file}")
    
    return "\n".join(tree_lines) + "\n\n"

def get_file_contents(root_dir):
    """Iterates through files and reads their content."""
    content_output = []
    
    for root, dirs, files in os.walk(root_dir):
        # Modify dirs in-place to skip excluded folders in future iterations (same as tree generation)
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in sorted(files):
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, root_dir)
            
            # Skip excluded files/extensions (same as tree generation)
            if file.lower() in EXCLUDE_FILES or file.lower().endswith(EXCLUDE_EXTENSIONS):
                continue
            
            # Try to read the file content
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Format the file path and content
                content_output.append("-" * 80)
                content_output.append(f"📄 FILE PATH: {file_path}")
                content_output.append("-" * 80)
                content_output.append(content)
                content_output.append("\n\n") # Add extra space after content for separation

            except UnicodeDecodeError:
                # File is likely a binary file or uses an unsupported encoding, skip it
                print(f"Skipping binary/unreadable file: {relative_path}")
            except Exception as e:
                print(f"Error reading file {relative_path}: {e}")

    return "".join(content_output)

def main():
    """Main function to run the script."""
    output_path = os.path.join(PROJECT_ROOT, OUTPUT_FILENAME)

    print(f"Scanning project root: {PROJECT_ROOT}")
    
    # 1. Generate the file tree
    tree_section = generate_file_tree(PROJECT_ROOT)
    
    # 2. Get the content of all included files
    content_section = get_file_contents(PROJECT_ROOT)
    
    # 3. Write everything to the output file
    try:
        with open(output_path, 'w', encoding='utf-8') as outfile:
            outfile.write(tree_section)
            outfile.write("=" * 100 + "\n\n")
            outfile.write("📄 **INDIVIDUAL FILE CONTENTS**\n\n")
            outfile.write("=" * 100 + "\n\n")
            outfile.write(content_section)
        
        print(f"\n✅ Successfully created output file: {output_path}")

    except Exception as e:
        print(f"\n❌ An error occurred while writing the output file: {e}")

if __name__ == "__main__":
    main()