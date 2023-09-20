import { Inter } from 'next/font/google'
import React, { forwardRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

const SignIn = (props, ref) => {
  const valueRef = React.useRef({})
  const {onBackTo, onSubmit, className} = props

  const submitHandler = () => {
    onSubmit(valueRef.current)
  }

  const onChangeHandler = (key, value) => {
    const formValues = valueRef.current
    formValues[key] = value
  }

  React.useEffect(() => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const inviteCode = urlParams.get('inviteCode')
    if (inviteCode) {
      valueRef.current.inviteCode = inviteCode
    }
  }, [])

  return (
    <div className={`common-bg fixed top-0 left-0 h-[100vh] w-[100vw] z-[999] flex-col items-center justify-between p-6 ${inter.className} ${className ?? ''}`} ref={ref}>
      <div className="flex justify-start w-full" onClick={onBackTo}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            填表报名
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                学生姓名
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  placeholder="请输入学生姓名"
                  onChange={(evt) => onChangeHandler('userName', evt.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="userAge" className="block text-sm font-medium leading-6 text-gray-900">
                学生年龄
              </label>
              <div className="mt-2">
                <input
                  id="userAge"
                  name="userAge"
                  type="number"
                  placeholder="请输入学生年龄"
                  onChange={(evt) => onChangeHandler('userAge', Number(evt.target.value))}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="userSchool" className="block text-sm font-medium leading-6 text-gray-900">
                就读学校
              </label>
              <div className="mt-2">
                <input
                  id="userSchool"
                  name="userSchool"
                  type="text"
                  placeholder="请输入学生目前就读学校"
                  onChange={(evt) => onChangeHandler('userSchool', Number(evt.target.value))}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>           

            <div>
              <label htmlFor="userPhone" className="block text-sm font-medium leading-6 text-gray-900">
                联系电话
              </label>
              <div className="mt-2">
                <input
                  id="userPhone"
                  name="userPhone"
                  type="tel"
                  placeholder="请输入联系电话"
                  onChange={(evt) => onChangeHandler('userPhone', evt.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inviteCode" className="block text-sm font-medium leading-6 text-gray-900">
                邀请码
              </label>
              <div className="mt-2">
                <input
                  id="inviteCode"
                  name="inviteCode"
                  placeholder="请输入邀请码"
                  defaultValue={valueRef.current.inviteCode}
                  onChange={(evt) => onChangeHandler('inviteCode', evt.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitHandler}
            >
              报名
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            邀请码会自动填入，必须有邀请码才能报名。
          </p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(SignIn)