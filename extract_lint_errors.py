import os

# --- Configuration for the Script ---
# Define the project root directory based on the user's path
PROJECT_ROOT = r"C:\Users\User1\alberton-tyre-clinic"
OUTPUT_FILE_NAME = "lint_error_extraction.txt"

# List of files identified from the Vercel build logs and ESLint configuration
FILES_TO_INSPECT = [
    "src\\components\\layout\\Footer.tsx",
    "src\\components\\sections\\Hero.tsx",
    ".eslintrc.json"
]

# Specific error lines reported in the Vercel logs for quick reference
# Lines based on the build logs: Footer.tsx (24, 53, 91); Hero.tsx (32, 40)
ERROR_REFERENCES = {
    "src\\components\\layout\\Footer.tsx": [24, 53, 91],
    "src\\components\\sections\\Hero.tsx": [32, 40],
}

def extract_file_content():
    """Reads specific project files, focuses on error lines, and saves the output to a text file."""
    output = []  # Correctly initialized as an empty list
    output.append("--- Code Extractor for Unescaped Entities Error Analysis ---")
    output.append(f"Scanning project root: {PROJECT_ROOT}\n")

    for relative_path in FILES_TO_INSPECT:
        full_path = os.path.join(PROJECT_ROOT, relative_path)

        output.append("=" * 80)
        output.append(f"FILE: {relative_path}")
        output.append(f"REPORTED ERROR LINES (for context): {ERROR_REFERENCES.get(relative_path, 'N/A')}")
        output.append("=" * 80)

        if not os.path.exists(full_path):
            output.append(f"Error: File not found at {full_path}\n")
            continue

        try:
            with open(full_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                output.append("\nLines with context (Line Number: Content):")

                lines_to_show = set()

                # For source files, add reported error lines and context (3 lines before/after)
                if relative_path in ERROR_REFERENCES:
                    for line_num in ERROR_REFERENCES[relative_path]:
                        # Calculate 3 lines before and after the reported line
                        for i in range(max(1, line_num - 3), min(len(lines), line_num + 3) + 1):
                            lines_to_show.add(i)

                # For config files, show the whole file content
                if relative_path == ".eslintrc.json":
                    lines_to_show = set(range(1, len(lines) + 1))

                # Sort lines and display
                if lines_to_show:
                    sorted_lines = sorted(list(lines_to_show))

                    last_line_shown = -1

                    for current_line_num in sorted_lines:
                        if current_line_num > len(lines):
                            continue

                        # Add a separator if there's a gap in the context
                        if current_line_num > last_line_shown + 1 and last_line_shown != -1:
                            output.append("\n... (omitted lines)...")

                        line_content = lines[current_line_num - 1].rstrip()
                        prefix = f"{current_line_num:4d}: "

                        # Highlight the exact error line
                        if current_line_num in ERROR_REFERENCES.get(relative_path, []):  # Added default empty list
                            output.append(f"  >>> {prefix}{line_content} <<<")
                        else:
                            output.append(f"      {prefix}{line_content}")

                        last_line_shown = current_line_num

                output.append("\n")

        except Exception as e:
            output.append(f"An error occurred while reading {relative_path}: {e}\n")

    # Write the entire output to the specified file location
    output_path = os.path.join(PROJECT_ROOT, OUTPUT_FILE_NAME)
    try:
        with open(output_path, 'w', encoding='utf-8') as outfile:
            outfile.write('\n'.join(output))  # Corrected from .json to .join
        print(f"\nSuccessfully wrote analysis results to: {output_path}")
        print("Please review the 'lint_error_extraction.txt' file for the code causing the build failure.")
    except Exception as e:
        print(f"\nError writing output file to {output_path}. Printing results to console instead:\n")
        print('\n'.join(output))

if __name__ == "__main__":
    extract_file_content()