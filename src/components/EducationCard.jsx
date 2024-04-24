export default function EducationCard({ education }) {
    return (
        <div className={'item'}>
            <div>
                {education.college}
            </div>
            <div>
                {education.degree}
            </div>
            <div>
                {education.gradDate}
            </div>
        </div>
        )
}