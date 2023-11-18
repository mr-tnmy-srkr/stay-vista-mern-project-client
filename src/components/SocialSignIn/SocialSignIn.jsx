import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getToken, saveUser } from '../../api/auth'
import toast from 'react-hot-toast'

const SocialSignIn = () => {
    const {  signInWithGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
     // Handle Social SignIn
  const handleSocialSignIn = async (media) => {
    try {
      //2. User Registration using google
      const result = await media()

      //4. save user data in database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)

      //5. get token
      await getToken(result?.user?.email)
      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  return (

         <div onClick={()=>handleSocialSignIn(signInWithGoogle)} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
  
  )
}

export default SocialSignIn