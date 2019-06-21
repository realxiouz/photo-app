import r from './request'

export const login = p => r.post('user/mobilelogin', p)
export const sendSms = p => r.post('sms/send', p)
