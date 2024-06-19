import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { Breadcrumb } from '../../components'

export const AboutPage: FC = () => {
  // TODO Download CV as PDF link
  // TODO Add load more option
  return (
    <div className="px-4 pb-0 max-w-[1312px] mx-auto mt-24 flex flex-col items-start md:mt-28 gap-6">
      <Helmet>
        <title>{'Jon Welzel > About'}</title>
        <meta
          name="description"
          content="Information about Jonathan Welzel, professional background, resume."
        />
      </Helmet>

      <Breadcrumb items={[{ name: 'About', path: '/about' }]} className="fixed top-20 md:top-28" />

      <h1 className="text-neutral-500 mt-10 md:mt-14">
        A brief overview of my 10+ years of experience in software development. Click{' '}
        <a className="underline" href="/">
          here
        </a>{' '}
        to download it as a PDF file.
      </h1>

      <h2 className="font-bold" id="skills">
        Skills Overview
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">5+ years of Java full stack experience</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">7+ years of frontend development experience</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">Mentoring of more junior devs</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">Node and Ruby experience</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">SQL/noSQL DB: Oracle DB, MySQL, PostgreSQL and MongoDB</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">Cloud infrastructure management (AWS, learning GCP)</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">Agile methodologies (Scrum and Kanban), TDD, Git, CI and CD</p>
        </div>
        <div className="border shadow rounded-xl p-3">
          <p className="text-sm">React proficiency and frontend ecosystem</p>
        </div>
      </div>

      <h2 className="font-bold" id="experience">
        Professional Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">MediaMarkt Saturn</h3>
            <p className="text-sm text-right">Aug. 2021 - Present</p>
            <p className="text-sm italic col-span-2">Experienced Software Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Our small team revamped the loyalty program for both brands of the company in
              different countries.
            </li>
            <li>Created landing pages as part of the new B2B customer registration process.</li>
            <li>
              Updated Contentful types and data and synced them with our REST API backend using
              GraphQL.
            </li>
            <li>Created translation jobs for different languages using Phrase.</li>
            <li>
              Spearheaded the implementation of the company’s new design system within our team.
            </li>
            <li>
              Performed multiple active monitoring sessions prior/after important sales campaigns
              and rollouts in new countries.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">Wunderflats GmbH</h3>
            <p className="text-sm text-right">Mar. 2019 - Jul. 2021</p>
            <p className="text-sm italic col-span-2">Senior Frontend Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Reduced bounce rate and increased adoption for mobile users of our platform by
              introducing SEO improvements and reshaping critical parts of the application.
            </li>
            <li>
              Worked closely with the design team to introduce more consistent patterns in the
              frontend and improve reusability for all frontend developers.
            </li>
            <li>Mentoring of junior frontend developers.</li>
            <li>
              Worked on our Node backend implementing new features and fixing performance issues.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">Resultados Digitais</h3>
            <p className="text-sm text-right">Nov. 2017 - Feb. 2019</p>
            <p className="text-sm italic col-span-2">Senior Full Stack Developer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Helped my experimental growth team to successfully improve the product’s user
              adoption.
            </li>
            <li>
              Actively participated and contributed to our frontend guild by helping to establish
              some good practices, patterns and other topics in order to improve frontend
              development.
            </li>
            <li>
              Improved code quality by refactoring legacy JavaScript + JQuery application to ReactJs
              components.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">Mercos</h3>
            <p className="text-sm text-right">Aug. 2015 - Nov. 2017</p>
            <p className="text-sm italic col-span-2">Frontend Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Improved our product’s stability by scaling and fine-tuning our AWS infrastructure.
            </li>
            <li>
              Implemented an easy way for our customers to check our product’s status by creating a
              status page, which automatically kicked in as soon as things went south.
            </li>
            <li>
              Increased operational control of our product by creating New Relic metrics, and
              improving our Codeship CI flow.
            </li>
            <li>
              Made a switch to frontend development so I could start an open-source project for the
              company’s React components and also helped introduce React and other tools into our
              frontend stack in order to offer a better experience for users and developers alike.
            </li>
            <li>
              Actively participated as one of the lead frontend devs in designing and building a
              greenfield B2B application.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">TOTVS</h3>
            <p className="text-sm text-right">Dec. 2013 - Aug. 2015</p>
            <p className="text-sm italic col-span-2">Full Stack Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Decreased QA allocation times by automating our application’s UI tests using Selenium.
            </li>
            <li>
              Increased our platform’s widgets count. One I particularly liked adding was a layout
              editor where users could completely change the look of their corporate portal.
            </li>
            <li>
              Switched to a frontend developer position in order to be involved in working on a new
              product with a team from Silicon Valley (TOTVS Labs), where I was directly responsible
              for pushing our product’s UI forward using Angular and Grails.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">Cipher</h3>
            <p className="text-sm text-right">Oct. 2012 - Nov. 2013</p>
            <p className="text-sm italic col-span-2">Full Stack Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Enabled our product to securely connect to remote devices through SSH by using a Java
              framework called JSch in order to assess possible vulnerability issues.
            </li>
            <li>
              Fixed bugs and implemented a plethora of features in our web application product which
              used Vaadin.
            </li>
            <li>
              Was responsible for expanding our product’s vulnerability analysis by designing and
              creating an Android client for our solution, which was responsible for checking a
              device for any known vulnerabilities and reporting back to our web application through
              a REST API.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">German Tech</h3>
            <p className="text-sm text-right">Nov. 2011 - Oct. 2012</p>
            <p className="text-sm italic col-span-2">Full Stack Engineer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Introduced new features/bug fixes in our Eclipse RCP desktop applications which
              enabled our customers to integrate their businesses with our billing and accounting
              solutions.
            </li>
            <li>
              Also led a one-man project to design and develop a new Ruby on Rails solution for
              billing the transportation costs of shipments in accordance to federal Brazilian
              regulations.
            </li>
          </ul>
        </div>

        <div className="border shadow rounded-xl p-3 flex flex-col">
          <div className="grid grid-cols-2 mb-2">
            <h3 className="text-sm font-semibold">Digitaldoc</h3>
            <p className="text-sm text-right">Mar. 2008 - Jul. 2010</p>
            <p className="text-sm italic col-span-2">Full Stack Developer</p>
          </div>
          <ul className="text-sm list-disc flex flex-col leading-tight list-inside">
            <li>
              Worked with JavaServer Faces, Hibernate, Hibernate Search and RichFaces on a document
              management system called DigitalDoc.
            </li>
            <li>Researched and added a full-text search feature in the product.</li>
            <li>
              Led a one-man project for designing, developing and maintaining a compliance web
              application which used the Ishikawa Diagram to help our users identify and track ISO
              compliance issues in their businesses.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="font-bold" id="education">
        Education
      </h2>

      <div className="grid grid-cols-1">
        <div className="border shadow rounded-xl p-3 flex flex-col">
          <h3 className="text-sm font-semibold">
            Federal Technological University of Paraná (UTFPR)
          </h3>
          <p className="text-sm">2006 - 2010</p>
          <p className="text-sm italic col-span-2">
            Coursework in Software Analysis and Development
          </p>
        </div>
      </div>
    </div>
  )
}
