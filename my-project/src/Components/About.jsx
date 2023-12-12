import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
    <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64 '/>
        <article>
            <SectionTitle text= 'About Experience'/>
            <p className='text-slate-600 mt-8 leading-loose'>During my time at Tech Mahindra in Pune from January 2019 to March 2023, I supported the development team and operations strategy, ensuring plans were executed smoothly. I crafted user stories and process flows to aid in designing client BOTs. Using Java, I developed a Reporting framework that automated client status reports. Collaborating closely with my team, I contributed to designing solutions that met business requirements and user stories. I utilized various techniques, such as documentation, specifications, and use cases, to comprehend project requirements. Additionally, I actively participated in crucial client meetings, including requirement sessions, system demos, user acceptance testing, and end-user training.</p>

        </article>

    </div>
    </section>
  )
}

export default About
