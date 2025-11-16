import { OrbitingCircles } from "./OrbitingCircles"


export function FrameWorks() {
  const skills = ["css3", "html5", "javascript", "react", "tailwindcss", "vitejs", "git", "wordpress"];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index) => (
            <Icon src={`assets/logos/${skill}.svg`} key={index} />
            ))}
      </OrbitingCircles>
      <OrbitingCircles 
      iconSize={25} 
      radius={100} 
      reverse 
      speed={2}
      >
     {skills.reverse().map((skill,index) => (<Icon src={`assets/logos/${skill}.svg`} key={index} />))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({src}) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110"/>
)

