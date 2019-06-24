import r from './request'

export const login = p => r.post('user/mobilelogin', p)
export const sendSms = p => r.post('sms/send', p)

export const allPhotoTypes = _ => r.get('/index/category')
export const getPhotosByType = p => r.get('/index/gallery', {params: p})
export const getPhotoDetail = p => r.get('/index/detail', {params: p})
