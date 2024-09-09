import streamlit as st
from PIL import Image, ExifTags
import os
import glob
from datetime import datetime
import base64
import re

# Path to your images folder
image_folder = "assets/GalleryImages"

# Create the folder if it doesn't exist
if not os.path.exists(image_folder):
    os.makedirs(image_folder)
    
def sanitize_filename(filename):
    """Replace spaces and special characters with underscores in the filename."""
    # Replace spaces and special characters with underscores
    sanitized_name = re.sub(r'[^\w\s]', '_', filename)  # Replace special characters with underscores
    sanitized_name = sanitized_name.replace(' ', '_')  # Replace spaces with underscores
    return sanitized_name

def extract_image_metadata(image_path):
    """Extract metadata from an image."""
    metadata = {}
    try:
        with Image.open(image_path) as img:
            info = img._getexif()
            if info:
                for tag, value in info.items():
                    tag_name = ExifTags.TAGS.get(tag, tag)
                    metadata[tag_name] = value
    except Exception as e:
        metadata["Error"] = str(e)
    return metadata

# Function to display gallery of images and videos
def gallery(gallery_files):
    """Displays a gallery of images and videos with metadata."""
    if len(gallery_files) > 0:
        st.markdown("### Gallery")
        num_files_per_row = 3
        columns = st.columns(num_files_per_row)

        for i, file_path in enumerate(gallery_files):
            row_column = columns[i % num_files_per_row]
            file_extension = file_path.split(".")[-1].lower()
            file_caption = os.path.basename(file_path).split(".")[0]

            # Display image
            if file_extension in ["png", "jpg", "jpeg"]:
                try:
                    with open(file_path, "rb") as file:
                        image = file.read()
                        st.image(image, caption=file_caption, use_column_width=True)

                        # Extract and display metadata when image is clicked
                        metadata = extract_image_metadata(file_path)
                        st.write(f"**Metadata for {file_caption}:**")
                        for key, value in metadata.items():
                            st.write(f"{key}: {value}")

                        st.download_button(
                            label="Download",
                            data=image,
                            file_name=os.path.basename(file_path),
                            mime=f"image/{file_extension}"
                        )
                except Exception as e:
                    st.error(f"Error displaying image {file_path}: {e}")

            # Display video
            elif file_extension == "mp4":
                try:
                    st.video(file_path)
                    st.markdown(f"[Download Video]({file_path})")
                except Exception as e:
                    st.error(f"Error displaying video {file_path}: {e}")

            # Share button
            st.markdown(f"""
                <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20file%20{file_caption}%20from%20my%20gallery!&url={st.experimental_get_query_params().get('share_url', '')}"
                target="_blank" rel="noopener noreferrer">
                <button>Share on Twitter</button>
                </a>
                """, unsafe_allow_html=True)
    else:
        st.markdown("No files found in the gallery.")

# Sidebar navigation
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["Gallery","Upload"])


# Page for displaying the gallery
if page == "Gallery":
    st.title("Photo Gallery")

    # Get all gallery files
    gallery_files = glob.glob(os.path.join(image_folder, "*.*"))
    gallery(gallery_files)
    
    
# Page for uploading files
elif page == "Upload":
    st.title("Upload New File")

    with st.form(key='upload-form'):
        file_name = st.text_input("File Name (optional)")  # Made filename optional
        st.markdown("### Message")
        message = st.text_area(label='Enter your message here')
        file = st.file_uploader("Upload File", type=["png", "jpg", "jpeg", "mp4"])

        if st.form_submit_button("Add File"):
            if file is not None:
                file_extension = file.name.split(".")[-1].lower()
                
                # If no file_name is provided, use the original uploaded file's name
                if not file_name:
                    file_name = os.path.splitext(file.name)[0]
                
                # Sanitize the filename
                sanitized_file_name = sanitize_filename(file_name)
                
                # Construct the full file path
                file_path = os.path.join(image_folder, f"{sanitized_file_name}.{file_extension}")
                
                # Debug: print where the file will be saved
                st.write(f"Saving file to: {file_path}")
                
                # Save the uploaded file to the specified directory
                with open(file_path, "wb") as f:
                    f.write(file.read())

                st.success(f"{file_extension.upper()} file added successfully!")
            else:
                st.error("Please upload a file.")


# Footer with current year
current_year = datetime.now().year
st.markdown(f"<br><hr><center>&copy; {current_year} Bobby Pics </center>", unsafe_allow_html=True)
