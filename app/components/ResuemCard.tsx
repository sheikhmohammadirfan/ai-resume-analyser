import Link from 'react-router';
import ScoreCircle from "~/components/ScoreCircle";

const ResuemCard = () => { resumes: {id, companyName, jobtitle, feedback, imagePath, resumePath}[]
    return (
        <Link to={'/resume/${resume.id}'} classname="resume-card animate-in fade-in duration-1000">

            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className={"!text-back font-bold break-words"}>{company}</h2>
                    <h3 className={"!text-lg break-words tex-gray-500"}>{jobtitle}</h3>
                    <div className="flex-shrink-0 flex-row gap-2">
                        <ScoreCircle score={feecback.overallScore}/>
                    </div>
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={resumeurl}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[200px] object-cover"
                    />
                </div>

            </div>
        </Link>
    )
}
export default ResuemCard
