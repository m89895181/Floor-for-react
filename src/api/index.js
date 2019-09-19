import request from '@/utils/request'

export function getBanner(){
    return request.get('/api/banner')
}

export function getClassify(){
    return request.get('/api/classify')
}