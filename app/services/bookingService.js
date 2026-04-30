/**
 * Booking Service
 * 
 * Simulated service for handling artist reservations and contact inquiries.
 */
export const bookingService = {
  /**
   * Submit a booking or contact request.
   * @param {Object} formData 
   * @returns {Promise<Object>}
   */
  submitRequest: async (formData) => {
    // Simulate API submission
    console.log("Submitting form data to server:", formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      success: true,
      message: "Submission received successfully."
    };
  }
};
