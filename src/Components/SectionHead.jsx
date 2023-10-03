

const SectionHead = ({icon,title,className}) => {
    return (
      <div className={`section_head ${className}`}>
  
                  <span>{icon}</span>
                  <h5>{title}</h5>
              </div>
    )
  }
  
  export default SectionHead