import React from 'react'
import { Btn } from '../common/Btn'
import pizzaLogo from '../../assets/logos/pizzalogo.png'
import { Inputfield } from './Inputfield'
import { Label } from './Label'

export const FormTemplate = ({signUpPage}) => {
  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-8 lg:px-8 w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-12 w-auto" 
            src={pizzaLogo} alt="Logo"
        />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            { signUpPage ? "Create your account":"Log in to your account"}
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2 min-w-80" action="#" method="POST">

            { signUpPage &&
                (
                    <div>
                        <Label id={"name"} label={"Your Name"} />
                        <Inputfield id={"name"} name={"name"} type={"text"} placeholder={"John Doey"} autocomplete={"name"} />
                    </div>
                )
            }

            <div>
                <Label id={"email"} label={"Email Address"} />
                <Inputfield id={"email"} name={"email"} type={"email"} placeholder={"example123@gmail.com"} autocomplete={"email"} />
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <Label id={"password"} label={"Password"} />
                    {
                        signUpPage ? (''):(
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        )
                    }
                </div>
                <Inputfield id={"password"} name={"password"} type={"password"} placeholder={"example@123"} autocomplete={"password"}/>
            </div>

            { signUpPage &&
                (
                    <div>
                        <Label id={"confirmPassword"} label={"Confirm Password"} />
                        <Inputfield id={"confirmPassword"} name={"confirmPassword"} type={"password"} placeholder={"example@123"} autocomplete={"confirmPassword"} />
                    </div>
                )
            }

            <div className='w-full font-medium pt-4' >
                <Btn btnText={ signUpPage ? "Sign Up":"Log In"} bgColor={'bg-orange-400'} hoverColor={'bg-orange-600'} />
            </div>

        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          { signUpPage ? "Already have account?" : "Not a member?"}
          <a href={signUpPage ? '/login' : '/signup'} className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            { signUpPage ? "Login" : "Lets register as new member"}
          </a>
        </p>
      </div>
    </div>
  )
}
