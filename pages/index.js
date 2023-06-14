import Head from "next/head";
import formImg from "../public/form.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
export default function Home() {
  const router=useRouter();
  //formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Pakistan",
      terms: "",
    },
//Validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push("/success");
     
    },
  });
  return (
  <m.div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className='h-screen flex items-center justify-center'>
      <form onSubmit={formik.handleSubmit}
      className='bg-white flex rounded-lg w-1/2 font-latoRegular '>
        <div className='flex-1 text-gray-700 p-20'>
            <h1 className='text-3xl pb-2 font-latoBold'>
              Let's get started</h1>
            <p className='text-lg text-gray-500'>
              Build your skills with a community of tech enthusiasts.

            </p>
            <div className='mt-6'>
              {/*Name input field*/}
              <div className='pb-4'>
                <label htmlFor='name' className={`font-latoBold text-sm pb-2 pr-2
                 ${formik.touched.name && formik.errors.name ? "text-red-400" : ""}`}>
                  {formik.touched.name && formik.errors.name   ? formik.errors.name : "Name"}
                  </label>
                <input className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                focus:ring-teal-500'
 type="text" name='name' value={formik.values.name}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 placeholder='Enter your name' />

              </div>
              {/*Email input field*/}
              <div className='pb-4'>
                <label htmlFor='email' className={`font-latoBold text-sm pb-2 pr-2
                 ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`}>
                  {formik.touched.email && formik.errors.email  ? formik.errors.email : "Email"}
                  </label>
                <input 
                className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                focus:ring-teal-500'
                type="email" 
                name='email' 
                placeholder='Enter your email'
                value={formik.values.email}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur} />

              </div>
               {/*Country input field*/}
               <div className='pb-4'>
                <label htmlFor='country' className='font-latoBold text-sm pb-2 pr-2'>
                  Country</label>
              <select name='country'  
              value={formik.values.country}
              onChange={formik.handleChange}
              className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500
                focus:ring-teal-500'>
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>Brazil</option>
                  <option>United Kingdom</option>
                  <option>Italy</option>
                  <option>Iran</option>
                  <option>Turkey</option>
                  <option>Dubai</option>
                  <option>Saudi Arabia</option>
                  <option>Afghanistan</option>
              </select>
              </div>
                {/*terms of service*/}
                <div className='pb-4'>
                <label 
                htmlFor='terms' 
                className={`font-latoBold text-sm pb-2 pr-2
                ${formik.touched.terms && formik.errors.terms ? "text-red-400" : ""}`}>
                 {formik.touched.terms && formik.errors.terms   ? formik.errors.terms : "  Do you agree with our terms of service"}
                </label>
               <div className='flex items-center gap-2'>  
                <input type="checkbox" name='terms' value="checked"
                onChange={formik.handleChange}
               className='h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500'/>
               <p>
                I agree to the Terms and Service 
                that my data will be accessible.
               </p>
               </div>
              </div>
              <button 
              type='submit'
              className='bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full'>
                Start Learning</button>
            </div>
        </div>
        <div className='relative flex-1'>
          <Image src={formImg} alt='' fill className='object-cover rounded-lg'/>
        </div>
      </form>
    </main>
    </m.div>
  )
}

