export default function WorkCard({ work }) {
    return (
        <div className={'item'}>
            <div>
                {work.company}
            </div>
            <div>
                {work.position}
            </div>
            <div>
                {work.tasks}
            </div>
            <div>
                {work.startDate}
            </div>
            <div>
                {work.endDate}
            </div>
        </div>
        )
}