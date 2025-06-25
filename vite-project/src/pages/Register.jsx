import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const registerSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Too short!').required('Required'),
  })

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    try {
      await new Promise(res => setTimeout(res, 1000)) // fake delay

      console.log('Registering user:', values)
      navigate('/login')
    } catch (err) {
      setErrors({ general: 'Something went wrong' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting, errors }) => (
          <Form className="space-y-4">
            {errors.general && <div className="text-red-500">{errors.general}</div>}
            <div>
              <label className="block">Username</label>
              <Field name="username" type="text" className="w-full p-2 border rounded" />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block">Email</label>
              <Field name="email" type="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block">Password</label>
              <Field name="password" type="password" className="w-full p-2 border rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
