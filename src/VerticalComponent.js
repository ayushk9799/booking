import React from 'react'
import { VerticalTimeline ,VerticalTimelineElement} from 'react-vertical-timeline-component'
import Icons from './Icons';
import 'react-vertical-timeline-component/style.min.css';

export default function VerticalComponent() {
  return (
    <>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',width:'100px' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icons/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  </>
  )
}
