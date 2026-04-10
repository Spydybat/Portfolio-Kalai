"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    // In a real application, you would integrate Nodemailer, Resend, or save to MongoDB here.
    // For now, we simulate a network request.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("New Contact Submission:", { name, email, message });

    return { success: true, message: "Thanks for reaching out! I'll get back to you soon." };
  } catch (err) {
    return { error: "Something went wrong. Please try again." };
  }
}
