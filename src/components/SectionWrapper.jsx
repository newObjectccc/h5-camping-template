import React, { forwardRef } from "react"

const SectionWrapper = (props, ref) => {
  const {item, idx, current, className, children, ...restProps} = props
  const [imgSrc, setImgSrc] = React.useState()

  const styles = {
    background: `url(${item.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }

  React.useEffect(() => {
    if (Math.abs(current - idx) < 3 && !imgSrc) {
      setImgSrc(item.src)
    }
  }, [current])

  return (
    <section ref={ref} {...restProps} style={styles} className={`flex flex-col items-center p-6 w-[100vw] h-[100vh] ${className ?? ''}`}>
      <div className={`w-full h-full p-4 backdrop-blur-xl shadow-lg`}>
        <img className="shadow-md rounded-t-xl" src={imgSrc}/>
        <div className="bg-white rounded-b-xl p-4">
          <div className="text-lg font-bold">{item.title}</div>
          <p className="mt-4">{item.content}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export default forwardRef(SectionWrapper)