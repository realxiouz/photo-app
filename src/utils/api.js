import r from './request'

export const login = p => r.post('/user/mobilelogin', p)
export const sendSms = p => r.post('/sms/send', p)
export const checkToken = _ => r.get('/token/check')
export const getInfoByToken = _ => r.get('/user')

export const getQrcode = _ => r.get('/promotion/qrcode')

// photo
export const allPhotoTypes = _ => r.get('/index/category')
export const getPhotosByType = p => r.get('/index/gallery', {params: p})
export const getPhotoDetail = p => r.get('/index/detail', {params: p})

// video
export const allVideoTypes = _ => r.get('/video/category')
export const getVideoByType = p => r.get('/video', {params: p})

// recharge-page
export const getPayTypes = _ => r.get('/score/paylist')
export const doOrder = p => r.post('/score/order', p)
export const checkPayResult = p => r.post('/score/querypay', p)
export const orderList = p => r.get('/score/record', {params: p})

// upload file
export const uploadFile = p => r.post('/common/upload', p)

//
export const editProfile = p => r.post('/user/profile', p)
export const logout = _ => r.post('/user/logout')
