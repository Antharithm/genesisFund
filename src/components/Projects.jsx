import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
      {Array(6)
        .fill()
        .map((card, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({card, id}) => (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
      <Link to={"/projects/" + id}>
        <img 
          src="https://img.automationworld.com/files/base/pmmi/all/image/2021/04/GettyImages_RobotThinking.606f239b9028c.png?auto=format%2Ccompress&fit=max&q=70&w=1200" 
          alt="project title" 
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h5>Creating a Household Robot</h5>
          </div>
        </div>
      </Link>
    </div>
)

export default Projects