import r from './request'

export const login = p => r.post('user/mobilelogin', p)
export const sendSms = p => r.post('sms/send', p)

// home-page
export const allPhotoTypes = _ => r.get('/index/category')
export const getPhotosByType = p => r.get('/index/gallery', {params: p})
export const getPhotoDetail = p => r.get('/index/detail', {params: p})

// recharge-page
export const getPayTypes = _ => r.get('/score/paylist')
export const doOrder = p => r.post('/score/order', p)
export const checkPayResult = p => r.post('/score/querypay', p)

// upload file
export const uploadFile = p => r.post('/common/upload', p)
