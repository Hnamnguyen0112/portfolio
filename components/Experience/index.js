import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/solid'

export default function Experience(props) {
  return (
    <div className="text-white">
      <VerticalTimeline layout={'1-column-left'} animate={props.animate} lineColor={'white'}>
        {props.experience && props.experience.map((item, key) =>
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#022E53', color: '#fff', boxShadow: 'none'}}
            contentArrowStyle={{ borderRight: '7px solid #022E53' }}
            date={item.date}
            iconStyle={{ background: '#022E53', color: '#fff' }}
            icon={item.type === 'work' ? <BriefcaseIcon /> : <AcademicCapIcon />}
          >
            <h3 style={{ fontSize: '1.5rem', lineHeight: '2rem', color: '#55FCD3' }}>{item.position} @ {item.name}</h3>
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