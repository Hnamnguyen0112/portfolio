import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
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
    setTimeout(() => reset(), 2000)
    setDialog(true)
    setDialogContent({ title: 'Temporarily Down for Maintenance', message: 'I am performing scheduled maintenance, and really sorry for this inconvenience.', close: 'Close' })
    return false
  }

  return (
    <div className="container mx-auto my-4 px-4 lg:px-20">
      <form onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-[#022E53]">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl text-[#55FCD3]">Send me a <br /> message</h1>
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
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline text-[#55FCD3]"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>

      <div
        className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-4xl my-4 text-[#55FCD3]">Drop in our office</h1>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt arcu diam,
            eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
          </p>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer"
               className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i className="fab fa-facebook-f text-blue-900" />
            </a>
            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer"
               className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i className="fab fa-linkedin-in text-blue-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}