import React from 'react'

const Timeline = () => {

  return (

    <>
    <div className='text-center pt-5'>
        <h1>Professional Journey</h1>
        <p>Here's a quick look at my journey so far – from where I started to where I am today.</p>
    </div>

    <div class="timeline">
        <div class="timeline-item timeline-item-right">
            <div class="timeline-content">
            <h3>Tanza National Trade School (Main)</h3>
            <span className='fw-bold'>Computer Programming | 2016-2018</span>
            <p>It all started in senior high school when I was first introduced to coding. I was amazed by how simple lines of code could bring ideas to life, and I immediately enjoyed it. I began with HTML, CSS, and JavaScript, and later learned basic Java, where I built my very first system—a simple calculator.</p>
            </div>
        </div>

        <div class="timeline-item timeline-item-left">
            <div class="marker"></div>
            <div class="timeline-content">
            <h3>Cavite State University CCAT-Campus</h3>
            <span className='fw-bold'>Bachelor of Science in Information Technology | 2019-2024</span>
            <p>In college, programming became a much bigger part of my life. It wasn’t just simple exercises anymore—I faced real challenges as I learned how to build complete systems, which made my college journey quite difficult at times. Still, I genuinely enjoyed it because it prepared me for real-world projects and helped me grow.</p>
            </div>
        </div>

        <div class="timeline-item timeline-item-right">
            <div class="marker"></div>
            <div class="timeline-content">
            <h3>Macro Wiring Technologies Co. Inc</h3>
            <span className='fw-bold'>IT Intern | Oct2023-Feb-2024</span>
            <p>During my OJT days, I finally experienced working in a real company environment. My main tasks involved analyzing process data, doing basic troubleshooting, and accepting purchase orders. Although the work seemed simple at first, it taught me the importance of accuracy, attention to detail, and understanding actual business processes. It was a valuable experience that helped me build both technical and workplace skills</p>
            </div>
        </div>

        <div class="timeline-item timeline-item-left">
            <div class="marker"></div>
            <div class="timeline-content">
            <h3> My Goal as a Junior Developer</h3>
            <p>Now, I’m ready to take the next step. With the skills I’ve gained, the challenges I’ve overcome, and the experiences I’ve collected along the way, I’m fully prepared to enter the professional world and contribute to meaningful projects</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Timeline
