import React,{ useState} from 'react'
import M2 from '../images/m2.jpg'
import BGF from '../images/BGF.ico'
// import W3 from 'http://www.w3.org/2000/svg'
// import W301 from 'http://www.w3.org/1999/xlink'

function Login(props) {
    console.log(props)
    // const {auth ,setAuth } = props;
    const [fields ,setFields] = useState({
        email:'',
        password:'',
    })
    const [fieldErrors ,setFieldErrors] = useState({
        email:'',
        password:'',
    })

    const handleFieldChange = (e) => {
        const updatedFields = {
            ...fields,
            [e.target.name]: e.target.value,
        }
        setFields(updatedFields)
    }

    const handleSubmit=(e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        console.log(formData.get('email'))
        console.log(formData.get('passWord'))
    }

    const handleFormChange=(e)=>{
        console.log('目前更新欄位',e.target.name)
        const updatedFieldErrors= {
            ...fieldErrors,
            [e.target.name]:'',
        }
        setFieldErrors(updatedFieldErrors)
    }

    //illegel check
    const handleFromInvalid=(e)=>{
        e.preventDefault();

        const updatedFieldErrors= {
            ...fieldErrors,
            [e.target.name]:e.target.validationMessage,
        }
        setFieldErrors(updatedFieldErrors)
    }


    return (
        <>
        <div className="container my-0 max-w-7xl">
          <div className="flex justify-between mx-12">
              <div className="hidden md:flex md:w-2/3">
                  <img  src={M2}  className="object-cover" />
              </div>

                <div className="pl-6 mx-auto my-0 mt-20 max-w-7xl">
                    <form 
                    onSubmit ={handleSubmit} 
                    onChange={handleFormChange}
                    onInvalid={handleFromInvalid} >
                    <div>
                       <a href="#/" className="flex">
                           <img className="w-10 h-10" src={BGF} />
                           <h2 className="flex ml-2 text-3xl font-bold text-black">
                            <span className="text-tomato-500">B</span>oard
                            <span className="text-navy-300">G</span>ame
                            <span className="text-gold-300">F</span>riend
                          </h2>
                       </a>
                       <h2 className="text-2xl font-semibold text-center">會員登入</h2>
                    </div>

                    <div>
                        <div className="grid gap-4 grid-col-6">

                            <div className="col-span-6 text-gray-700">
                                <label for="email"
                                className="block text-sm font-medium">電子信箱</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="請輸入您的電子信箱 "
                                    value ={fields.email}
                                    autocomplete="email"
                                    className="block w-full mt-1 transition duration-500 ease-in-out transform border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    onChange={handleFieldChange}
                                    required
                                />
                            </div>

                            <div className="col-span-6 text-gray-700">
                                <label for="password" 
                                className="block text-sm font-medium">密碼</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    value ={fields.password}
                                    autocomplete="password" 
                                    placeholder="請輸入您的密碼"
                                    minlength="6"
                                    className="block w-full mt-1 transition duration-500 ease-in-out transform border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    onChange={handleFieldChange}
                                    required
                                    />
                            </div>

                            <div className="col-span-6 ">
                              <a href="/member/MemberCenter.html">  
                                <button
                                  type="submit"
                                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded shadow-sm bg-gold-300 hover:bg-yellow-500"
                                >
                                  登入
                                </button>
                              </a>
                            </div>
                            </div>
                        </div>
                    </form>

                        <div className="flex justify-end mt-1 ">
                            <a className="text-sm hover:text-yellow-500" href="#/">忘記密碼?</a>
                        </div>
                        <hr className="mt-3 mb-4 border-gray-400" />
                        <div className="justify-between xl:flex">
                            <button
                            type="button"
                            className="inline-flex items-center justify-center w-full px-1 py-2 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-gold-300 focus:outline-none">
                                <div className="flex items-center justify-center">
                                    {/* <svg
                                        xmlns={W3}
                                        xmlns:xlink={W301}
                                        className="w-6 h-6"
                                        viewBox="0 0 48 48"
                                        >
                                        <defs>
                                            <path
                                            id="a"
                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                            ></path>
                                        </defs>
                                        <clipPath id="b">
                                            <use xlink:href="#a" overflow="visible"></use>
                                        </clipPath>
                                        <path
                                            clip-path="url(#b)"
                                            fill="#FBBC05"
                                            d="M0 37V11l17 13z"
                                        ></path>
                                        <path
                                            clip-path="url(#b)"
                                            fill="#EA4335"
                                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                                        ></path>
                                        <path
                                            clip-path="url(#b)"
                                            fill="#34A853"
                                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                                        ></path>
                                        <path
                                            clip-path="url(#b)"
                                            fill="#4285F4"
                                            d="M48 48L17 24l-4-3 35-10z"
                                        ></path>
                                    </svg> */}
                                    <span className="ml-2 text-xs"> Google 登入 </span> 
                                </div>
                            </button>
                            <button
                            type="button"
                            className="inline-flex justify-center w-full px-1 py-2 mt-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg xl:ml-4 xl:mt-0 border-blueGray-300 hover:bg-gold-300">
                                <div className="flex items-center justify-center">
                                    {/* <svg
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="2"
                                    >
                                    <path
                                        d="M374.245 285.825l14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.442 320.442 0 00250.408 512a320.42 320.42 0 0049.708-3.865v-222.31h74.129z"
                                        fill="#1877f2"
                                        fill-rule="nonzero"
                                    />
                                    </svg> */}
                                    <span className="ml-2 text-xs"> Facebook 登入 </span>
                                </div>
                            </button>
                        </div> 
                        <div className="flex justify-center mt-4 ">
                            <a className="py-2 text-sm transition duration-500 ease-in-out transform border-2 border-gray-200 rounded xl:px-36 lg:px-28 md:px-24 px-28 hover:bg-gold-300" 
                            href="/member/signup.html">註冊
                            </a>
                        </div>
                   </div>
              </div>
          </div>
        {/* </div> */}
    </>
    )
}

export default Login
