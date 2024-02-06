import './style.css'


function BreakLine({ data }) {
  const lineBreaks = [];

  for (let a = 0; a < data; a++) {
    lineBreaks.push(<br key={a} />);
  }

  return <>{lineBreaks}</>;
}

function App() {
  const yearNow = new Date().getFullYear()
  const badge = ['React', 'NodeJS', 'Firebase']
  const content = [{
    year: 2024,
    pos: 'Web Developer',
    type: 'Web Developer',
    project: 'portfolio',
    body: 'I showcase my skills and expertise through the creation of a portfolio that illustrates my capabilities in web development. Within each project showcased here, clients can discover my proficiency in crafting modern and effective websites. I am prepared to tackle various challenges and collaborate on projects that will deliver unforgettable online experiences.'
  }]

  return (
    <>
      <div className="hero min-h-screen shadow-lg" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/justeen-portfolio.appspot.com/o/PSX_20240206_073939.jpg?alt=media&token=884fb133-39dc-492a-ac14-0473a97b5f62)' }}>
        <div className="hero-overlay contrast-200"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 title text-3xl font-bold">Hi i'm Justeen James Tolentino</h1>
            <p className="mb-14 m-10 text-2xl">Web developer</p>
            <p className="mb-5">I'm grateful for your visit to my portfolio and the time you've taken to explore my work. Thank you for your interest!</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="title text-lg">About</h1>
        <BreakLine data={1} />
        <p className="opacity-70">
          In 2020, fueled by curiosity, I began a programming journey. From Java console programs to the enchanting trio of HTML, CSS, and JavaScript, I explored web development's artistry. Venturing into Node.js, I transformed static pages into dynamic, responsive sites.
          <BreakLine data={2} />
          Countless hours of self-learning shaped a passion for crafting captivating, user-centric web experiences. This ongoing adventure propels me to learn, adapt, and contribute to the ever-evolving world of web development.
          <BreakLine data={2} />
          Dedicated to elevating the world through continuous programming mastery. Enthusiastically open to freelance opportunities, embracing the journey of perpetual learning for a brighter digital tomorrow.
        </p>
        <BreakLine data={3}/>
        <a className="btn btn-ghost btn-outline text-sm text-sm text-cyan-300">Learn more</a>
      </div>

      <div className="divider"></div>

      <div className="container">
        <BreakLine data={3} />
        <h1 className="title text-lg">Experiences</h1>
        <BreakLine data={1} />

        {content.map((experience, index) => (
          <div key={index} className="experience">
            <div className="content">
              <p className="opacity-70">{experience.year} - {experience.year === yearNow ? 'PRESENT' : yearNow} | {experience.project}</p>
              <a className="btn btn-ghost btn-sm">{experience.pos}</a>
              <p className="opacity-80">{experience.body}</p>
            </div>
            <div className="flex-col w-fit">
              {badge.map((data, badgeIndex) => (
                <div key={badgeIndex} className="badge badge-primary badge-outline">
                  {data}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="divider">Projects</div>
      <div className="divider">Social</div>
      <div className="divider">Contact</div>
    </>
  )
}

export default App