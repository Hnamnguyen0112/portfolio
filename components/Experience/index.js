import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/solid'


export default function Experience(props) {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <p className="text-3xl">#Experience</p>
      <VerticalTimeline layout={'1-column-left'}>
        {props.experience && props.experience.map((item, key) =>
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000', color: '#fff', boxShadow: 'none', border: '2px solid #fff' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date={item.date}
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={item.type === 'work' ? <BriefcaseIcon/> : <AcademicCapIcon/>}
          >
            <h3 style={{ fontSize: '1.5rem', lineHeight: '2rem'}}>{item.position} @ {item.name}</h3>
            {item.type === 'work' && <p>
              {item.language}
              <br />
              {item.skill}
              {item.description && <><br />{item.description}</>}
            </p>}
          </VerticalTimelineElement>,
        )}
      </VerticalTimeline>
    </div>
  )
}