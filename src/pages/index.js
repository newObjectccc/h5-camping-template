import SectionWrapper from '@/components/SectionWrapper'
import SignIn from '@/components/SignIn'
import { gsap } from 'gsap'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const sectionList = [
  {
    src: '/images/bg1.jpg',
    title: '西南航空职业学院',
    content: '为推动航空航天教育发展，传播航空航天文化知识，弘扬创新实践精神，培养具备开拓创新潜力的下一代创新人才，营造中小学校科技创新文化，激发中小学校自主创新动力，特推出航空航天科技研学旅行服务，让学生通过在中国航空学会航空航天研学基地开展航空航天科技研学旅行活动，体验炫酷的飞行，宣传普及航空航天知识 ，激发青少年学习对航空航天科技的热情和积极性。',
  }, {
    src: '/images/20230919150416.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919150412.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919150413.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919150415.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919150417.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919155621.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919160035.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919160036.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919160037.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919194813.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919160040.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919160041.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919194856.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919195325.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919195359.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919195347.jpg',
    title: '',
    content: '',
  }, {
    src: '/images/20230919195357.jpg',
    title: '西南航空学院',
    content: '',
  },
]

export default function Home() {
  const signInRef = React.useRef(null)
  const isSignInShow = React.useRef(true)
  const listRef = React.useRef(null)
  const moveRef = React.useRef({})
  const [currentIdx, setCurrentIdx] = React.useState(0)

  React.useEffect(() => {
    const moveParams = moveRef.current
    const touchstartHandler = (evt) => {
      if (evt.touches[0]?.clientY) {
        moveParams.startY = evt.touches[0].clientY
      }
      moveParams.touchstartTime = performance.now()
    }
    const touchendHandler = (evt) => {
      if (evt.changedTouches[0]?.clientY) {
        moveParams.endY = evt.changedTouches[0].clientY
      }
      moveParams.touchendTime = performance.now()
      const distanceY = moveParams.endY - moveParams.startY
      const lastTime = moveParams.touchendTime - moveParams.touchstartTime
      moveRef.current = {}
      if (!distanceY || Math.abs(distanceY) < 20 || lastTime > 2000 || isSignInShow.current) return
      if (distanceY > 0) {
        // 向下滑动
        onPrev()
      } else {
        // 向上滑动
        onNext()
      }
    }
    document.addEventListener('touchstart', touchstartHandler)
    document.addEventListener('touchend', touchendHandler)
    return () => {
      document.removeEventListener('touchstart', touchstartHandler)
      document.removeEventListener('touchend', touchendHandler)
    }
  }, [])

  const backToHandler = () => {
    gsap.to(signInRef.current, {
      xPercent: -100,
      opacity: 0,
      duration: .4,
    })
    isSignInShow.current = false
  }

  const submitHandler = (evt) => {
    console.log(evt)
  }

  const goSignIn = () => {
    gsap.to(signInRef.current, {
      xPercent: 0,
      opacity: 1,
      duration: .4,
    })
    isSignInShow.current = true
  }

  const onNext = () => {
    setCurrentIdx(prev => {
      if (prev < sectionList.length - 1) {
        return prev + 1
      }
      return prev
    })
  }

  const onPrev = () => {
    setCurrentIdx(prev => {
      if (prev > 0) {
        return prev - 1
      }
      return prev
    })
  }

  return (
    <main
      style={{ height: '100svh' }}
      className={`flex h-full flex-col items-center justify-between ${inter.className}`}
    >
      <SignIn ref={signInRef} onBackTo={backToHandler} onSubmit={submitHandler} />
      {/* <div className="overflow-hidden w-full h-screen" ref={listRef}>
        <SectionWrapper className="animate-flip-in-y" key={sectionList[currentIdx].src} item={sectionList[currentIdx]}></SectionWrapper>
      </div> */}
      <div className="overflow-hidden w-full h-full" ref={listRef}>
        {sectionList.map((item, index) => (
          <SectionWrapper current={currentIdx} idx={index} className={`${index === currentIdx ? 'block animate-bounce-in' : 'hidden'}`} key={item.src} item={item}>
            {sectionList.length - 1 === index && (
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={goSignIn}
              >
                去报名
              </button>
            )}
          </SectionWrapper>
        )
        )}
      </div>
      {currentIdx !== 0 && <svg onClick={onPrev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto fixed top-2 z-[998] animate-bounce">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>}
      {currentIdx !== sectionList.length - 1 && <svg onClick={onNext} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto fixed bottom-2 z-[998] animate-bounce">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
      </svg>}
    </main>
  )
}
