export default function EducationCard({ education, deleteEntry }) {
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
            <button
                onClick={e => {
                    deleteEntry(education.id, e);
                    }}>
            Delete
            </button>
        </div>
        )
}