export const useCloudinary = () => {
  const config = useRuntimeConfig();

  const uploadImage = async (file) => {
    try {
      // Validasi konfigurasi
      if (!config.public.cloudinaryCloudName) {
        throw new Error("Cloudinary cloud name tidak dikonfigurasi");
      }

      if (!config.public.cloudinaryUploadPreset) {
        throw new Error("Cloudinary upload preset tidak dikonfigurasi");
      }

      // Validasi file
      if (!file) {
        throw new Error("File tidak ditemukan");
      }

      if (file.size > 10 * 1024 * 1024) {
        throw new Error("Ukuran file terlalu besar (maksimal 10MB)");
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", config.public.cloudinaryUploadPreset);

      // HAPUS folder karena sudah diset di upload preset
      // formData.append("folder", "waste-detection"); // <-- Hapus ini

      // Optional: Add tags
      formData.append("tags", "waste,detection,ecodetect");

      console.log("Uploading to Cloudinary:", {
        cloudName: config.public.cloudinaryCloudName,
        uploadPreset: config.public.cloudinaryUploadPreset,
        fileSize: file.size,
        fileType: file.type,
      });

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${config.public.cloudinaryCloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Cloudinary response status:", response.status);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Cloudinary error response:", errorData);

        let errorMessage;
        try {
          const errorJson = JSON.parse(errorData);
          errorMessage = errorJson.error?.message || errorData;
        } catch {
          errorMessage = `HTTP ${response.status}: ${errorData}`;
        }

        throw new Error(`Cloudinary Error: ${errorMessage}`);
      }

      const data = await response.json();
      console.log("Cloudinary upload success:", data.secure_url);

      return {
        url: data.secure_url,
        publicId: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
        bytes: data.bytes,
        resourceType: data.resource_type,
        createdAt: data.created_at,
      };
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  return {
    uploadImage,
    // ... methods lainnya
  };
};
