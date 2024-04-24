export default function PersonalCard({ personal }) {
    return (
        <div className='item'>                  
            <div>
                {personal.name}
            </div>
            <div>
                {personal.email}
            </div>
            <div>
                {personal.phone}
            </div>
        </div>
        )
}