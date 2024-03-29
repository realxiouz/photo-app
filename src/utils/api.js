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
export const buyPhoto = p => r.post('/gallery/buy', p)
export const checkBuyPhoto = p => r.get('/gallery/isbuy', {params: p})
export const orderPhoto = p => r.get('/gallery_order', {params: p})

// video
export const allVideoTypes = _ => r.get('/video/category')
export const getVideoByType = p => r.get('/video', {params: p})
export const getVideoDetail = p => r.get('/video/detail', {params: p})
export const buyVideo = p => r.post('/video/buy', p)
export const checkBuyVideo = p => r.get('/video/isbuy', {params: p})
export const commentList = p => r.get('/video/comments', {params: p})
export const postComment = p => r.post('/video/discuss', p)
export const orderVideo = p => r.get('/video_order', {params: p})

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

// article
export const allArticleTypes = _ => r.post('/article/category')
export const getArticleByType = p => r.get('/article', {params: p})
export const getArticleDetail = p => r.get('/article/detail', {params: p})

//
export const moneyTip = _ => r.get('/index/book')
export const withdrawTip = _ => r.get('/index/distribution_rule')
export const articleTip = _ => r.get('/index/news_content')
export const contributeTip = _ => r.get('/index/contribution_content')
export const partnerTip = _ => r.get('/index/partner_content')
export const joinTip = _ => r.get('/index/join_content')
export const yuepaiTip = _ => r.get('/index/yuepai_content')
export const cooperationTip = _ => r.get('/index/cooperation_content')
