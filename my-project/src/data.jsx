import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaJava } from 'react-icons/fa';

export const links = [
  { id: nanoid(), 
    href: '#home', 
    text: 'home' ,
    github: 'https://github.com/Pallavi2511' },

  { id: nanoid(), 
    href: '#skills', 
    text: 'skills',
    github: 'https://github.com/Pallavi2511' },

  { id: nanoid(), 
    href: '#about',
     text: 'about',
     github: 'https://github.com/Pallavi2511' },

  { id: nanoid(), 
    href: '#projects', 
    text: 'projects',
    github: 'https://github.com/Pallavi2511' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Java programming with a strong foundation in object-oriented principles. Skilled in developing robust and scalable applications, Java versatility in creating efficient solutions for diverse software needs.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/4386338/pexels-photo-4386338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://p-expensetracker.netlify.app/',
    github: 'https://github.com/Pallavi2511/Expense-tracker',
    linkedin:'https://www.linkedin.com/in/pallavi-dhole-051b05110/',
    title: 'Expense Tracker',
    text: 'Developed a dynamic Expense Tracker application using React, showcasing expertise in front-end development, state management, and user interface design. Implemented features for seamless expense tracking, categorization, and visualization, demonstrating strong problem-solving skills and proficiency in React framework.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/11986168/pexels-photo-11986168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://p-tic-tac-toe.netlify.app',
    github: 'https://github.com/Pallavi2511/07-tic-tac-toe-starting-project/tree/main/07-tic-tac-toe-starting-project',
    linkedin:'https://www.linkedin.com/in/pallavi-dhole-051b05110/',
    title: 'Tic-Tac-Toe',
    text: 'Developed a fully functional Tic-Tac-Toe game application using React, demonstrating proficiency in front-end development, state management, and user interface design. Implemented interactive game play features, showcasing strong problem-solving skills and proficiency in React framework.',
  },
  {
    id: nanoid(),
    img: 'https://www.course-api.com/images/tours/tour-4.jpeg',
    url: 'https://p-tic-tac-toe.netlify.app',
    github: 'https://github.com/Pallavi2511/tour',
    linkedin:'https://www.linkedin.com/in/pallavi-dhole-051b05110/',
    title: 'Tour Management',
    text: 'Developed a versatile Tour Management application using React, enabling users to efficiently add and manage multiple destinations. Implemented a user-friendly feature allowing the removal of undesired places, showcasing proficiency in React development, intuitive UX design, and seamless user interaction.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/953862/pexels-photo-953862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '•	https://p-shoppingcart.netlify.app/ ',
    github: 'https://github.com/Pallavi2511/Redux/tree/main/redux_tool',
    linkedin:'https://www.linkedin.com/in/pallavi-dhole-051b05110/',
    title: 'Shopping Cart',
    text: 'Designed and developed a robust Shopping Cart application using React, showcasing expertise in front-end development, state management, and user interface design. Implemented features for seamless product browsing, selection, and purchase, demonstrating strong problem-solving skills and proficiency in React framework',
  },
];
