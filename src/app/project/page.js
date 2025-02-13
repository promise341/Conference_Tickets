const ProjectPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
      <h1 className="text-4xl md:text-5xl font-roadrage text-center mb-12">
        About The Project
      </h1>
      <div className="space-y-8">
        <div className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
          <h2 className="text-2xl font-roadrage mb-4">Development Process</h2>
          <p className="font-roboto">
            <strong>Event Ticket Booking UI – Open Source Practice Project 🏷️</strong>
          </p>
          <p className="font-roboto">
            <strong>Overview:</strong> 
            This beginner-friendly yet practical Event Ticket Booking UI is designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
          </p>
          <p className="font-roboto">
            The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
          </p>
          <h3 className="font-roadrage mb-2">Flow & Features:</h3>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>Ticket Selection:</strong>
              <ul className="ml-4">
                <li>Users can browse available tickets (Free & Paid).</li>
                <li>Ticket options are displayed in a list or card view.</li>
                <li>For Free Tickets: Clicking "Get Free Ticket" proceeds to attendee details.</li>
                <li>For Paid Tickets: Clicking "Purchase Ticket" would ideally open a payment modal.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Attendee Details Form:</strong>
              <ul className="ml-4">
                <li>Users input their Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload option with preview functionality.</li>
                <li>Ticket summary is visible to ensure users review their details before submission.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Payment or Success Page:</strong>
              <ul className="ml-4">
                <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
                <li>If the ticket is paid, developers can integrate payment solutions before showing the confirmation page.</li>
                <li>Upon successful booking, users should receive:</li>
                <ul className="ml-4 list-disc">
                  <li>A visual ticket preview with a unique QR Code.</li>
                  <li>An option to download the ticket as PDF or save it to their device.</li>
                  <li>An email confirmation containing ticket details.</li>
                </ul>
              </ul>
            </li>
          </ol>
          <h3 className="font-roadrage mb-2">How to Build This 🚀</h3>
          <p className="font-roboto">
            This UI can be implemented using:
          </p>
          <h4 className="font-roadrage">Frontend (Next.js or React):</h4>
          <ul className="ml-4">
            <li>Component Breakdown:
              <ul className="ml-4 list-disc">
                <li>TicketCard.tsx → Displays ticket details</li>
                <li>AttendeeForm.tsx → Captures user details</li>
                <li>PaymentModal.tsx → Handles payment processing</li>
                <li>SuccessScreen.tsx → Shows the final ticket preview</li>
              </ul>
            </li>
            <li>
              State Management: React’s Context API, Zustand, or Redux (if needed).
            </li>
            <li>
              File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().
            </li>
          </ul>
          <h4 className="font-roadrage">Backend (Optional):</h4>
          <ul className="ml-4">
            <li>If persistence is required, a backend can be built using Node.js & Express or Firebase Functions.</li>
            <li>
              Database options: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records.
            </li>
          </ul>
          <h4 className="font-roadrage">Payment Integration:</h4>
          <ul className="ml-4">
            <li>
              For paid events, developers should integrate:
              <ul className="ml-4 list-disc">
                <li>Stripe Checkout (for international transactions)</li>
                <li>Paystack or Flutterwave (for African users)</li>
              </ul>
            </li>
          </ul>
          <h3 className="font-roadrage mb-2">What You’ll Learn 👩‍💻</h3>
          <ul className="ml-4">
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
            <li>Generating & validating QR Codes for event check-in (Advanced).</li>
          </ul>
          <h3 className="font-roadrage mb-2">Need Help? Reach Out! 💬</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;