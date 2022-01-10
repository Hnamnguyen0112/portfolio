import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/solid'
import { AppContext } from '../../context/state'
import { useContext } from 'react'


export default function Experience(props) {
  const { mode } = useContext(AppContext)
  const contentStyle = mode ? { background: '#000', color: '#fff', boxShadow: 'none', border: '2px solid #fff' } : { background: '#7DD3FC', boxShadow: 'none' }
  const contentArrowStyle = mode ? { borderRight: '7px solid #fff' } : { borderRight: '7px solid #7DD3FC' }
  const iconStyle = mode ? { background: '#000', color: '#fff' } : { background: '#7DD3FC', color: '#fff', boxShadow: 'none' }

  return (
    <div className="max-w-4xl mx-auto text-white">
      <VerticalTimeline layout={'1-column-left'} animate={props.animate} lineColor={mode ? 'white' : '#7DD3FC'}>
        {props.experience && props.experience.map((item, key) =>
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={item.date}
            iconStyle={iconStyle}
            icon={item.type === 'work' ? <BriefcaseIcon /> : <AcademicCapIcon />}
          >
            <h3 style={{ fontSize: '1.5rem', lineHeight: '2rem' }}>{item.position} @ {item.name}</h3>
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