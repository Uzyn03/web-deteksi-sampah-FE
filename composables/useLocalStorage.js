// Fallback untuk development jika Cloudinary tidak tersedia
export const useLocalStorage = () => {
  const saveImageLocally = async (file) => {
    try {
      // Convert file to base64 for local storage (development only)
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = {
            url: reader.result,
            publicId: `local_${Date.now()}`,
            width: 0,
            height: 0,
            format: file.type.split("/")[1],
            bytes: file.size,
          };
          resolve(result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error("Error saving image locally:", error);
      throw error;
    }
  };

  return {
    saveImageLocally,
  };
};
