import streamlit as st
from PIL import Image
import os
import glob
from datetime import datetime

# Path to your images folder
image_folder = "assets/GalleryImages"

# Create the folder if it doesn't exist
if not os.path.exists(image_folder):
    os.makedirs(image_folder)

# Function to display gallery of images and videos
def gallery(gallery_files):
    """Displays a gallery of images and videos."""
    if len(gallery_files) > 0:
        st.markdown("### Gallery")
        num_files_per_row = 3  # Change to adjust the number of files per row
        columns = st.columns(num_files_per_row)

        for i, file_path in enumerate(gallery_files):
            row_column = columns[i % num_files_per_row]
            file_extension = file_path.split(".")[-1].lower()  # Ensure lowercase extensions

            # Extract filename for caption
            file_caption = os.path.basename(file_path).split(".")[0]

            # Display image
            if file_extension in ["png", "jpg", "jpeg"]:
                try:
                    row_column.image(file_path, caption=file_caption, use_column_width=True)
                except Exception as e:
                    st.error(f"Error displaying image {file_path}: {e}")

            # Display video
            elif file_extension == "mp4":
                try:
                    row_column.markdown(f"**{file_caption}**")
                    row_column.video(file_path)
                except Exception as e:
                    st.error(f"Error displaying video {file_path}: {e}")

            # Handle other file types (fallback)
            else:
                st.error(f"Unsupported file type: {file_extension}")

    else:
        st.markdown("No files found in the gallery.")

# Sidebar navigation
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["Upload", "Gallery"])

# Page for uploading files
if page == "Upload":
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
                
                # Construct the full file path
                file_path = os.path.join(image_folder, f"{file_name}.{file_extension}")
                
                # Debug: print where the file will be saved
                st.write(f"Saving file to: {file_path}")
                
                # Save the uploaded file to the specified directory
                with open(file_path, "wb") as f:
                    f.write(file.read())

                st.success(f"{file_extension.upper()} file added successfully!")
            else:
                st.error("Please upload a file.")

# Page for displaying the gallery
elif page == "Gallery":
    st.title("Photo Gallery")

    # Get all gallery files
    gallery_files = glob.glob(os.path.join(image_folder, "*.*"))
    gallery(gallery_files)

# Footer with current year
current_year = datetime.now().year
st.markdown(f"<br><hr><center>&copy; {current_year} Bobby Pics </center>", unsafe_allow_html=True)
