import Link from "next/link";

export default function About() {
  return (
    <div className="wrapper max-w-4xl mx-auto px-4 py-8">
    
      <main>
        <section className="about-item mb-8">
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <div className="about-content text-gray-700">
            <p>
              Highly skilled and detail-oriented administrative assistant with a strong focus on delivering exceptional back-office operations, providing comprehensive team support, and handling queries and calls.
            </p>
            <p>
              Passionate about the field of data science and eager to contribute to projects and opportunities in this domain. Continuously improving skills in data analysis, visualization, reporting, and machine learning. Currently pursuing certification in Data Science and Microsoft Azure.
            </p>
            <p>
              Proven ability to manage multiple responsibilities effectively while maintaining attention to detail. Polished editing skills and the ability to meet tight deadlines.
            </p>
            <p>
              My background spans across diverse roles, from Data Entry Controller at YellowDot to working as an M-Pesa Agent, and as a Teller at Dimkes DT Sacco. These experiences have honed my skills in organization, attention to detail, and multitasking.
            </p>
            <p>
              I am proficient in Python, Microsoft Office, and various administrative tools, and continuously seek opportunities to expand my skillset, especially in data science and technology.
            </p>
            <p>
              Outside of work, I volunteer in community outreach programs, where I advocate for youth and mentor young men in leadership and personal growth.
            </p>
            <p className="resume-link">
              <strong>
                Here is a link to my {' '}
                <Link href="/resume" className="text-blue-500 hover:underline">
                  Resume
                </Link>
              </strong>
            </p>
          </div>

          <h2 className="text-3xl font-semibold mt-8">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>Python Programming</li>
            <li>Statistical Analysis</li>
            <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8">Work Experience</h2>
          <div className="experience-item mb-4">
            <h3 className="text-2xl font-bold">YellowDot (Data Entry Controller, CRM, and Admin)</h3>
            <p className="text-gray-500"><em>August 2023 - March 2024</em></p>
            <ul className="list-disc list-inside">
              <li>Uploaded 200 products onto the platform within 2 months.</li>
              <li>Transformed data from PDF catalogues to Excel, customized for website upload.</li>
              <li>Corrected spelling errors for 1200 products within 2 weeks.</li>
              <li>Provided support across departments for various administrative tasks.</li>
            </ul>
          </div>

          <div className="experience-item mb-4">
            <h3 className="text-2xl font-bold">Happy Go Ltd (M-Pesa Agent)</h3>
            <p className="text-gray-500"><em>February 2022 - December 2022</em></p>
            <ul className="list-disc list-inside">
              <li>Handled customer deposits, withdrawals, and queries with 90% satisfaction rate.</li>
              <li>Maintained daily reporting and reconciliations accurately and on time.</li>
            </ul>
          </div>

          <div className="experience-item mb-4">
            <h3 className="text-2xl font-bold">Dimkes DT Sacco (Teller)</h3>
            <p className="text-gray-500"><em>January 2018 - December 2021</em></p>
            <ul className="list-disc list-inside">
              <li>Processed cash transactions, deposits, and withdrawals with 80% accuracy.</li>
              <li>Promoted SACCO services and assisted with loan applications and compliance.</li>
              <li>Reconciled cash transactions daily with 90% accuracy.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mt-8">Education</h2>
          <div className="education-item mb-4">
            <h3 className="text-2xl font-bold">Moringa School, Nairobi</h3>
            <p className="text-gray-500"><em>Data Science and Machine Learning - July 2023</em></p>
            <ul className="list-disc list-inside">
              <li>Relevant Coursework: Data Visualization, Data Analysis, Machine Learning</li>
            </ul>
          </div>

          <div className="education-item mb-4">
            <h3 className="text-2xl font-bold">Egerton University, Nakuru</h3>
            <p className="text-gray-500"><em>Procurement and Supplies Management Business - December 2017</em></p>
            <ul className="list-disc list-inside">
              <li>Relevant Coursework: Procurement Management, Stock Control, Ethics</li>
            </ul>
          </div>

          <div className="education-item mb-4">
            <h3 className="text-2xl font-bold">Christ the King College, Nakuru</h3>
            <p className="text-gray-500"><em>Certificate in Computer Applications - April 2014</em></p>
            <ul className="list-disc list-inside">
              <li>Relevant Coursework: Microsoft Office Suite, Internet and Email</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-8">
        <nav>
          <ul className="flex justify-center space-x-6">
            <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
            <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/blog" className="text-blue-500 hover:underline">Blogs</Link></li>
            <li><Link href="/contact" className="text-blue-500 hover:underline">Contact Me</Link></li>
            <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
            <li><Link href="/market" className="text-blue-500 hover:underline">Marketplace</Link></li>
          </ul>
        </nav>
               
      </footer>
    </div>
  );
}
