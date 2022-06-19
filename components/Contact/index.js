import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import { AppContext } from '../../context/state'

export default function Contact() {
  const { setDialog, setDialogContent } = useContext(AppContext)

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    message: Yup.string()
      .required('Message is required'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(data) {
    return emailjs.send(
      process.env.EMAIL_JS_SERVICE,
      process.env.EMAIL_JS_TEMPLATE,
      data,
      process.env.EMAIL_JS_USER,
    )
      .then(({ status }) => {
        reset()
        setDialogContent({
          title: 'Notification',
          message: 'Your message has been delivered',
          close: 'Close',
        })
        setDialog(true)
      }, () => {
        reset()
        setDialogContent({
          title: 'Temporarily Down for Maintenance',
          message: 'I am performing scheduled maintenance, and really sorry for this inconvenience.',
          close: 'Close',
        })
        setDialog(true)
      })
  }

  return (
    <div className="max-w-6xl mx-auto mb-12 animate-fade-in-up">
      <form onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
        <div className="flex">
          <h1 className="font-bold uppercase text-4xl text-black">Send me a message</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <div className="mt-2 w-full">
            <input
              className={'w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ' + (errors?.firstName ? 'border-2 border-red-500' : '')}
              type="text"
              placeholder="First Name*"
              name="firstName"
              {...register('firstName')}
            />
            {errors?.firstName &&
            <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
              {errors?.firstName.message}
            </span>}
          </div>
          <div className="w-full mt-2">
            <input
              className={'w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ' + (errors?.lastName ? 'border-2 border-red-500' : '')}
              type="text"
              placeholder="Last Name*"
              name="lastName"
              {...register('lastName')}
            />
            {errors?.lastName &&
            <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
              {errors?.lastName.message}
            </span>}
          </div>
          <div className="w-full mt-2 md:col-span-2">
            <input
              className={'w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ' + (errors?.email ? 'border-2 border-red-500' : '')}
              type="email"
              placeholder="Email*"
              {...register('email')}
            />
            {errors?.email &&
            <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
              {errors?.email.message}
            </span>}
          </div>
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className={'w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ' + (errors?.message ? 'border-2 border-red-500' : '')}
            name="message"
            {...register('message')}
          />
          {errors?.message &&
          <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
              {errors?.message.message}
            </span>}
        </div>
        <div className="my-2 w-full flex flex-wrap gap-x-4 gap-y-2">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-cyan-600 p-3 rounded-lg focus:outline-none focus:shadow-outline text-white"
            type="submit"
          >
            Send Message
          </button>
          <a
            href="/Nguyen-Thanh-Hai-Nam.pdf"
            className="sm:mt-0 uppercase text-sm font-bold tracking-wide bg-cyan-600 p-3 rounded-lg focus:outline-none focus:shadow-outline text-white"
            target="_blank"
            rel="noreferrer"
          >
            Download my resume
          </a>
        </div>
      </form>

      <div
        className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-white rounded-2xl border">
        <div className="flex flex-col text-black">
          <h1 className="font-bold uppercase text-4xl my-4 text-black">Work with me</h1>
          <p>Hi, thank you for taking the time for my portfolio. If you&apos;re looking for a cooperator in your creative idea, feel free to contact me.
          </p>

          <div className="flex my-4 w-2/3 lg:w-full">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400">Tel: (+84) 933 9898 81</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
