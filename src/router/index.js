import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import RegisterLogIn from "../components/RegisterLogIn"
import OutPatientDoctorLogIn from "../components/OutPatientDoctorLogIn"
import MedicalDoctorLogIn from "../components/MedicalDoctorLogIn"
import Register from "../components/Register"
import OutPatientDoctor from "../components/OutPatientDoctor"
import Test from "../components/Test";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/RegisterLogIn',
      name: 'RegisterLogIn',
      component: RegisterLogIn
    },
    {
      path: '/OutPatientDoctorLogIn',
      name: 'OutPatientDoctorLogIn',
      component: OutPatientDoctorLogIn
    },
    {
      path: '/MedicalDoctorLogIn',
      name: 'MedicalDoctorLogIn',
      component: MedicalDoctorLogIn
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/OutPatientDoctor',
      name: 'OutPatientDoctor',
      component: OutPatientDoctor
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
