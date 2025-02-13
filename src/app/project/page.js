const ProjectPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
      <h1 className="text-4xl md:text-5xl font-roadrage text-center mb-12">
        About Our Conference Ticket Platform
      </h1>
      <div className="space-y-8">
        <div className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
          <h2 className="text-2xl font-roadrage mb-4">Project Overview</h2>
          <p className="font-roboto">
            <strong>Conference Ticket Platform: Empowering Event Management 🚀</strong>
          </p>
          <p className="font-roboto">
            <strong>Mission:</strong> To build a comprehensive, open-source platform that simplifies conference ticket sales, attendee management, and overall event logistics for organizers of all sizes.  We aim to provide a robust, customizable solution that reduces administrative overhead and enhances the attendee experience.
          </p>
          <p className="font-roboto">
            This project provides an accessible and powerful tool for event planners and a valuable learning opportunity for developers interested in full-stack web development and event management solutions.
          </p>

          <h3 className="font-roadrage mb-2">Core Functionalities:</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>Dynamic Event Creation:</strong>  Configure event details like name, description, dates, venue, and speaker information through an intuitive interface.
            </li>
            <li className="mb-2">
              <strong>Flexible Ticketing Options:</strong>  Define multiple ticket tiers (e.g., Early Bird, Standard, VIP) with customized pricing, availability, and access privileges. Implement discount codes and promotional offers.
            </li>
            <li className="mb-2">
              <strong>Streamlined Attendee Registration:</strong>  Capture essential attendee information (name, email, affiliation) through customizable registration forms. Support for optional data collection (dietary restrictions, interests).
            </li>
            <li className="mb-2">
              <strong>Secure Payment Processing:</strong>  Seamless integration with trusted payment gateways (Stripe, PayPal) for secure online transactions.  Support for refunds and transaction management.
            </li>
            <li className="mb-2">
              <strong>Automated Communication:</strong>  Generate automated email confirmations, reminders, and updates to attendees.
            </li>
            <li className="mb-2">
              <strong>Real-time Reporting & Analytics:</strong>  Monitor ticket sales, attendance rates, revenue generation, and other key metrics through interactive dashboards and customizable reports.
            </li>
            <li className="mb-2">
              <strong>Digital Ticketing & Check-in:</strong>  Generate unique QR codes for each ticket.  Develop a mobile app or web interface for efficient attendee check-in on the day of the event.
            </li>
          </ul>

          <h3 className="font-roadrage mb-2">Technology Stack:</h3>
          <p className="font-roboto">
            We leverage cutting-edge technologies to ensure scalability, performance, and a modern user experience:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Frontend:</strong> React.js (with TypeScript), Tailwind CSS, Redux Toolkit for state management</li>
            <li><strong>Backend:</strong> Node.js (with TypeScript), Express.js, GraphQL API</li>
            <li><strong>Database:</strong> PostgreSQL with Prisma ORM</li>
            <li><strong>Authentication:</strong>  JSON Web Tokens (JWT)</li>
            <li><strong>Cloud Infrastructure:</strong>  AWS (EC2, S3, RDS) or Google Cloud Platform (Compute Engine, Cloud Storage, Cloud SQL)</li>
          </ul>

          <h3 className="font-roadrage mb-2">Contribute and Learn:</h3>
          <p className="font-roboto">
            We welcome developers of all levels to contribute to our open-source project. Here are some ways to get involved:
          </p>
          <ul className="list-disc list-inside">
            <li>**Bug Fixes:** Help us identify and resolve bugs to improve the stability and reliability of the platform.</li>
            <li>**Feature Development:** Contribute new features and functionalities to enhance the platform's capabilities.</li>
            <li>**Documentation:** Improve our documentation to make the project more accessible and user-friendly.</li>
            <li>**Testing:**  Write unit and integration tests to ensure the quality of the code.</li>
            <li>**UI/UX Enhancements:**  Contribute to improving the user interface and user experience of the platform.</li>
          </ul>

          <h3 className="font-roadrage mb-2">Skills You'll Develop:</h3>
          <ul className="list-disc list-inside">
            <li>Full-stack web development with React, Node.js, and PostgreSQL.</li>
            <li>Designing and implementing RESTful and GraphQL APIs.</li>
            <li>Working with relational databases and ORMs.</li>
            <li>Implementing secure authentication and authorization mechanisms.</li>
            <li>Deploying and managing applications on cloud platforms.</li>
            <li>Collaborating on open-source projects using Git and GitHub.</li>
          </ul>

          <h3 className="font-roadrage mb-2">Join the Community!</h3>
          <p className="font-roboto">
            Ready to make a difference in the event management world?  Visit our GitHub repository (link to be added) to explore the code, contribute, and connect with our community. Let's build the future of conference ticketing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
